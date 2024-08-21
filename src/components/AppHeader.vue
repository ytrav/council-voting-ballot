<script>
import { RouterLink } from 'vue-router'
import { useLocaleStore } from '../stores/localeStore.ts'
import { mapStores } from 'pinia'

export default {
    components: {
        RouterLink
    },
    computed: {
        ...mapStores(useLocaleStore, ['locale'])
    },
}
</script>

<template>
    <header>
        <h2>{{ localeStore.activeLocale.header.heading }}</h2>
        <div class="lang-button">
            <RouterLink to="/eng" replace>ENG</RouterLink>
            <span>/</span>
            <RouterLink to="/mev" replace>MEV</RouterLink>
        </div>
    </header>
</template>