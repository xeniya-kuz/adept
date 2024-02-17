import HTMLWebpack from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildPaths } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins (
  paths: BuildPaths,
  isDev: boolean
): webpack.WebpackPluginInstance[] {
  const plugins = [
    new HTMLWebpack({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ]

  return plugins
}
