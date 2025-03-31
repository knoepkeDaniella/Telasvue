<template>
    <div class=" mt-12 rounded-xl flex flex-col justify-center items-center x-auto p-45 text-white gap-12 relative">
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

                <form @submit.prevent="enviarMensagem" class="  bg-gray-800 p-6 rounded-lg shadow-md w-full">
                    <h2 class="text-xl font-semibold text-amber-500 mb-4">Envie uma mensagem</h2>

                    <div class="mb-3">

                        <label class="block text-sm  mb-2">Nome</label>
                        <input v-model="nome" type="text" class=" border w-full px-2 py-1 bg-gray-700 rounded-md outline-none 
                             focus:border-amber-500 placeholder-gray-400/70" placeholder="Digite seu nome:">
                    </div>

                    <div class="mb-3">

                        <label class="block text-sm  mb-2">E-mail</label>
                        <input type="email" v-model="email" class=" border w-full px-2 py-1 bg-gray-700 rounded-md outline-none 
                             focus:border-amber-500 placeholder-gray-400/70" placeholder="Digite seu e-mail:">
                    </div>

                    <div class="mb-3">

                        <label class="block text-sm mb-2">Mensagem</label>
                        <textarea v-model="mensagem" rows="4" class=" border w-full px-2 py-1 bg-gray-700 rounded-md outline-none 
                             focus:border-amber-500 placeholder-gray-400/70"
                            placeholder="Digite sua mensagem..."></textarea>
                    </div>

                    <button type="submit"
                        class="w-full py-3 px-6 bg-amber-500 hover:bg-amber-400 transition rounded-md text-lg font-semibold">
                        Enviar
                    </button>
                </form>

            </div>

        </div>

        <div class="flex justify-center gap-4 mt-8">

            <router-link to="/"
            class=" mt-6 rounded-xl bg-amber-600 px-4 py-2.5 text-semibold cursor-pointer
            hover:bg-amber-500 hover:scale-105 transition ease-in-out duration-200 w-fit text-center  flex items-center justify-center gap-2">
                <HomeIcon class="size-4 " />
                Home
            </router-link>
            <router-link to="/recept"
            class=" mt-6 rounded-xl bg-amber-600 px-4 py-2.5 text-semibold cursor-pointer
            hover:bg-amber-500 hover:scale-105 transition ease-in-out duration-200 w-fit text-center  flex items-center justify-center gap-2">
            <ChatBubbleLeftEllipsisIcon class="size-4 " />
                Mensagens
            </router-link>

        </div>

    </div>

</template>

<script setup>

import { ref } from "vue";
import { useRouter } from "vue-router";
import { PhoneIcon} from "@heroicons/vue/24/solid";
import { EnvelopeIcon } from "@heroicons/vue/24/solid";
import { MapPinIcon } from "@heroicons/vue/24/solid";
import { HomeIcon } from "@heroicons/vue/24/solid";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/vue/24/solid";

const nome = ref('');
const email = ref('');
const mensagem = ref('');
const router = useRouter();


const enviarMensagem = () => {
    if (!nome.value || !email.value || !mensagem.value) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const novaMensagem = {
        id: Date.now(),
        nome: nome.value,
        email: email.value,
        mensagem: mensagem.value,
    };


    const mensagens = JSON.parse(localStorage.getItem('mensagens')) || [];
    mensagens.push(novaMensagem);
    localStorage.setItem('mensagens', JSON.stringify(mensagens));

    nome.value = '';
    email.value = '';
    mensagem.value = '';

    router.push('/recept');
};

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