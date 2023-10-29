<script setup lang="ts">
import {
    FwbHeading,
    FwbCard,
    FwbButton,
} from 'flowbite-vue';
import MainLayout from '../layout/MainLayout.vue';
import UpdateProfile from '../components/User/UpdateProfile.vue';
</script>

<template>
    <MainLayout>
        <FwbHeading tag="h1">Profile information</FwbHeading>

        <!-- Update information -->
        <UpdateProfile />

        <!-- Delete account -->
        <FwbCard variant="image" class="!max-w-full p-2 mt-4">
            <div class="flex justify-center">
                <FwbButton color="red" outline size="lg">Delete Account</FwbButton>
            </div>
        </FwbCard>
    </MainLayout>
</template>