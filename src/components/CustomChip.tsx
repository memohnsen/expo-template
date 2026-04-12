import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface CustomChipProps {
  text: string
  variant?: 'soft' | 'outline' | 'filled'
  selected?: boolean
  size?: 'sm' | 'md'
  disabled?: boolean
  onPress?: () => void
  onRemove?: () => void
  style?: StyleProp<ViewStyle>
}

const primary = { bg: '#5978e9', fg: '#ffffff', border: '#5978e9' }

const getSurface = (variant: NonNullable<CustomChipProps['variant']>, selected: boolean) => {
  if (variant === 'filled') {
    return selected
      ? { bg: primary.bg, fg: primary.fg, borderWidth: 0 as const }
      : { bg: '#E8EDFC', fg: primary.bg, borderWidth: 0 as const }
  }
  if (variant === 'outline') {
    return selected
      ? { bg: primary.bg, fg: primary.fg, borderWidth: 1 as const, borderColor: primary.border }
      : {
          bg: 'transparent',
          fg: '#111111',
          borderWidth: 1 as const,
          borderColor: '#EBF0F5',
        }
  }
  return selected
    ? { bg: primary.bg, fg: primary.fg, borderWidth: 0 as const }
    : { bg: '#EBF0F5', fg: '#4b5563', borderWidth: 0 as const }
}

const CustomChip = ({
  text,
  variant = 'soft',
  selected = false,
  size = 'md',
  disabled = false,
  onPress,
  onRemove,
  style,
}: CustomChipProps) => {
  const surface = getSurface(variant, selected)
  const padV = size === 'sm' ? 6 : 8
  const padH = size === 'sm' ? 10 : 12
  const fontSize = size === 'sm' ? 13 : 14
  const iconSize = size === 'sm' ? 14 : 16

  const content = (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-start',
          borderRadius: 999,
          paddingVertical: padV,
          paddingLeft: padH,
          paddingRight: onRemove ? padV : padH,
          backgroundColor: surface.bg,
          borderWidth: surface.borderWidth,
          borderColor: 'borderColor' in surface ? surface.borderColor : undefined,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      <Text style={{ color: surface.fg, fontWeight: '600', fontSize }}>{text}</Text>
      {onRemove ? (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={`Remove ${text}`}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          disabled={disabled}
          onPress={onRemove}
          style={{ marginLeft: 6, paddingRight: padH - padV }}
        >
          <Ionicons
            name="close"
            size={iconSize}
            color={surface.fg}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  )

  if (onPress) {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        disabled={disabled}
        activeOpacity={0.85}
        onPress={onPress}
      >
        {content}
      </TouchableOpacity>
    )
  }

  return content
}

export default CustomChip
