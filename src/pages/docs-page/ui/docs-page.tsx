import { FlatList, RefreshControl, View } from "react-native"
import { useDocsList } from "../hooks";
import { DocsRecords } from "./docs-records";
import React, { useEffect } from "react";
import { LoadingPage } from "@/shared/ui/loading-page";
import { sortDocsRecords } from "@/shared/lib/sort-docs";
import Toast from "react-native-toast-message";
import { useUserToken } from "@/entities/user-token";

export const DocsPage = () => {
    const { clearToken } = useUserToken();
    const { docs, isLoadingDocs, errorDocs, refetchDocs } = useDocsList();

    useEffect(() => {
        if (errorDocs) {
            if (errorDocs.response?.status === 401) {
                clearToken()
            } else {
                Toast.show({
                    type: 'error',
                    text1: errorDocs.response?.status === 404 ? 'Document not found' : 'Error, please try again later',
                });
            }
        }
    }, [errorDocs, clearToken]);

    if (isLoadingDocs) {
        return <LoadingPage />;
    }

    return (
        <View>
            <FlatList
                data={sortDocsRecords(docs ?? [])}
                refreshControl={<RefreshControl refreshing={isLoadingDocs} onRefresh={refetchDocs} />}
                renderItem={({ item }) => (
                    <DocsRecords
                        id={item.id}
                        name={item.name}
                        comment={item.comment}
                        created={item.created}
                        like={item.like}
                    />
                )}
            />
        </View>
    )
}