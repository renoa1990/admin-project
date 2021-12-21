<template>
  <div class="position-relative">
    <div class="d-flex flex-row justify-space-between mb-2">
      <div class="title font-weight-bold" style="text-transform: capitalize;">{{ title }}</div>
 
    </div>

    <vue-live-demo :code="code" :components="{ ColorPaletteDemo, ...VuetifyAll, ...components }" />

  </div>
</template>

<script>
import Vue from 'vue'
import * as VuetifyAll from 'vuetify/lib'
import VueLiveDemo from '@indielayer/vue-live-demo'
import ColorPaletteDemo from './ColorPaletteDemo'

export default {
  components: {
    VueLiveDemo
  },
  props: {
    showCode: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    },
    components: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      VuetifyAll,
      ColorPaletteDemo
    }
  },
  mounted() {
  }
}
</script>
