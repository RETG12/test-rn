import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 16,
        backgroundColor: '#FFFFFF',
    },
    textFieldContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: "#000000",
        fontWeight: 600,
        fontSize: 24,
        textAlign: 'center',
        marginTop: 108,
    },
    subTitleHeader: {
        color: "#000000",
        fontWeight: 600,
        fontSize: 16,
        textAlign: 'center',
    },
    subTitleText: {
        color: "#000000",
        fontWeight: 400,
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 24,
    },
    errorText: {
        color: "#FF0000",
        fontWeight: 400,
        fontSize: 12,
        marginVertical: 2,
    },
    termsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    termsText: {
        textAlign: 'center',
        color: '#828282',
        fontSize: 12,
        fontWeight: 400,
    },
    termsLink: {
        color: '#000',
        fontWeight: 400,
        fontSize: 12,
    },
});
