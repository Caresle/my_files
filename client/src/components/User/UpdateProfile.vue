<script setup lang="ts">
import {
    FwbCard,
    FwbInput,
    FwbButton,
} from 'flowbite-vue';
</script>

<template>
    <FwbCard class="!max-w-full p-2 mt-4" variant="image">
        <div class="flex">
            <div class="w-44 m-2">
                <img src="https://placehold.co/1200x1200/ff1166/FFFFFF/png"
                class="rounded-full"
                >
            </div>
            <div class="w-8/12 mx-auto">
                <FwbInput label="Username" placeholder="Username" />
                <div class="mt-4">
                    <FwbInput label="Password" placeholder="Password" type="password"
                    />
                </div>
                <div class="flex justify-end">
                    <FwbButton class="mt-4">Update info</FwbButton>
                </div>
            </div>
        </div>
    </FwbCard>
</template>