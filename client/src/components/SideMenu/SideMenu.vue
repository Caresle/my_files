<script setup lang="ts">


import SwitchTheme from '../Theme/SwitchTheme.vue';
import router from '../../router/router';
import { RouteRecordName } from 'vue-router';
import logo from '../../assets/logo.jpeg';
import { computed } from 'vue';
import SideMenuItem from './SideMenuItem.vue';

const goTo = (name : RouteRecordName) => router.push({ name });

const routesToShow = computed(() => {
    return router.getRoutes().filter(e => e.meta.show);
});
</script>

<template>
    <div class="max-w-xs w-2/12 p-2 dark:bg-gray-700 min-h-screen
        bg-gray-200
    "
    >
        <div>
            <img :src="logo" class="rounded-lg scale-75" />
        </div>
        
        <SideMenuItem v-for="route in routesToShow" :name="route.name as string ?? ''"
            :icon="(route.meta.icon as string)" @clicked="() => goTo(route.name ?? '')"
        />

        <SwitchTheme />
    </div>
</template>