import { configure } from '@storybook/vue'

import 'quasar/dist/quasar.sass'

import Vue from 'vue'
import Quasar from 'quasar'

import 'quasar/icon-set/material-icons'
import '@quasar/extras/roboto-font/roboto-font.css'

Vue.use(Quasar)
configure(require.context('../src', true, /\.stories\.js$/), module)
