import { Stack } from 'expo-router'

export default function CameraLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerLargeTitleEnabled: true,
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: 'Tabs 2' }}
      />
    </Stack>
  )
}
