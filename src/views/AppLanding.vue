<script lang="ts">
import { useLocaleStore } from '../stores/localeStore'
import { mapStores } from 'pinia'

export default {
    data() {
        return {
            fields2: [
                {
                    name: 'voter-name',
                    label: 'Your name:',
                    placeholder: 'John Doe II',
                    variable: 'voterName'
                },
                {
                    name: 'discord-username',
                    label: 'Discord username:',
                    placeholder: '@johndoes',
                    variable: 'discordUsername'
                }
            ],
            parties: [
                {
                    name: 'Costco Party',
                    leader: 'Mr. Cash Money',
                    banner: '/fridge_banner.webp',
                    motto: 'We\'re the Costco Guys',
                    desc: 'Everyone should have access to bulk goods at a low price, with the only large fee being a membership.',
                    colours: ['e32a36', 'ffffff', '0060a9']
                },
                {
                    name: 'Cross Byte\'s Party',
                    leader: 'Cross_Byte',
                    banner: '/cross_banner.jpeg',
                    motto: 'Play toys with us',
                    desc: 'The goal of my political party is to have fun and be silly but also make good decisions powered by the users.',
                    colours: ['ffd700', '000000']
                },
                {
                    name: 'Eighty the Best Party',
                    leader: 'Eighty',
                    banner: '/eighty_banner.jpg',
                    motto: 'You should vote me NOW',
                    desc: 'Givin rice and kisses to everybody.',
                    colours: ['fec5e5']
                },
                {
                    name: 'Maevesoupia Party, the Peak of Human Evolution and Doge Man',
                    leader: 'Noobish',
                    members: ['Doge Man', 'Serbyro'],
                    banner: '/noobish_banner.PNG?url',
                    motto: 'We need more soup!!!!!!',
                    desc: 'We will make everyone lots of soup, and allow them to buy clothes from the soup store. (We will also reinstate the death penalty.) Oh and also we’re gonna make Homelander president of Jordan for funsies.<br><br>We think that soup will improve the living conditions of citizens, and if living conditions are nice, we can invest more time into other matters, like taking funny pictures of animals.<br><br>Speaking of animals, all octopuses must be protected and named either Timothy or Ambrosius. If an octopus appears, you are legally obligated to adopt it.<br><br>There must be a poster of The Deep from popular Amazon series \'The Boys\' in every official government building.',
                    colours: ['dc4601', '757816']
                },
                {
                    name: 'Twink Suffrage Party',
                    leader: 'Marceline the Vampire Queen',
                    members: ['Jec'],
                    banner: '/marceline_banner.png',
                    motto: 'Universal twink rights for all.',
                    desc: 'I promise to bring about a free open democracy for all. Where all people not just twinks get their deserved rights. A world where food, shelter, and water are a common thing to find. I want to establish the great dining hall where you can post amazing looking food or talk about recipes for food. Now I am open to the people of this great country and if any of you have concerns I will cater to them.',
                    colours: ['D60270', '9B4F96', '0038A8']
                }
            ],
            enteredData: {
                voterName: '',
                discordUsername: ''
            }
        }
    },
    computed: {
        ...mapStores(useLocaleStore, ['locale'])
    },

    mounted() {

    }
}
</script>

<template>
    <div class="page" id="landing">
        <h1>{{ localeStore.activeLocale.landing.title1 }}<br>{{ localeStore.activeLocale.landing.title2 }}</h1>
        <div class="form">
            <p><!-- Dear Citizen of Maevetopia, on this page you can cast your vote- dolor sit amet consectetur,
                adipisicing elit. Dolor sapiente corporis exercitationem, voluptates quas sint eius, qui a eligendi
                obcaecati iure suscipit voluptate, quaerat aperiam labore placeat. Vel, distinctio nemo. -->

                {{ localeStore.activeLocale.landing.soon }}
            </p>

            <h2>Meet the parties of Maevetopia</h2>
            <div class="party" v-for="(party, index) in parties" :key="index">
                <h3>{{ index+1 }}. <span class="colour" v-for="colour in party.colours" :key="colour" :style="`background-color: #${colour}`"></span> {{ party.name }}</h3>
                <h4>Headed by: <strong>{{ party.leader }}</strong> <span v-if="party.members">
                    (with {{ party.members.join(', ') }})
                </span></h4>
                <img :src="party.banner" :alt="party.name + ' banner'">
                <p v-html="party.desc"></p>
                    <h4>"{{party.motto}}"</h4> - {{party.leader}}
               
            </div>
            <!-- <p>-----</p> -->

            </div>
            <div class="form">
            
            <p>{{ localeStore.activeLocale.landing.soon2 }}<br>- Administration</p>
            <p>Join Maevetopia to keep up with the election and participate in other exciting activities, as well as meet great people✨</p>

            <a href="http://discord.maevetopia.fun" class="discord-button"><img src="/discord.png" alt="discord logo">{{ localeStore.activeLocale.landing.become }} a Citizen today</a>


            <iframe src="https://discord.com/widget?id=1240273703158419456&theme=dark" width="350" height="500"
                allowtransparency="true" frameborder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            <div class="input-field" v-for="field in fields" :key="field">
                <label :for="field.name">{{ field.label }}</label>
                <input type="text" :id="field.name" :name="field.name" :placeholder="field.placeholder"
                    v-model="enteredData[field.variable]" required spellcheck="false">
                <span>{{ enteredData[field.variable] }}</span>
            </div>
        </div>

  <footer>
    <span>© 2024 Maevetopia</span>
  </footer>
    </div>
</template>