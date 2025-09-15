import { FlatList, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDocsList } from "../hooks";
import { DocsRecords } from "./docs-records";

export const DocsPage = () => {
    const { bottom } = useSafeAreaInsets();
    const { docs } = useDocsList();

    return (
        <View>
            <FlatList
                data={docs ?? []}
                // ListEmptyComponent={ }
                contentContainerStyle={{ paddingBottom: bottom + 68 }}
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