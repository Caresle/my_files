<script setup lang="ts">
import {
    FwbHeading,
    FwbCard,
    FwbInput,
    FwbButton,
} from 'flowbite-vue';
import SwitchTheme from '../components/Theme/SwitchTheme.vue'
</script>

<template>
    <fwb-card class="p-2 mx-auto my-4 max-w-xl" variant="image">
        <fwb-heading tag="h1" class="text-center">Login</fwb-heading>
        <div class="w-32 mx-auto mt-8">
            <img class="rounded-full" src="https://placehold.co/1200x1200/1eb387/FFFFFF/png" />
        </div>
        <div class="w-9/12 mx-auto">
            <div class="mb-2">
                <fwb-input label="Username" placeholder="Username" />
            </div>
            <div class="mb-2">
                <fwb-input label="Password" placeholder="Password" type="password" />
            </div>
            <div class="my-4 w-full flex justify-center">
                <fwb-button class="w-full">Login</fwb-button>
            </div>
            <SwitchTheme />
        </div>
    </fwb-card>
</template>