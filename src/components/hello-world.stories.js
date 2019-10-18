import HelloWorld from './hello-world.vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
export default { title: 'hello-world component' }
const component = () => ({
  components: { HelloWorld },
  template: '<hello-world @handleClick="action" :msg="myMsg"/>',
  methods: {
    action: action('ge hebt geklikt')
  },
  data () {
    return {
      myMsg: 'test msg'
    }
  }
})
storiesOf('Buttons', module).add('my-first-button', component)
