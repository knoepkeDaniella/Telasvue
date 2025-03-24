<template>
    <div class="flex flex-col mx-auto items-center justify-center min-h-screen relative -top-15">


        <img src="../assets/logoipsum-298.svg" alt="logo" class="mb-12 mx-auto w-32 md:w-40 drop-shadow-lg" />


        <h1 class="text-5xl text-amber-600 font-bold mb-6 animate-fade-in">Bem-vindo!</h1>


        <p class="text-amber-600 mb-12 text-lg md:text-xl text-center animate-slide-up">Escolha uma opção abaixo:</p>


        <div class="flex flex-wrap justify-center gap-6">
            <router-link to="/upon" class="card">
                <div
                    class="bg-white border-t-4 border-amber-600 shadow-xl rounded-xl p-6 hover:shadow-2xl transition-transform transform hover:scale-105">
                    <h2 class="text-xl font-semibold mb-3 text-amber-600">Sobre Nós</h2>
                    <p class="text-zinc-800">Saiba mais sobre nossa empresa e nossa historia.</p>
                </div>
            </router-link>

            <router-link to="/contact" class="card">
                <div
                    class="bg-white border-t-4  border-amber-600 shadow-xl rounded-xl p-6 hover:shadow-2xl transition-transform transform hover:scale-105 ">
                    <h2 class="text-xl font-semibold mb-3 text-amber-600">Contato</h2>
                    <p class="text-zinc-800">Fale conosco para mais informações.</p>
                </div>
            </router-link>


            <router-link to="/services" class="card">
                <div
                    class="bg-white border-t-4 border-amber-600 shadow-xl rounded-xl p-6 hover:shadow-2xl transition-transform transform hover:scale-105">
                    <h2 class="text-xl font-semibold mb-3 text-amber-600">Serviços</h2>
                    <p class="text-zinc-800">Conheça os serviços que oferecemos.</p>
                </div>
            </router-link>
        </div>


    </div>
</template>

<style scoped>
.card {
    width: 100%;
    max-width: 280px;
    text-align: center;
    border-radius: 12px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
    transform: scale(1.07);
    box-shadow: px 10px 20px rgba(0, 0, 0, 0.1);
}


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