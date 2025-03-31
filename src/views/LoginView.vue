<template>
    <div class="rouded-xl p-24 mt-40 space-y-6 flex flex-col items-center justify-center relative ">

        <h1 class="text-center text-4xl font-bold text-amber-600 mt-4">Entre agora com seu usuário</h1>

        <form class="flex flex-col" @submit.prevent="LoginUser">

            <div class="space-x-2 p-2 ">

                <label for="email" class="text-zinc-50 ">E-mail</label>
                <input v-model="email" type="text"
                    class="w-80 h-12 rounded-lg border px-2 py-1 placeholder:text-gray-300/70 outline-none focus:border-amber-500 "
                    placeholder="Digite seu e-mail:" />

            </div>

            <div class="space-x-2 p-2 mb-3">

                <label for="senha" class="text-zinc-50 ">Senha</label>
                <input v-model="passowrd" type="text"
                    class=" w-80 h-12 rounded-lg border px-2 py-1 placeholder:text-gray-300/70 outline-none focus:border-amber-500 "
                    placeholder="Digite sua senha:" />

            </div>

            <p v-if="errorMessage" class="text-red-600 my-4 w-62 text-center ">{{ errorMessage }}</p>

            <div class="flex justify-center gap-4 mt-8">

                <button type="submit" class="mt-6 rounded-xl bg-amber-600 px-4 py-2.5 text-semibold cursor-pointer
                hover:bg-amber-500 hover:scale-105 transition ease-in-out duration-200  w-fit text-center flex items-center
                justify-center gap-2 group">
                    Entrar
                    <ArrowRightIcon
                        class="size-4 mt-0.5 group-hover:translate-x-2 transition ease-in-out duration-300 group-hover:opacity-0" />
                </button>


                <router-link to="/form" type="submit"
                    class=" mt-6 rounded-xl bg-amber-600 px-4 py-2.5 text-semibold cursor-pointer
                    hover:bg-amber-500 hover:scale-105 transition ease-in-out duration-200 w-fit text-center  flex items-center justify-center gap-2">
                    Cadastre-se
                    <UserPlusIcon class="size-4 " />
                </router-link>

            </div>

            <div class="flex justify-center gap-4 mt-8">

                <router-link to="/"
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
import { ArrowLeftIcon } from "@heroicons/vue/24/solid";
import { UserPlusIcon } from "@heroicons/vue/24/solid";
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();


const email = ref('');
const password = ref('');

const errorMessage = ref('');
const LoginUser = () => {
    if (!password.value || !email.value) {
        errorMessage.value = "Preencha todos os campos!"
        return;
    }
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = storedUsers.find((user) => user.password === password.value && user.email === email.value);

    if (userExists) {

        router.push("/main");
    } else {

        errorMessage.value = " Usuario não enccontrado ! Verifique os dados ou cadastre-se.";
    }

}
</script>