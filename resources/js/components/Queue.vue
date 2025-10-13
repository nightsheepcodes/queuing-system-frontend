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
                class="fixed top-32 right-0 bg-white text-[#003D5B] p-1 px-2 rounded-tl-xl rounded-bl-xl shadow-lg hover:text-white hover:bg-[#029cda] transition"
            >
                <span class="">
                    <FontAwesomeIcon :icon="['fas', 'arrow-left-long']" />
                </span>
            </button>
        </aside>

        <div class="flex w-full px-10 py-15">
            <!-- LEFT SIDE -->
            <div class="flex flex-col w-full space-y-10">
                <InProgress/> <!-- In Progress Ticket Card 1 -->
                <InProgress/> <!-- In Progress Ticket Card 2 -->
            </div>
            
            <!-- RIGHT SIDE -->
            <div class="w-full flex justify-end">
                <NextInLine/> <!-- Next in Line Tickets Card -->
            </div>
        </div>

        <!-- back button here, show only if signed in as admin-->
         <button
            @click="$emit('prev_page')"
            class="fixed bottom-5 left-5 text-white p-1 px-2 shadow-xl rounded-2xl hover:bg-[#029cda] transition"
        >
            <span class="font-bold text-xl">
                <FontAwesomeIcon :icon="['fas', 'arrow-left-long']" />
            </span>
        </button>
    </div>
</template>

<script setup>
    import Clock from './tools/Clock.vue';
    import Date from './tools/Date.vue';
    import InProgress from './cards/InProgress.vue';
    import NextInLine from './cards/NextInLine.vue';

    import icon from '../../assets/login-icon.png';
</script>