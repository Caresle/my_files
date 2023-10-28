<script setup lang="ts">
import {
    FwbHeading,
} from 'flowbite-vue';
import svgIcon from '@jamescoyle/vue-icon';
import { RouteRecordName } from 'vue-router';

const emit = defineEmits(['clicked']);

defineProps({
    icon: String,
    name: { type: String }
})
</script>

<template>
    <div
        class="flex items-center hover:scale-100 scale-95
            transition-all hover:cursor-pointer border rounded-lg
            p-2 w-full border-gray-500 mb-2
        "
        @click="emit('clicked')"
    >
        <svgIcon class="dark:text-white" :path="icon" type="mdi" />
        <FwbHeading tag="h5" class="ml-2">
            {{ name }}
        </FwbHeading>
    </div>
</template>