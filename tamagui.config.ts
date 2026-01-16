import { themes } from '@/themes'
import { config as defaultConfig } from '@tamagui/config'
import { createTamagui } from 'tamagui'

const tamaguiConfig = createTamagui({
  ...defaultConfig,
  themes,
})

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
