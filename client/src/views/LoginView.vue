<script setup lang="ts">
import {
    FwbHeading,
    FwbCard,
} from 'flowbite-vue';
import SwitchTheme from '../components/Theme/SwitchTheme.vue'
</script>

<template>
    <fwb-card class="p-2 mx-auto my-4 max-w-xl">
        <fwb-heading tag="h1">Login</fwb-heading>
        <SwitchTheme />
    </fwb-card>
</template>