<template>
  <ui-demo title="충전/환전 관리" :snippets="snippets"></ui-demo>
</template>

<script>
import UiDemo from '@/components/demo/UIDemo'

// Snippets
import SearchSnippet from '!!raw-loader!./_examples/data-tables/simple/search.vue'

export default {
  components: {
    UiDemo
  },
  data: () => ({
    snippets: [
      {
        title: '충전관리',
        snippet: SearchSnippet
      }
      
    ]
  })
}
</script>
