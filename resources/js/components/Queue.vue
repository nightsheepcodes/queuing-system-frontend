<template>
    <div class="min-h-screen flex flex-col">
        <header class="w-full flex items-center justify-between p-4 bg-white shadow-md">
            
            <div class="flex items-center justify-center">
                <!-- icon -->
                <img :src="icon" alt="App Icon" class="w-20 h-20 ml-6 mr-3" />
            
                <!-- System Title -->
                <h2 class="text-2xl font-bold text-[#003D5B]"
                > {{ $systemName }}
                </h2>
            </div>

            <!-- Date and Time -->
            <div class="flex flex-col items-center space-y-2 mr-6 text-[#003D5B]">
                <Clock />
                <Date />
            </div>  
        </header>

            <aside>
                <!-- side panel for Add Ticket Component -->
                 <!-- Floating Button -->
                <button
                    @click="$emit('toggle')"
                    class="fixed top-35 right-0 bg-white text-[#003D5B] p-1 pl-2 pr-2 rounded-tl-xl rounded-bl-xl shadow-lg hover:text-white hover:bg-[#029cda] transition"
                >
                    <span class="">
                        <FontAwesomeIcon :icon="['fas', 'arrow-left-long']" />
                    </span>
                </button>
            </aside>

        <!-- LEFT SIDE -->
        <!-- In Progress Ticket Card 1 -->
        <!-- In Progress Ticket Card 2 -->

        <!-- RIGHT SIDE -->
        <!-- Next in Line Tickets Card -->


        <!-- back button here -->
    </div>
</template>

<script setup>
    import Clock from './tools/Clock.vue';
    import Date from './tools/Date.vue';

    import icon from '../../assets/login-icon.png';
</script>