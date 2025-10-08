<template>
    <div>
        <header class="w-full flex">
            <!-- icon -->
            <div class="flex justify-center mb-1">
                <img :src="icon" alt="App Icon" class="w-16 h-16" />
            </div>

            <!-- System Title -->
            <h2 class="text-3xl font-bold text-center
                        text-[#003D5B]
                        mt-2 mb-12"
            > {{ $systemName }}
            </h2>

            <div>
                <p>10:00 AM</p> <!-- Clock component -->
                <p>OCT 8, 2025</p> <!-- Date component -->
            </div>
        </header>

            <aside>
                <!-- side panel for Add Ticket Component -->
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

    import icon from '../../assets/login-icon.png';
</script>