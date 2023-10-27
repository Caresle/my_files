<script setup lang="ts">
import {
    FwbHeading,
} from 'flowbite-vue';
import router from '../router/router';

import { computed } from 'vue';

const routesToShow = computed(() => {
    return router.getRoutes().filter(e => e.meta.show);
});

</script>

<template>
    <div class="min-h-screen">
        <!-- Top bar -->
        <div class="h-16 w-full dark:bg-gray-700 shadow-none">
            <FwbHeading tag="h3"></FwbHeading>
        </div>

        <div class="flex">
            <!-- Side Menu -->
            <div class="w-2/12 p-2 dark:bg-gray-700">
                <FwbHeading tag="h2">Side Menu</FwbHeading>
                <FwbHeading v-for="route in routesToShow" :key="route.name"
                    tag="h4"
                >
                    {{ route.meta.name }}
                </FwbHeading>
            </div>
            <!-- Content -->
            <div class="w-10/12 p-2">
                <slot />
            </div>
        </div>
    </div>
</template>