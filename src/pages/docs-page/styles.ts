import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    docsContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    contentContainer: {
        marginLeft: 20,
        marginRight: 50,
    },
    textContainer: {
        flexDirection: 'row',
    },
    titleText: {
        fontSize: 14,
        fontWeight: 500,
    },
    subTitleText: {
        fontSize: 14,
        fontWeight: 400,
        color: '#00000080',
    },
    button: {
        height: 32,
        width: 70,
        alignSelf: 'center',
    },
    tripsIcon: {
        alignSelf: 'center',
    },
});
