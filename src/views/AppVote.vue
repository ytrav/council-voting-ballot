<script lang="ts">


interface Field {
    name: string;
    label: string;
    placeholder: string;
    variable: string;
}


interface EnteredData {
    voterName: string;
    discordUsername: string;
}


export default {
    data() {
        return {
            fields: [
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
            ] as Field[],
            enteredData: {
                voterName: '',
                discordUsername: ''
            } as EnteredData
        }
    }
}

</script>

<template>
    <div class="page" id="vote">vote
        <div class="input-field" v-for="field in fields" :key="field">
            <label :for="field.name">{{ field.label }}</label>
            <input type="text" :id="field.name" :name="field.name" :placeholder="field.placeholder"
                v-model="enteredData[field.variable]" required spellcheck="false">
            <span>{{ enteredData[field.variable] }}</span>
        </div>
    </div>
</template>