<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiThemeLightDark } from '@mdi/js';
import {
    FwbButton,
} from 'flowbite-vue';
import { changeTheme } from './theme';
</script>

<template>
    <fwb-button pill @click="changeTheme">
        <svg-icon type="mdi" :path="mdiThemeLightDark" />
    </fwb-button>
</template>