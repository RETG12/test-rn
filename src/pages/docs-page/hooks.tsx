import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";
import { DocsResponse } from "./types";

const LOAD_DOCS_QUERY = 'LOAD_DOCS_QUERY';

export const useDocsList = () => {
    const { data: docs } = useSuspenseQuery({
        queryKey: [LOAD_DOCS_QUERY],
        queryFn: async () => {
            const { data } = await axios.get<DocsResponse[]>('/api/docs');
            return data;
        },
    });

    return { docs };
};