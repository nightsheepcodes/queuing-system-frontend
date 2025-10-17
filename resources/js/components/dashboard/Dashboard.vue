<template>
    <div class="flex h-screen">
        <!-- Sidebar -->
        <SidebarMenu></SidebarMenu>
        
        <!-- Main Section -->
        <div class="flex flex-col flex-1 transition-all duration-300">
            <!-- Header -->
            <Header></Header>

            <!-- Main Content -->
            <main class="flex-1 p-6 overflow-y-auto">
                <p class="text-gray-700">Main content goes here...</p>
            </main>
        </div>
    </div>
</template>

<script setup>
    import SidebarMenu from './Menu.vue';
    import Header from './Header.vue';
    
    import { ref } from "vue";

    const isSidebarOpen = ref(true);

</script>
