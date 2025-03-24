<template>
    <div class=" mt-12 rounded-xl flex flex-col justify-center items-center x-auto p-50 text-white gap-8">
        <div class="max-w-4xl w-full ">

            <h1 class="text-5xl font-bold text-amber-600 text-center relative -top-40 ">Contate-nos</h1>

            <div class="flex flex-col md:flex-row gap-6 -mt-12 mb-8 ">

                <div class="space-y-4 p-5 w-full mt-2 animate-fade-in">

                    <h1 class="text-2xl font-semibold text-amber-600 mb-4">Informações de contato</h1>

                    <div class="flex items-center space-x-5">
                        <PhoneIcon class="w-6 h-6 text-amber-500" />
                        <p class="text-lg">+55 11 99999-9999</p>
                    </div>

                    <div class="flex items-center space-x-5">
                        <EnvelopeIcon class="w-6 h-6 text-amber-500" />
                        <p class="text-lg">contato@empresa.com</p>
                    </div>

                    <div class="flex items-center space-x-5">
                        <MapPinIcon class="w-6 h-6 text-amber-500" />
                        <p class="text-lg">Av. Paulista, 1000, São Paulo - SP</p>
                    </div>

                    <div class="flex flex-col space-y-4 mt-4 animate-slide-up">

                        <div class="p-4 rounded-lg bg-gray-800 mb-2 px-2">
                            <a href="#" class=" text-blue-300 hover:text-blue-400 transition block">Facebook</a>
                        </div>
                        <div class="p-4 rounded-lg  bg-gray-800 mb-2 px-2 ">
                            <a href="#" class=" text-orange-400 hover:text-orange-500 transition block">Instagram</a>
                        </div>
                        <div class="p-4 rounded-lg  bg-gray-800 mb-2 px-2 ">
                            <a href="#" class=" text-blue-200 hover:text-blue-300 transition block">Twitter</a>

                        </div>

                    </div>

                </div>

                <form class="bg-gray-800 p-6 rounded-lg shadow-md w-full">
                    <h2 class="text-xl font-semibold text-amber-500 mb-4">Envie uma mensagem</h2>

                    <div class="mb-3">
                        <label class="block text-sm font-medium mb-2">Nome</label>
                        <input type="text" class="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2
                             focus:ring-amber-500 placeholder-gray-400" placeholder="Digite seu nome:">
                    </div>

                    <div class="mb-3">
                        <label class="block text-sm font-medium mb-2">E-mail</label>
                        <input type="email" v-model="email" class="w-full p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2
                             focus:ring-amber-500 placeholder-gray-400" placeholder="Digite seu e-mail:">
                    </div>

                    <div class="mb-3">
                        <label class="block text-sm font-medium mb-2">Mensagem</label>
                        <textarea v-model="message" rows="4" class="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2
                             focus:ring-amber-500 placeholder-gray-400"
                            placeholder="Digite sua mensagem..."></textarea>
                    </div>

                    <button type="submit"
                        class="w-full py-2 bg-amber-500 hover:bg-amber-400 transition rounded-md text-lg font-semibold">
                        Enviar
                    </button>
                </form>

            </div>

        </div>
        <div class="text-center mt-12">
            <router-link to="/" class="text-lg py-3 px-6 rounded-lg bg-amber-600 text-white
                 hover:bg-amber-500 transition-all inline-block">
                Voltar
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/vue/24/solid";
</script>


<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slide-up {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-in-out;
}

.animate-slide-up {
    animation: slide-up 0.8s ease-out;
}
</style>