<script>
import { RouterLink } from 'vue-router'
import { useLocaleStore } from '../stores/localeStore.ts'
import { mapStores } from 'pinia'

export default {
    data() {
        return {
            membersOnline: 0,
        }
    },
    components: {
        RouterLink
    },
    computed: {
        ...mapStores(useLocaleStore, ['locale'])
    },
    mounted() {
        fetch('https://discord.com/api/guilds/1240273703158419456/widget.json')
            .then(response => response.json())
            .then(data => {
                this.membersOnline = data.members.length
            }
        )
        setInterval(() => {
            fetch('https://discord.com/api/guilds/1240273703158419456/widget.json')
                .then(response => response.json())
                .then(data => {
                    this.membersOnline = data.members.length
                }
            )
        }, 30000)
    },
    beforeUnmount() {
        clearInterval(this.membersOnline)
    }
}
</script>

<template>
    <header>
        <h2>{{ localeStore.activeLocale.header.heading }}</h2>
        <h2 class="short">{{ localeStore.activeLocale.header.headingShort }}</h2>
        <div class="right-side">
            <h3>Citizens {{ localeStore.activeLocale.header.online }}: {{ membersOnline }}</h3>
        <div class="lang-button">
            <RouterLink v-wave="{
                duration: 0.15,
                color: 'currentColor',
                initialOpacity: 0.2,
                easing: 'ease-out'
            }" to="/eng" replace>ENG</RouterLink>
            <span>/</span>
            <RouterLink v-wave="{
                duration: 0.15,
                color: 'currentColor',
                initialOpacity: 0.2,
                easing: 'ease-out'
            }" to="/mev" replace>MEV</RouterLink>
        </div>
        </div>
    </header>
</template>