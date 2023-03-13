<script setup lang="ts">
import type {VerseWord} from '@/types/VerseWord'
import type { PropType } from 'vue';

const props = defineProps({
  word: { type: Object as PropType<VerseWord>, required: true }
})
</script>

<template>
  <div class="verse-word">
    <div :class="'arabic qcf-'+'props.word.page_number'">{{ props.word.code_v1 }}</div>
    <div>{{ props.word.translation.text }}</div>
  </div>
</template>

<style scoped>
.verse-word{ display:inline-block; margin:1rem }
.verse-word .arabic{ font-size: 4em;}
</style>
