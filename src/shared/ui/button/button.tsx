import { memo } from 'react';
import { Pressable, StyleSheet, Text, ActivityIndicator, ViewStyle } from 'react-native';

type Props = {
    style?: ViewStyle,
    title: String,
    loading?: boolean,
    onPress: () => void,
    disabled?: boolean,
    testID?: string
}

const ButtonComponent: React.FC<Props> = ({ style, title, loading, onPress, disabled, testID }) => (
    <Pressable
        testID={testID}
        style={[
            styles.sendButton,
            disabled && styles.buttonDisabled,
            style,
        ]}
        disabled={loading || disabled}
        onPress={onPress}
    >
        {loading ? (
            <ActivityIndicator color="#fff" />
        ) : (
            <Text style={styles.sendButtonText}>{title}</Text>
        )}
    </Pressable>
);

export const Button = memo(ButtonComponent);

const styles = StyleSheet.create({
    sendButton: {
        backgroundColor: '#000000',
        width: '90%',
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 14,
    },
    buttonDisabled: {
        backgroundColor: '#b5b5b5',
    },
});
