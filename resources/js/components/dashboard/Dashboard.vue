<template>
    <div class="flex h-screen">
        <!-- Sidebar -->
        <SidebarMenu/>
        
        <!-- Main Section -->
        <div class="flex flex-col flex-1 transition-all duration-300">
            <!-- Header -->
            <Header></Header>

            <!-- Content Area -->
            <ContentArea v-if="route.path === '/dashboard'"></ContentArea>
            <router-view/>
        </div>
    </div>
</template>

<script setup>
    import SidebarMenu from './Menu.vue';
    import Header from './Header.vue';
    import ContentArea from './Main.vue';
        
    import { ref } from "vue";
    import { useRoute } from "vue-router";

    const route = useRoute();

    const isSidebarOpen = ref(true);

</script>
