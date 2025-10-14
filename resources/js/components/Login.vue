<template>
    <div class="flex items-center justify-center">
        <div class="min-h-screen w-[325px] flex items-center justify-center">
            <div class="flex flex-col items-center w-full max-w-sm h-[420px] bg-white rounded-[15px] shadow-[0_10px_100px_50px_rgba(0,0,0,0.3)] p-3 pt-6 ">
                <!-- Icon -->
                <div class="flex justify-center mb-1">
                    <img :src="icon" alt="Login Icon" class="w-16 h-16" />
                </div>

                <!-- System Title -->
                <h2 v-html="formatSysName()"
                    class="text-3xl font-bold text-center
                            text-[#003D5B]
                            mt-2 mb-12"
                >
                </h2>

                <!-- Login Form -->
                <form @submit.prevent="handleLogin" class="space-y-5 w-[80%]">
                    <!-- Email Input -->
                    <div class="relative">
                    <input
                        type="email"
                        id="email"
                        v-model="form.email"
                        placeholder="Email"
                        required
                        class="w-full pl-3 pr-3 py-2 
                                bg-[#003D5B]/20 text-[#003D5B] 
                                rounded-lg
                                border border-transparent
                                hover:bg-[#003D5B]/30 hover:border-[#003D5B]/40
                                focus:outline-none focus:ring-2 focus:ring-[#003D5B]/70 focus:border-[#003D5B]
                                placeholder-[#003D5B]/70
                                transition-all duration-300"
                    />
                    <span class="absolute right-3 top-2 text-[#003D5B]">
                        <FontAwesomeIcon :icon="['fas', 'user']" />
                    </span>
                    </div>

                    <!-- Password Input -->
                    <div class="relative">
                    <input
                        type="password"
                        id="password"
                        v-model="form.password"
                        placeholder="Password"
                        required
                        class="w-full pl-3 pr-3 py-2 
                                bg-[#003D5B]/20 text-[#003D5B] 
                                rounded-lg 
                                border border-transparent
                                hover:bg-[#003D5B]/30 hover:border-[#003D5B]/40
                                focus:outline-none focus:ring-2 focus:ring-[#003D5B]/70 focus:border-[#003D5B]
                                placeholder-[#003D5B]/70
                                transition-all duration-300"
                    />
                    <span class="absolute right-3 top-2 text-[#003D5B]">
                        <FontAwesomeIcon :icon="['fas', 'lock']" />
                    </span>
                    </div>

                    <!-- Submit Button -->
                    <button
                        type="submit"
                        class="w-full py-2
                                bg-[#003D5B] text-white font-medium
                                rounded-lg
                                hover:bg-[#029cda]
                                transition-colors duration-300"
                    >
                    Login
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, getCurrentInstance } from "vue";
    import { useRouter } from "vue-router";

    // img imports
    import icon from '../../assets/login-icon.png';

    const { appContext } = getCurrentInstance();
    const systemName = appContext.config.globalProperties.$systemName;
    const globalState = appContext.config.globalProperties.$globalState;

    const form = ref({
        email: "",
        password: "",
    });

    const formatSysName = () => {
        const parts = systemName.split(' ');
        const firstLine = parts[0] +" " + parts[1];
        const secondLine = parts.slice(2).join(' ');
        return `${firstLine}<br>${secondLine}`;
    };

    const router = useRouter();

    const handleLogin = () => {
        console.log("Login attempted with:", form.value);
        // You’ll connect this to backend (Laravel) later
        router.push('/dashboard');
    };

    function onLoginSuccess() {
        globalState.loginSuccess = true
    }
</script>