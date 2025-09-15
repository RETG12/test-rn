import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const LoadingPage = () => (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" animating />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
});
