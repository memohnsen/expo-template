import { NativeTabs } from 'expo-router/unstable-native-tabs'

export default function TabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="tabs1">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon
          sf={{ default: 'camera', selected: 'camera' }}
          md="photo_camera"
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="tabs2">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon
          sf="list.bullet"
          md="list"
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon
          sf="gearshape"
          md="settings"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}
