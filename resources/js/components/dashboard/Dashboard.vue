<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <SidebarMenu></SidebarMenu>
        
        <!-- Main Section -->
        <div class="flex flex-col flex-1 transition-all duration-300 bg-gradient-to-br from-[#003D5B]/15 to-[#003D5B]/75">
            <!-- Header -->
            <header
                class="bg-white/10 shadow-md h-16 flex items-center px-6 transition-all duration-300"
                :class="isSidebarOpen ? 'ml-0' : 'ml-0'">
            
                <h1 class="text-xl font-semibold">Dashboard Header</h1>
            </header>

            <!-- Main Content -->
            <main class="flex-1 p-6 overflow-y-auto">
                <p class="text-gray-700">Main content goes here...</p>
            </main>
        </div>
    </div>
</template>

<script setup>
    import SidebarMenu from './Menu.vue';
    
    import { ref } from "vue";

    const isSidebarOpen = ref(true);

</script>
