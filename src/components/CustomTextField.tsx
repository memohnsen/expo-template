import { ReactNode } from 'react'
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

interface CustomTextFieldProps extends Omit<TextInputProps, 'style'> {
  label?: string
  variant?: 'outline' | 'filled'
  containerStyle?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
  leftAccessory?: ReactNode
  rightAccessory?: ReactNode
}

const getContainerStyle = (variant: NonNullable<CustomTextFieldProps['variant']>): ViewStyle => {
  switch (variant) {
    case 'filled':
      return {
        backgroundColor: '#f2f2f7',
        borderWidth: 0,
      }
    default:
      return {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#EBF0F5',
      }
  }
}

const CustomTextField = ({
  label,
  variant = 'outline',
  containerStyle,
  inputStyle,
  leftAccessory,
  rightAccessory,
  ...inputProps
}: CustomTextFieldProps) => {
  return (
    <View style={containerStyle}>
      {label ? (
        <Text
          style={{
            marginBottom: 8,
            fontWeight: '600',
            color: '#111111',
            fontSize: 14,
          }}
        >
          {label}
        </Text>
      ) : null}
      <View
        style={[
          getContainerStyle(variant),
          {
            borderRadius: 14,
            paddingHorizontal: 14,
            minHeight: 52,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          },
        ]}
      >
        {leftAccessory}
        <TextInput
          placeholderTextColor="#9ca3af"
          style={[
            {
              flex: 1,
              paddingVertical: 14,
              fontSize: 16,
              color: '#111111',
            },
            inputStyle,
          ]}
          {...inputProps}
        />
        {rightAccessory}
      </View>
    </View>
  )
}

export default CustomTextField
