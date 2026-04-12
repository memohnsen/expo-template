import { StyleProp, Text, View, ViewStyle } from 'react-native'

interface CustomSectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  style?: StyleProp<ViewStyle>
}

const CustomSectionHeader = ({
  title,
  subtitle,
  align = 'left',
  style,
}: CustomSectionHeaderProps) => {
  return (
    <View
      style={[
        {
          alignItems: align === 'center' ? 'center' : 'flex-start',
        },
        style,
      ]}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          color: '#111111',
          textAlign: align,
        }}
      >
        {title}
      </Text>
      {subtitle ? (
        <Text
          style={{
            marginTop: 4,
            fontSize: 14,
            color: '#6b7280',
            textAlign: align,
          }}
        >
          {subtitle}
        </Text>
      ) : null}
    </View>
  )
}

export default CustomSectionHeader
