import { ReactNode } from 'react'
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native'

interface CustomIconButtonProps {
  onPress: () => void
  children: ReactNode
  variant?: 'ghost' | 'filled' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  accessibilityLabel?: string
  style?: StyleProp<ViewStyle>
}

const sizeMap = { sm: 36, md: 44, lg: 52 } as const

const getVariantStyle = (variant: NonNullable<CustomIconButtonProps['variant']>): ViewStyle => {
  switch (variant) {
    case 'filled':
      return { backgroundColor: '#5978e9' }
    case 'outline':
      return {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#EBF0F5',
      }
    default:
      return { backgroundColor: 'transparent' }
  }
}

const CustomIconButton = ({
  onPress,
  children,
  variant = 'ghost',
  size = 'md',
  accessibilityLabel,
  style,
}: CustomIconButtonProps) => {
  const dim = sizeMap[size]

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={[
        getVariantStyle(variant),
        {
          width: dim,
          height: dim,
          borderRadius: dim / 2,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
    >
      {children}
    </TouchableOpacity>
  )
}

export default CustomIconButton
