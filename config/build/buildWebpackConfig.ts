import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export default function buildWebpackConfig (
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options
  return {
    mode,
    entry: {
      bundle: paths.entry
    },
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(paths, isDev),
    module: {
      rules: buildLoaders(isDev)
    },

    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
