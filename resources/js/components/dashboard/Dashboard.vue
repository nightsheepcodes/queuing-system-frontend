<template>
    <div class="flex h-screen">
        <!-- Sidebar -->
        <SidebarMenu></SidebarMenu>
        
        <!-- Main Section -->
        <div class="flex flex-col flex-1 transition-all duration-300">
            <!-- Header -->
            <Header></Header>

            <!-- Content Area -->
            <ContentArea></ContentArea>
            
        </div>
    </div>
</template>

<script setup>
    import SidebarMenu from './Menu.vue';
    import Header from './Header.vue';
    import ContentArea from './Main.vue';
    
    import { ref } from "vue";

    const isSidebarOpen = ref(true);

</script>
