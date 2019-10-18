<template>
  <q-btn
    :label='msg'
    color='primary'
    @click='notifyMe'
  ></q-btn>
</template>

<script>
import { Notify } from 'quasar'
export default {
  props: { msg: String },
  name: 'HelloWorld',
  data () {
    return {}
  },
  methods: {
    notifyMe () {
      Notify.create('Danger, Will Robinson! Danger!')
      this.$emit('handleClick', 'goed zo')
    }
  }
}
</script>
