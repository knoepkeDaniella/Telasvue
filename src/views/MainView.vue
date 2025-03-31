<template>

    <div class="rounded-xl p-24 mt-40 space-y-6 flex flex-col items-center justify-center relative ">

        <div class="w-full absolute left-5 top-10 ">


        </div>

        <h1 class="text-center text-4xl font-bold text-amber-600 mt-4">Visualize suas informações</h1>

        <table class="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
            <thead>
                <tr class="bg-gray-800 text-amber-500 uppercase text-lg font-semibold">
                    <th class="py-4 px-6 text-left">ID</th>
                    <th class="py-4 px-6 text-left">Nome</th>
                    <th class="py-4 px-6 text-left">E-mail</th>
                </tr>
            </thead>
            <tbody class="bg-gray-500 divide-y divide-gray-400">
                <tr v-for="user in users" :key="user.id" class="hover:bg-gray-400 transition-colors duration-200">
                    <td class="py-4 px-6 text-gray-900 font-medium">{{ user.id }}</td>
                    <td class="py-4 px-6 text-gray-900">{{ user.name }}</td>
                    <td class="py-4 px-6 text-gray-900">{{ user.email }}</td>
                </tr>
            </tbody>
        </table>

        <router-link to="/"
            class="mt-6 rounded-xl bg-amber-600 px-4 py-2 text-semibold cursor-pointer
             hover:bg-amber-500 hover:scale-105 transition ease-in-out duration-200 w-fit self-center flex items-center gap-2 group ">
            <ArrowLeftIcon
                class="size-4 mt-0.5 group-hover:-translate-x-2 transition ease-in-out duration-300 group-hover:opacity-0" />
            Voltar
        </router-link>

    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ArrowLeftIcon } from "@heroicons/vue/24/solid";

const users = ref([]);

const LoadUsers = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    users.value = storedUsers;
};

onMounted(LoadUsers);

</script>