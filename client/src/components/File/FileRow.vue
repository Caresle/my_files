<script setup lang="ts">
import {
    FwbCheckbox,
    FwbHeading,
} from 'flowbite-vue';
import {
    mdiFile,
    mdiDotsVertical,
    mdiShare,
} from '@mdi/js';
import svgIcon from '@jamescoyle/vue-icon';

defineProps({
    name: String,
});
</script>

<template>
    <div class="flex border-b dark:border-b-gray-500 items-center justify-between">
        <div class="flex items-center">
            <FwbCheckbox />
            <svgIcon size="48" class="dark:text-white mx-2" type="mdi" :path="mdiFile" />
            <FwbHeading tag="h5">{{ name }}</FwbHeading>
        </div>
        <div class="flex">
            <svgIcon class="dark:text-white" type="mdi" :path="mdiShare" />
            <svgIcon class="dark:text-white" type="mdi" :path="mdiDotsVertical" />
        </div>
    </div>
</template>