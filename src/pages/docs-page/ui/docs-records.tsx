import { Text, View } from "react-native";
import { DocsResponse } from "../types";

export const DocsRecords: React.FC<DocsResponse> = ({ id, name, comment, created, like }) => {

    return (
        <View key={id}>
            <Text>{name}</Text>
        </View>
    )
}