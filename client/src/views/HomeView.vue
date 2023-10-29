<script setup lang="ts">
import {
    FwbHeading,
    FwbFileInput,
    FwbButton,
    FwbInput,
} from 'flowbite-vue';
import MainLayout from '../layout/MainLayout.vue';
import {
    mdiMagnify,
} from '@mdi/js';
import svgIcon from '@jamescoyle/vue-icon';
import FileRow from '../components/File/FileRow.vue';
</script>

<template>
    <MainLayout>
        <div class="max-w-4xl mx-auto">
            <div>
                <FwbFileInput dropzone></FwbFileInput>
            </div>
            
            <!-- File Filters -->
            <div class="border dark:border-gray-600 rounded-lg p-2 mt-4 flex justify-between">
                <div class="w-5/12">
                    <FwbButton class="mx-1" color="alternative">View All</FwbButton>
                    <FwbButton class="mx-1" color="alternative">Your Files</FwbButton>
                    <FwbButton class="mx-1" color="alternative">Shared files</FwbButton>
                </div>
                <div class="w-5/12">
                    <FwbInput placeholder="Search">
                        <template #prefix>
                            <svgIcon type="mdi" :path="mdiMagnify" class="text-gray-500" />
                        </template>
                    </FwbInput>
                </div>
            </div>
            
            <!-- List content -->
            <div class="mt-4">
                <FileRow name="Test" />
            </div>
        </div>
    </MainLayout>
</template>