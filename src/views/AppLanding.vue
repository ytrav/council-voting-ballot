<script>
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
            ],
            enteredData: {
                voterName: '',
                discordUsername: ''
            }
        }
    },
}
</script>

<template>
    <div class="page" id="landing">
        <h1>Maevetopian Council<br>election August 2024</h1>
        <div class="form">
            <p>Dear Citizen of Maevetopia, on this page you can cast your vote- dolor sit amet consectetur,
                adipisicing elit. Dolor sapiente corporis exercitationem, voluptates quas sint eius, qui a eligendi
                obcaecati iure suscipit voluptate, quaerat aperiam labore placeat. Vel, distinctio nemo.
            </p>
            <div class="input-field" v-for="field in fields" :key="field">
                <label :for="field.name">{{ field.label }}</label>
                <input type="text" :id="field.name" :name="field.name" :placeholder="field.placeholder"
                    v-model="enteredData[field.variable]" required spellcheck="false">
                <span>{{ enteredData[field.variable] }}</span>
            </div>
        </div>
    </div>
</template>