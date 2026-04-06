const path = require('path')
const { getDefaultConfig } = require('expo/metro-config')
const { withUniwindConfig } = require('uniwind/metro')

const config = getDefaultConfig(__dirname)

module.exports = withUniwindConfig(config, {
  cssEntryFile: './global.css',
  dtsFile: path.resolve(__dirname, 'src/app/uniwind-types.d.ts'),
})
