<template>
    <div class="flex h-screen bg-gray-100">
        <!-- Sidebar -->
        <aside
            :class="[
                'bg-white text-[#003D5B] transition-all duration-500 ease-in-out overflow-hidden',
                isSidebarOpen ? 'w-80 shadow-[0_10px_100px_50px_rgba(0,0,0,0.3)]' : 'w-13 shadow-none'
            ]">
            
            <!-- Sidebar Header -->
            <div :class="[
                'flex flex-col p-4',
                isSidebarOpen ? '' : 'items-center'
            ]">

                <div class="flex justify-end">
                    <button @click="toggleSidebar" class="focus:outline-none">
                        <span class="text-[#003D5B] text-lg">
                            <FontAwesomeIcon :icon="['fas', 'bars']" />
                        </span>
                    </button>
                </div>

                <transition
                    enter-active-class="transition-all duration-700 ease-out"
                    enter-from-class="opacity-0 translate-x-[-10px]"
                    enter-to-class="opacity-100 translate-x-0"
                    leave-active-class="transition-all duration-100 ease-in"
                    leave-from-class="opacity-100 translate-x-0"
                    leave-to-class="opacity-0 translate-x-[-10px]"
                >

                    <div class="flex items-center mt-2" v-if="isSidebarOpen">
                        <img :src="icon" alt="Login Icon" class="w-30 h-30"/>

                        <span v-html="formatSysName()"
                            class="text-3xl font-bold ml-2"></span>
                    </div>
                </transition>

            </div>

            <!-- Sidebar Menu Items -->            
            <nav class="text-[#003D5B] font-medium" v-if="isSidebarOpen">
                <h3 class="px-10">MAIN</h3>
                <ul class="mb-6">
                    <router-link to="/dashboard" :class="navLinkClass">
                        <span :class="iconClass">
                            <FontAwesomeIcon :icon="['fas', 'gauge']" />
                        </span>Dashboard</router-link>
                    <router-link to="/tickets" :class="navLinkClass">
                        <span :class="iconClass">
                            <FontAwesomeIcon :icon="['fas', 'ticket']" />
                        </span>Tickets</router-link>
                    <router-link to="/queue-list" :class="navLinkClass">
                        <span :class="iconClass">
                            <FontAwesomeIcon :icon="['fas', 'people-line']" />
                        </span>Queue List</router-link>
                    <router-link to="/queue" :class="navLinkClass">
                        <span :class="iconClass">
                            <FontAwesomeIcon :icon="['fas', 'desktop']" />
                        </span>Queue Display</router-link>
                </ul>

                <h3 class="px-10">ACCOUNT</h3>
                <ul>
                    <router-link to="/profile" :class="navLinkClass">
                        <span :class="iconClass">
                            <FontAwesomeIcon :icon="['fas', 'user']" />
                        </span>Profile</router-link>
                    <li :class="navLinkClass">
                        <span :class="iconClass">
                            <FontAwesomeIcon :icon="['fas', 'right-from-bracket']" />
                        </span>Logout</li>
                </ul>
            </nav>

        </aside>
        
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
    import { ref, getCurrentInstance } from "vue";

    import icon from '../../../assets/login-icon.png';
    
    const { appContext } = getCurrentInstance();
    const systemName = appContext.config.globalProperties.$systemName;

    const isSidebarOpen = ref(true);

    const formatSysName = () => {
        const parts = systemName.split(' ');        
        return `${parts[0]} ${parts[1]}<br>${parts[2]}<br>${parts[3]}`;
    };

    function toggleSidebar() {
        isSidebarOpen.value = !isSidebarOpen.value;
    }



    /* STYLES */
    const navLinkClass = "group flex items-center px-12 py-2 text-[#003D5B] hover:bg-gray-700 hover:text-white transition-colors";
    const iconClass = "mr-1 text-[#003D5B] text-xl group-hover:text-white";
</script>
