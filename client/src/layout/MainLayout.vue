<script setup lang="ts">
import SideMenu from '../components/SideMenu/SideMenu.vue';
import {
    FwbHeading,
    FwbButton,
} from 'flowbite-vue';
import {
    mdiCog,
    mdiBell,
} from '@mdi/js';
import svgIcon from '@jamescoyle/vue-icon';
</script>

<template>
    <div class="flex">
        <!-- Side Menu -->
        <SideMenu />
        
        <!-- Content -->
        <div class="max-w-5xl w-10/12">
            <!-- Header -->
            <div class="h-16 border-b border-b-gray-400 ml-1 p-2 flex items-center">
                <FwbHeading tag="h2" class="text-gray-700">File Manager</FwbHeading>
                <div class="flex">
                    <FwbButton class="bg-gray-400 hover:bg-gray-300 transition-all">
                        <svgIcon type="mdi" :path="mdiCog" />
                    </FwbButton>
                    <FwbButton class="bg-gray-400 hover:bg-gray-300 transition-all ml-2">
                        <svgIcon type="mdi" :path="mdiBell" />
                    </FwbButton>
                    <FwbButton class="ml-2">
                        Share
                    </FwbButton>
                </div>
            </div>
            <div class="p-2">
                <slot />
            </div>
        </div>
    </div>
</template>