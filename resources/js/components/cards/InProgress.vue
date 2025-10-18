<template>
    <div :class="['flex flex-col text-center p-5', style_div]">
        <!-- w-[95%] h-65 bg-white rounded-3xl shadow-[0_10px_50px_5px_rgba(0,0,0,0.3)] -->
                
        <h3 :class="[style_h3]">{{ title }}</h3>
        <!-- text-3xl font-bold text-[#003D5B] -->

        <h1 :class="[style_h1]">DAM073010 <!-- data from queue list entry --></h1>
        <!-- text-8xl font-bold text-[#003D5B] my-5 -->

        <p :class="[style_p]">
        <!-- text-base text-gray-700 -->
            Ticket ID: <span class="font-medium">INC000012496537 <!-- data from ticket list entry --></span>
        </p>
        <p :class="[style_p]">
        <!-- text-base text-gray-700 -->
            Attended by: <span class="font-medium">Randy Damos <!-- data from the one who started the ticket --></span>
        </p>

    </div>
</template>

<script setup>
    defineProps({
        title: {
            type: String,
            default: "In Progress",
        },
        style_div: {
            type: [String, Array, Object],
            default: "",
        },
        style_h3: {
            type: [String, Array, Object],
            default: "",
        },
        style_h1: {
            type: [String, Array, Object],
            default: "",
        },
        style_p: {
            type: [String, Array, Object],
            default: "",
        },
    });
</script>