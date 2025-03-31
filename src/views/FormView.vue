<template>
    <div class=" rouded-xl p-24 mt-40 space-y-6 flex flex-col items-center justify-center ">

        <h1 class="text-center text-4xl font-bold text-amber-600 mt-4">Faça seu cadastro</h1>

        <form @submit.prevent="registerUser" class="flex flex-col ">

            <div class="space-x-2 p-2 ">

                <label for="name" class="text-zinc-50">Nome</label>
                <input v-model="name" type="text"
                    class=" w-80 h-12 rounded-lg border px-2 py-1 placeholder:text via-gray-400/70 outline-none focus:border-amber-500 "
                    placeholder="Digite seu nome" />

            </div>

            <div class="space-x-2 p-2 ">

                <label for="nome" class="text-zinc-50 ">E-mail</label>
                <input v-model="email" type="text"
                    class=" w-80 h-12 rounded-lg border px-2 py-1 placeholder:text via-gray-400/70 outline-none focus:border-amber-500 "
                    placeholder="Digite seu e-mail" />

            </div>

            <div class="space-x-2 p-2 ">

                <label for="senha" class="text-zinc-50 ">Senha</label>

                <input v-model="password" type="text"
                    class=" w-80 h-12 rounded-lg border px-2 py-1 placeholder:text via-gray-400/70 outline-none focus:border-amber-500 "
                    placeholder="Digite sua senha" />

            </div>
            <div class="flex justify-center gap-4 mt-8">

                <button type="submit"
                    class=" mt-6 rounded-xl bg-amber-600 px-4 py-2 text-semibold cursor-pointer
                   hover:bg-amber-500 hover:scale-105 transition ease-in-out duration-200 self-center flex items-center justify-center gap-2 w-fit">
                    Cadastre-se
                    <UserPlusIcon class="size-4" />
                </button>

                <router-link to="/login"
                    class=" mt-6 rounded-xl bg-amber-600 px-4 py-2.5 text-semibold cursor-pointer
                   hover:bg-amber-500 hover:scale-105 transition ease-in-out duration-200 w-fit text-center flex items-center justify-center gap-2 group">
                    <ArrowLeftIcon
                        class="size-4 mt-0.5 group-hover:-translate-x-2 transition ease-in-out duration-300 group-hover:opacity-0" />
                    Voltar
                </router-link>

            </div>

        </form>

    </div>

</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ArrowLeftIcon } from "@heroicons/vue/24/solid";
import { UserPlusIcon } from "@heroicons/vue/24/solid";

const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');

const registerUser = () => {
    if (!name.value || !email.value || !password.value) {
        alert("Preencha todos os campos!")
        return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {

        id: storedUsers.length + 1,
        name: name.value,
        email: email.value,
        password: password.value,
    };

    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));



    name.value = '';
    email.value = '';
    password.value = '';

    router.push("/main");

};

</script>