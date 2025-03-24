<template>
    <div class=" text-white min-h-screen flex flex-col items-center justify-center p-12">
        <h1 class="text-5xl font-bold text-center mb-16 text-amber-600">Sobre Nós</h1>

        <div class="flex flex-col space-y-12 max-w-7xl w-full">
            <div
                class="flex flex-col md:flex-row items-stretch gap-8 bg-gray-800 p-8 rounded-xl border border-gray-600 shadow-lg w-full fade-in">
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
                class="flex flex-col md:flex-row-reverse items-stretch gap-8 bg-gray-800 p-8 rounded-xl border border-gray-600 shadow-lg w-full fade-in-2 ">
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
                class="flex flex-col md:flex-row items-stretch gap-8 bg-gray-800 p-8 rounded-xl border border-gray-600 shadow-lg w-full fade-in-3 ">
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
                class="text-lg py-3 px-6 rounded-lg bg-amber-600 text-white hover:bg-amber-500 transition-all inline-block">
                Voltar
            </router-link>
        </div>
    </div>
</template>


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
