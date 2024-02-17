import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildLoaders (isDev: boolean): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\./,
            localIdentName: isDev
              ? '[name]__[local]_[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }

  return [svgLoader, tsLoader, cssLoader]
}
