<template>
    <em>{{ message }}</em>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState(['message'])
    }
</script>