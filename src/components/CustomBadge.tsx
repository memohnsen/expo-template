import { StyleProp, Text, View, ViewStyle } from 'react-native'

interface CustomBadgeProps {
  text: string
  variant?: 'neutral' | 'primary' | 'success'
  size?: 'sm' | 'md'
  style?: StyleProp<ViewStyle>
}

const getColors = (variant: NonNullable<CustomBadgeProps['variant']>) => {
  switch (variant) {
    case 'primary':
      return { bg: '#E8EDFC', fg: '#5978e9' }
    case 'success':
      return { bg: '#E6F4EA', fg: '#1e7e34' }
    default:
      return { bg: '#EBF0F5', fg: '#4b5563' }
  }
}

const CustomBadge = ({ text, variant = 'neutral', size = 'md', style }: CustomBadgeProps) => {
  const { bg, fg } = getColors(variant)
  const padV = size === 'sm' ? 2 : 4
  const padH = size === 'sm' ? 8 : 10
  const fontSize = size === 'sm' ? 11 : 12

  return (
    <View
      style={[
        {
          alignSelf: 'flex-start',
          backgroundColor: bg,
          paddingVertical: padV,
          paddingHorizontal: padH,
          borderRadius: 999,
        },
        style,
      ]}
    >
      <Text style={{ color: fg, fontWeight: '600', fontSize }}>{text}</Text>
    </View>
  )
}

export default CustomBadge
