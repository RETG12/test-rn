import { forwardRef } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export const TextField = forwardRef<TextInput, TextInputProps>(({ style, ...props }, ref) => (
    <TextInput
        ref={ref}
        style={StyleSheet.compose(styles.input, style)}
        {...props}
    />
));

const styles = StyleSheet.create({
    input: {
        height: 40,
        fontSize: 14,
        borderStyle: 'solid',
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
        width: '90%',
        textAlign: 'center',
    },
});
