<script setup lang="ts">
import SideMenu from '../components/SideMenu/SideMenu.vue';

</script>

<template>
    <div class="flex">
        <!-- Side Menu -->
        <SideMenu />
        
        <!-- Content -->
        <div class="w-10/12 p-2">
            <slot />
        </div>
    </div>
</template>