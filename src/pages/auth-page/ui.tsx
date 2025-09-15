import { Button } from "@/shared/ui/button"
import { TextField } from "@/shared/ui/text-field"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { KeyboardAvoidingView, Linking, Platform, Text, View } from "react-native"
import { useCodeVerify } from "./hooks"
import { styles } from "./styles"

type EnterCodeFormValues = {
    code: number,
}

const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

export const AuthPage = () => {

    const { control, handleSubmit, formState: { isValid } } = useForm<EnterCodeFormValues>({ mode: 'onChange' });
    const { validateCode, isValidating } = useCodeVerify();

    return (
        <KeyboardAvoidingView style={styles.container} behavior={behavior}>
            <Text style={styles.headerText}>Test app</Text>
            <View style={styles.textFieldContainer}>
                <Text style={styles.subTitleHeader}>Enter your pin code</Text>
                <Text style={styles.subTitleText}>Enter your pincode to sign in for this app</Text>
                <Controller
                    control={control}
                    name="code"
                    rules={{
                        required: 'This field is required',
                        pattern: {
                            value: /^\d{4}$/,
                            message: 'The code must be 4 digits',
                        },
                    }}
                    render={({ field: { onChange, onBlur }, fieldState: { error } }) => <>
                        <TextField
                            placeholder="****"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            maxLength={4}
                            autoComplete="off"
                            autoCorrect={false}
                        />
                        <Text style={styles.errorText}>{error?.message}</Text>
                    </>
                    }
                />
                <Button
                    title="Continue"
                    onPress={handleSubmit(validateCode as SubmitHandler<EnterCodeFormValues>)}
                    disabled={!isValid}
                    loading={isValidating}
                />
            </View>
            <View style={styles.termsContainer}>
                <Text style={styles.termsText}>
                    By clicking continue, you agree to our <Text style={styles.termsLink} onPress={() => Linking.openURL('https://www.google.com/?hl=ru')}>Terms of Service</Text> and <Text style={styles.termsLink} onPress={() => Linking.openURL('https://www.google.com/?hl=ru')}>Privacy Policy</Text>
                </Text>
            </View>
        </KeyboardAvoidingView>
    )
}
