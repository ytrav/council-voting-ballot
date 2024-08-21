<script lang="ts">
import { RouterView } from 'vue-router'
import { useLocaleStore } from './stores/localeStore'
import { mapStores } from 'pinia'
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    RouterView,
    AppHeader,

  },
  computed: {
    ...mapStores(useLocaleStore, ['locale'])
  },
  watch: {
    // watch for route changes and update the locale, /eng or /mev call localeStore.setLocale('localeEng') or localeStore.setLocale('localeMev')
    $route(to) {
      console.log(to.path);
      
      if (to.path === '/eng') {
        this.localeStore.setLocale('eng')
        console.log('eng');
        
      } else if (to.path === '/mev') {
        console.log('mev');
        
        this.localeStore.setLocale('mev')
      }
    }

  }
}
</script>

<template>
  <AppHeader />
  <RouterView />
</template>
