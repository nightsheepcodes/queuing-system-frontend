<template>
    <main class="flex-1 px-10 py-5 overflow-y-auto box-border">
        <!-- Top cards -->
        <div class="h-[35%] flex space-x-5 mb-[2rem]">
            <!-- In progress -->
            <div class="w-[50%]">
                <InProgress 
                    title="In Progress..."
                    style_div="w-full h-full justify-center bg-white rounded-3xl"
                    style_h3="text-2xl font-bold text-[#003D5B] text-left"
                    :style_h1="currentH1Style"
                    style_p="text-base text-gray-700"/>
            </div>

            <!-- Total ticket in Queue today -->
            <div class="w-[50%] h-full bg-white rounded-3xl flex flex-col text-center justify center p-5">
                <h3 class="text-2xl font-bold text-[#003D5B] text-left mt-2">Total Tickets in Queue Today</h3>
                <h1 class="text-[100px] font-bold text-[#003D5B]">20</h1> <!-- Total tickets in Queue List -->
            </div>                
        </div>

        <!-- Waiting in Queue card -->
        <div class="h-[calc(65%_-_2rem)] bg-white rounded-3xl flex flex-col p-5 text-[#003D5B]">
            <div class="w-full bg-white rounded-3xl flex justify-between pb-5"> 
                <span class="text-lg font-semibold">Waiting in Queue: {{ waiting }}</span> <!-- Number of waiting in queue (inQueueToday - resolvedTickets) -->
                <router-link to="/queue">
                    <span>View Queue Display</span>
                </router-link>
            </div>

            <!-- Table for Queue List in Waiting -->
            <div class="w-full">
                <!-- Table Header -->
                <div class="grid grid-cols-3 gap-4 bg-gray-200 p-3 rounded-t-2xl">
                    <div class="font-semibold text-[#003D5B]">Order</div>
                    <div class="font-semibold text-[#003D5B]">Ticket ID</div>
                    <div class="font-semibold text-[#003D5B]">Issue Type</div>
                </div>

                <!-- Table Rows: data must be fetch from db --> 
                 <div class="max-h-64 overflow-y-auto rounded-b-2xl">
                    <div class="grid grid-cols-3 gap-4 border-b p-3 hover:bg-gray-100 cursor-pointer">
                        <div>DAM0730002</div>
                        <div>INC000012496537</div>
                        <div>Keyboard</div>
                    </div>
                    <div class="grid grid-cols-3 gap-4 border-b p-3 hover:bg-gray-100 cursor-pointer">
                        <div>DAM0730003</div>
                        <div>INC000078925431</div>
                        <div>Monitor</div>
                    </div>
                    <div class="grid grid-cols-3 gap-4 border-b p-3 hover:bg-gray-100 cursor-pointer">
                        <div>DAM0730003</div>
                        <div>INC000078925431</div>
                        <div>Monitor</div>
                    </div>
                    <div class="grid grid-cols-3 gap-4 border-b p-3 hover:bg-gray-100 cursor-pointer">
                        <div>DAM0730003</div>
                        <div>INC000078925431</div>
                        <div>Monitor</div>
                    </div>
                    <div class="grid grid-cols-3 gap-4 border-b p-3 hover:bg-gray-100 cursor-pointer">
                        <div>DAM0730003</div>
                        <div>INC000078925431</div>
                        <div>Monitor</div>
                    </div>
                    <div class="grid grid-cols-3 gap-4 border-b p-3 hover:bg-gray-100 cursor-pointer">
                        <div>DAM0730003</div>
                        <div>INC000078925431</div>
                        <div>Monitor</div>
                    </div>
                    <div class="grid grid-cols-3 gap-4 border-b p-3 hover:bg-gray-100 cursor-pointer">
                        <div>DAM0730003</div>
                        <div>INC000078925431</div>
                        <div>Monitor</div>
                    </div>
                </div>
                <!-- More rows can be added similarly -->
            </div>
            
        </div>
    </main>
</template>

<script setup>
    import { ref } from "vue";
    
    import InProgress from '../cards/InProgress.vue';

    const currentH1Style = ref("text-7xl font-bold text-[#003D5B] my-5");

    const waiting = ref(15); // Example value for waiting in queue
</script>