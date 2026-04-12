import { ReactNode } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

interface CustomCardProps {
  children: ReactNode
  variant?: 'elevated' | 'outline' | 'flat'
  padding?: 'sm' | 'md' | 'lg'
  style?: StyleProp<ViewStyle>
}

const paddingMap = { sm: 12, md: 16, lg: 24 } as const

const getVariantStyle = (variant: NonNullable<CustomCardProps['variant']>): ViewStyle => {
  switch (variant) {
    case 'outline':
      return {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#EBF0F5',
      }
    case 'flat':
      return { backgroundColor: 'transparent' }
    default:
      return {
        backgroundColor: '#f2f2f7',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
      }
  }
}

const CustomCard = ({ children, variant = 'elevated', padding = 'md', style }: CustomCardProps) => {
  return (
    <View
      style={[
        getVariantStyle(variant),
        {
          borderRadius: 16,
          padding: paddingMap[padding],
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

export default CustomCard
