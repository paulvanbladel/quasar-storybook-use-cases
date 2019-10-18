# Quasar App (quasar-storybook-use-cases)

## create quasar app with quasar cli

```
quasar create .
```

## add story book npm packages

```
yarn add -D @storybook/vue
yarn add -D vue-loader vue-template-compiler @babel/core babel-loader babel-preset-vue
```

## add storybook command to package.json

```
{
"scripts": {
  "storybook": "start-storybook"
}
}

```

## create config file and webpack.config

create config.json in .storybook folder

```
import { configure } from '@storybook/vue'

import 'quasar/dist/quasar.sass'

import Vue from 'vue'
import Quasar from 'quasar'

import 'quasar/icon-set/material-icons'
import '@quasar/extras/roboto-font/roboto-font.css'

Vue.use(Quasar)
configure(require.context('../src', true, /\.stories\.js$/), module)

```

create webpack.config.js in .storybook folder

```
const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(scss|sass)$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  })

  return config
}

```

## addon story source

```
yarn add -D @storybook/addon-storysource
```

Update webpack config with:

```
 config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre'
  })
```

so it becomes:

```
const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(scss|sass)$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  })
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre'
  })

  return config
}
```

add in addon.js

```
import '@storybook/addon-storysource/register'
```

## addon action

```
yarn add -D @storybook/addon-actions
```

add in addon.js

```
import '@storybook/addon-actions/register'
```
