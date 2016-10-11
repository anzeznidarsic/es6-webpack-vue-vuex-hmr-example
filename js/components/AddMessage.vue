<template>
    <form @submit.prevent="addMessage">
        <input type="text" v-model.trim="message">
        <input type="submit" value="Add message" />
        <message></message>
    </form>
</template>

<script>
    import Message from './Message.vue';
    import { MapActions } from 'vuex';

    export default {
        components: {
            Message
        },
        data() {
            return {
                message: ''
            }
        },
        methods: {
            addMessage() {
                this.$store.dispatch('addMessage', this.message);
                this.message = '';
            }
        }
    }
</script>

<style>
</style>