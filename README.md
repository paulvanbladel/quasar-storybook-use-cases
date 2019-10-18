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
