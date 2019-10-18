const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(scss|sass)$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  })

  return config
}
