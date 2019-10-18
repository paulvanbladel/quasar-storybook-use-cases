import HelloWorld from './hello-world.vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
export default { title: 'hello-world component' }
const firstcomponent = () => ({
  components: { HelloWorld },
  template: '<hello-world :msg="myMsg"/>',
  data () {
    return {
      myMsg: 'test msg'
    }
  }
})
storiesOf('Buttons', module).add('button', firstcomponent)

const componentWithAction = () => ({
  components: { HelloWorld },
  template: '<hello-world @handleClick="action" :msg="myMsg"/>',
  methods: {
    action: action('You clicked')
  },
  data () {
    return {
      myMsg: 'test msg'
    }
  }
})
storiesOf('Buttons', module).add('with action', componentWithAction)
