<template>
  <div class="flex flex-wrap mx-auto justify-center  gap-16 w-full mt-12 max-w-6xl">

    <h1 class="text-5xl font-bold text-amber-600  text-center justify-center ">Nossos Serviços </h1>

    <p class="text-lg text-gray-300 max-w-3xl text-center  mt-2">
      Transformamos sua ideia em um site profissional, responsivo e moderno.
      Aumente sua presença digital com um design único e funcional!
    </p>

    <div class="flex flex-wrap justify-center gap-8 w-full max-w-6xl">

      <div class="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition w-80 animate-slide-up">
        <GlobeAltIcon class="w-12 h-12 mx-auto text-amber-500 mb-4" />
        <h2 class="text-2xl font-semibold mb-2">Sites Responsivos</h2>
        <p class="text-gray-400">Seu site se adapta a qualquer tela, garantindo a melhor experiência de design.</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition w-80 animate-slide-up">
        <PaintBrushIcon class="w-12 h-12 mx-auto text-amber-500 mb-4" />
        <h2 class="text-2xl font-semibold mb-2">Design Moderno</h2>
        <p class="text-gray-400">Criação visual atraente e alinhada com a identidade pessoal e da sua marca.</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition w-80 animate-slide-up">
        <BoltIcon class="w-12 h-12 mx-auto text-amber-500 mb-4" />
        <h2 class="text-2xl font-semibold mb-2">Otimização </h2>
        <p class="text-gray-400">Sites rápidos e eficientes para melhor experiência do usuário.</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition w-80 animate-slide-up-1">
        <WrenchIcon class="w-12 h-12 mx-auto text-amber-500 mb-4" />
        <h2 class="text-2xl font-semibold mb-2">Manutenção e Suporte</h2>
        <p class="text-gray-400">Oferecemos suporte contínuo para manter seu site seguro, atualizado e funcionando perfeitamente.</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition w-80 animate-slide-up-1">
        <ShieldCheckIcon class="w-12 h-12 mx-auto text-amber-500 mb-4" />
        <h2 class="text-2xl font-semibold mb-2">Segurança</h2>
        <p class="text-gray-400">Implementamos medidas de segurança para proteger seu site contra ataques e vazamento de dados.</p>
      </div>

      <div class="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition w-80 animate-slide-up-1">
        <ChartBarIcon class="w-12 h-12 mx-auto text-amber-500 mb-4" />
        <h2 class="text-2xl font-semibold mb-2">Analise e Relatórios</h2>
        <p class="text-gray-400">Monitoramos o tráfego e o comportamento dos usuários no seu site .</p>
      </div>

    </div>

    <div class="mt-12 ">
      <router-link to="/" class="text-lg py-3 px-6 rounded-lg bg-amber-600 text-white
                 hover:bg-amber-500 transition-all inline-block">
        Voltar
      </router-link>
    </div>

    <div class="mt-12">
      <router-link to="/contact" class="text-lg py-3 px-6 rounded-lg bg-amber-600 text-white
                 hover:bg-amber-500 transition-all inline-block">
        Solicitar um Orçamento
      </router-link>
    </div>

  </div>
</template>

<script>
import { GlobeAltIcon } from "@heroicons/vue/24/solid";
import { PaintBrushIcon } from "@heroicons/vue/24/solid";
import { BoltIcon } from "@heroicons/vue/24/solid";
import { WrenchIcon } from "@heroicons/vue/24/solid";
import { ShieldCheckIcon } from "@heroicons/vue/24/solid";
import { ChartBarIcon } from "@heroicons/vue/24/solid";

export default {
  components: {
    GlobeAltIcon,
    PaintBrushIcon,
    BoltIcon,
    WrenchIcon,
    ShieldCheckIcon,
    ChartBarIcon
  }
}
</script>

<style scoped>

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

@keyframes slide-up-1 {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}


.animate-slide-up {
    animation: slide-up 1s ease-out;
}
.animate-slide-up-1 {
    animation: slide-up 3s ease-out;
}
</style>
