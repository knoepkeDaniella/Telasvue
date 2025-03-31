<template>
    <div class=" text-white min-h-screen  w-full flex flex-col items-center justify-center p-12 relative">

        <h1 class="text-5xl font-bold text-center mb-16 text-amber-600">Sobre Nós</h1>

        <div class="flex flex-col space-y-8 max-w-6xl w-full">

            <div
                class="flex flex-col md:flex-row gap-4 bg-gray-800 p-6 rounded-xl border hover:scale-105 transition border-gray-600 shadow-lg fade-in">

                <div class="flex-1 flex flex-col justify-center">

                    <h2 class="text-2xl font-semibold text-sky-500">Quem somos</h2>

                    <p class="text-lg text-gray-300 mt-2">
                        Fundada em 2020, nossa empresa nasceu com a missão de oferecer os melhores serviços de
                        desenvolvimento de sites modernos e eficientes.
                    </p>

                </div>

                <img src="../assets/Imagem 1.jpg" alt="Quem somos"
                    class=" w-80 h-40 object-cover rounded-xl shadow-lg" />

            </div>

            <div
                class="flex flex-col md:flex-row-reverse  gap-4 bg-gray-800 p-6 hover:scale-105 transition rounded-xl border border-gray-600 shadow-lg fade-in-2 ">

                <div class="flex-1 flex flex-col justify-center">

                    <h2 class="text-2xl font-semibold text-amber-500">Colaboradores</h2>

                    <p class="text-lg text-gray-300 mt-2">
                        Contamos com uma equipe altamente qualificada para criar soluções personalizadas que impulsionam
                        negócios online.
                    </p>

                </div>

                <img src="../assets/imagem 2.jpg" alt="Colaboradores"
                    class=" w-80 h-40 object-cover rounded-xl shadow-lg" />
            </div>

            <div
                class="flex flex-col md:flex-row gap-4 bg-gray-800 p-8 rounded-xl hover:scale-105 transition border border-gray-600 shadow-lg fade-in-3 ">

                <div class="flex-1 flex flex-col justify-center">

                    <h2 class="text-2xl font-semibold text-sky-500">Valores</h2>

                    <p class="text-lg text-gray-300 mt-2">
                        Transparência, inovação e compromisso com a excelência são os pilares que nos guiam em cada
                        projeto.
                    </p>

                </div>

                <img src="../assets/imagem 3.jpg" alt="Valores" class=" w-80 h-40 object-cover rounded-xl shadow-lg" />

            </div>

        </div>

        <div class="text-center mt-12">

            <router-link to="/"
                class=" mt-6 rounded-xl bg-amber-600 px-4 py-2.5 text-semibold cursor-pointer
            hover:bg-amber-500 hover:scale-105 transition ease-in-out duration-200 w-fit text-center  flex items-center justify-center gap-2">
                <HomeIcon class="size-4 " />
                Home
            </router-link>

        </div>

    </div>

</template>

<script setup>

import { HomeIcon } from "@heroicons/vue/24/solid";
</script>

<style scoped>
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeInUp 1s ease-out forwards;
    opacity: 0;
}

.fade-in-2 {
    animation: fadeInUp 3s ease-out forwards;
    opacity: 0;
}

.fade-in-3 {
    animation: fadeInUp 5s ease-out forwards;
    opacity: 0;
}
</style>
