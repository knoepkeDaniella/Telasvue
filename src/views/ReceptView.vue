<template>
    <div class="flex flex-col md:flex-row justify-center items-start gap-8 p-6">

        <div class="max-w-3xl w-full md:w-[500px] mt- p-6 bg-gray-800 shadow-lg rounded-lg">

            <h1 class="text-3xl font-bold text-amber-600 mb-4 text-center">Mensagens Recebidas</h1>

            <div v-if="mensagens.length > 0" class="space-y-4">

                <div v-for="msg in mensagens" :key="msg.id"
                    class="bg-gray-500 p-4 rounded-lg shadow-md transition transform hover:scale-105 cursor-pointer"
                    @click="selecionarMensagem(msg)">

                    <div class="flex justify-between items-center">

                        <div>
                            <p class="text-lg font-semibold text-gray-800">{{ msg.nome }}</p>
                            <p class="text-sm text-gray-800">{{ msg.email }}</p>
                        </div>

                        <button @click.stop="excluirMensagem(msg.id)"
                            class="bg-red-700 px-2 py-1 rounded hover:bg-red-500 transition">
                            <TrashIcon class="size-4 " />

                        </button>

                    </div>

                </div>

            </div>

            <p v-else class="text-center text-gray-500 text-lg mt-4">Nenhuma mensagem recebida ainda. 📭</p>

        </div>

        <div class="w-[450px] min-h-[400px] p-6 bg-gray-800 shadow-lg rounded-lg">

            <h1 class="text-3xl font-bold text-amber-600 mb-4 text-center">Mensagem Selecionada</h1>

            <div v-if="mensagemSelecionada" class="bg-gray-800 p-6 rounded-lg overflow-auto max-h-96">
                <p class="text-lg font-semibold text-white">{{ mensagemSelecionada.nome }}</p>
                <p class="text-sm text-gray-400">{{ mensagemSelecionada.email }}</p>
                <p class="text-white mt-4 break-words whitespace-pre-wrap">
                    {{ mensagemSelecionada.mensagem }}
                </p>
            </div>

            <p v-else class="text-center text-gray-500">Clique em uma mensagem para visualizar.</p>

        </div>

    </div>

    <div class="flex justify-center gap-4 mt-8">

        <router-link to="/contact"
            class=" mt-6 rounded-xl bg-amber-600 px-4 py-2.5 text-semibold cursor-pointer
                    hover:bg-amber-500 hover:scale-105 transition ease-in-out duration-200 w-fit text-center flex items-center justify-center gap-2 group">
            <ArrowLeftIcon
                class="size-4 mt-0.5 group-hover:-translate-x-2 transition ease-in-out duration-300 group-hover:opacity-0" />
            Voltar
        </router-link>
        <router-link to="/"
            class=" mt-6 rounded-xl bg-amber-600 px-4 py-2.5 text-semibold cursor-pointer
                    hover:bg-amber-500 hover:scale-105 transition ease-in-out duration-200 w-fit text-center flex items-center justify-center gap-2 group">
            <HomeIcon class="size-4 " />
            Home
        </router-link>

    </div>

</template>

<script setup>


import { ArrowLeftIcon } from "@heroicons/vue/24/solid";
import { HomeIcon } from "@heroicons/vue/24/solid";
import { TrashIcon } from "@heroicons/vue/24/solid";
import { ref, onMounted } from 'vue';

const mensagens = ref([]);
const mensagemSelecionada = ref(null);

const carregarMensagens = () => {
    mensagens.value = JSON.parse(localStorage.getItem('mensagens')) || [];
};

const excluirMensagem = (id) => {
    mensagens.value = mensagens.value.filter(msg => msg.id !== id);
    localStorage.setItem('mensagens', JSON.stringify(mensagens.value));

    if (mensagemSelecionada.value?.id === id) {
        mensagemSelecionada.value = null;
    }
};

const selecionarMensagem = (mensagem) => {
    mensagemSelecionada.value = mensagem;
};

onMounted(carregarMensagens);

</script>



<style scoped>
button {
    transition: all 0.2s ease-in-out;
}
</style>
