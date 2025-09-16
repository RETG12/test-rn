import { Text, View } from "react-native";
import { DocsResponse } from "../types";
import dayjs from "dayjs";
import { TripsIcon } from "@/shared/ui/icons/trips-icon";
import { styles } from "../styles";
import { Button } from "@/shared/ui/button";
import { LikeIcon } from "@/shared/ui/icons/like-icon";
import { UnlikeIcon } from "@/shared/ui/icons/unlike-icon";
import { useLike } from "../hooks";
import Toast from "react-native-toast-message";
import { useUserToken } from "@/entities/user-token";
import { useEffect, useState } from "react";

export const DocsRecords: React.FC<DocsResponse> = ({ id, name, comment, created, like }) => {
    const { clearToken } = useUserToken();
    const { likeDoc, errorLike } = useLike();
    const [isLikingLocal, setIsLikingLocal] = useState(false);

    useEffect(() => {
        if (errorLike) {
            setIsLikingLocal(false);
            if (errorLike.response?.status === 401) {
                clearToken();
                Toast.show({
                    type: 'error',
                    text1: 'Session expired, please log in again',
                });
            } else {
                Toast.show({
                    type: 'error',
                    text1: errorLike.response?.status === 404 ? 'Document not found' : 'Error, please try again later',
                });
            }
        }
    }, [errorLike, clearToken]);

    return (
        <View style={styles.docsContainer} key={id}>
            <TripsIcon style={styles.tripsIcon} />
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{name} </Text>
                    <Text style={styles.subTitleText}>{dayjs(created).format('DD.MM.YYYY')}</Text>
                </View>
                <Text style={styles.subTitleText}>{isLikingLocal ? 'Like in progress' : comment}</Text>
            </View>
            <Button
                style={styles.button}
                title={like ? <LikeIcon /> : <UnlikeIcon />}
                onPress={() => {
                    setIsLikingLocal(true);
                    likeDoc({ id, like: !like }, { onSettled: () => setIsLikingLocal(false) });
                }}
                loading={isLikingLocal}
                type={true}
            />
        </View>
    )
}