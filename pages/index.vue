<script setup lang="ts">
import { ref } from 'vue';
import { validateCardBrand } from '@/composables/validarBandeira';

const lastCard = ref('');
const lastBrand = ref('');
const cardInput = ref('');

const addCard = () => {
  const cleanCard = cardInput.value.trim();
  if (!cleanCard) return;

  const { brand, valid } = validateCardBrand(cleanCard);
  lastCard.value = cleanCard;
  lastBrand.value = valid ? brand || 'Bandeira inválida' : 'Número inválido';
  cardInput.value = '';
};
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center gap-7 max-w-2xl w-full">
    <h1 class="font-bold text-center text-2xl max-sm:text-lg">Validador de Bandeira de Cartão</h1>
    <div class="w-full flex items-center justify-center gap-2 max-sm:flex-col">
      <input
        v-model="cardInput"
        type="text"
        placeholder="Digite o número do cartão"
        class="common-block placeholder-gray-400 transition duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <button
        @click="addCard"
        class="cursor-pointer px-4 py-3 rounded-lg border border-blue-500 bg-blue-500 text-white font-semibold shadow-sm transition duration-200 hover:bg-blue-600 focus:outline-none active:bg-blue-700 max-sm:text-sm max-sm:w-full"
      >
        Verificar
      </button>
    </div>
    <div class="w-full flex items-center justify-center gap-2 max-sm:flex-col">
      <p class="common-block max-w-1/2 truncate max-sm:max-w-none" :title="lastCard">{{ lastCard || "Nenhum cartão inserido" }}</p>
      <p class="common-block">{{ lastBrand || "Nenhuma bandeira verificada" }}</p>
    </div>
    <p class="text-gray-400 text-base max-sm:text-sm">Obs: Teste com 4Devs</p>
  </div>
</template>

<style scoped>

</style>