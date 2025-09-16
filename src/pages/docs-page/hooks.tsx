import axios from "axios";
import { DocsResponse } from "./types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiError } from "@/shared/api/api-error-response";

type MutationVariables = {
    id: string,
    like: boolean,
}

const LOAD_DOCS_QUERY = 'LOAD_DOCS_QUERY';

export const useDocsList = () => {
    const { data: docs, isPending: isLoadingDocs, error: errorDocs, refetch: refetchDocs } = useQuery<any, ApiError>({
        queryKey: [LOAD_DOCS_QUERY],
        queryFn: async () => {
            const { data } = await axios.get<DocsResponse[]>('/api/docs');
            return data;
        },
    });

    return { docs, isLoadingDocs, errorDocs, refetchDocs };
};

export const useLike = () => {
    const queryClient = useQueryClient();

    const { mutate: likeDoc, error: errorLike } = useMutation<any, ApiError, MutationVariables>({
        mutationFn: ({ id, like }) =>
            axios.patch(`/api/docs/${id}`, { like }),
        onSuccess: () => {
            queryClient.refetchQueries({ queryKey: [LOAD_DOCS_QUERY] });
        },
    });

    return { likeDoc, errorLike };
};
