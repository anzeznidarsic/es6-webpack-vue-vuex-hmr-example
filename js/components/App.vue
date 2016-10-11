<template>
    <div>
        <h1>Vue & Vuex & Webpack HMR :)</h1>
        <div class="message">Last message: <strong>{{ this.$store.state.message }}</strong></div>
        <add-message></add-message>
        <old-messages></old-messages>
    </div>
</template>

<script>
    import AddMessage from './AddMessage.vue';
    import OldMessages from './OldMessages.vue';

    export default {
        components: {
            AddMessage,
            OldMessages
        }
    }
</script>

<style>
    body {
        background-color: #e3feca;
    }
    .message {
        background-color: lightgreen;
        padding: 1rem;
    }
</style>