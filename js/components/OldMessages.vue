<template>
    <div>
        <h1>Old messages</h1>
        <transition-group name="fade" tag="ul">
            <li v-for="(message, index) in messages"
                @click="deleteMessage(index)"
                :key="message">
                {{ message }}
            </li>
        </transition-group>
        <div v-if="!messages.length">
            No old messages
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        messages() {
            return this.$store.state.oldMessages;
        }
    },
    methods: {
        deleteMessage(index) {
            this.$store.dispatch('deleteMessage', index);
        }
    }

}
</script>

<style scoped>
    h1 {
        background-color: #ffdfeb;
        padding: 1rem;
    }
</style>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>