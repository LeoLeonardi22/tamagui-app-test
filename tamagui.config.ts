import { config } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'
import { themes } from './themes'

const tamaguiConfig = createTamagui({
  ...config,
  themes,  // ✅ Ora usa i tuoi temi custom!
})

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}