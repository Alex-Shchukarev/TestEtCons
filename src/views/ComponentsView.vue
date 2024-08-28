<script setup lang="ts">
import TheTaskOne from '../components/TheTaskOne.vue'
import TheTaskTwo from '../components/TheTaskTwo.vue'
import TheTaskThree from '../components/TheTaskThree.vue'
import TheTaskFour from '../components/TheTaskFour.vue'
import TheTaskFive from '../components/TheTaskFive.vue'
</script>

<template>
  <ul class="container">
    <li class="item">
      <span class="item_title">1. Поле Link</span>
      <TheTaskOne />
    </li>
    <li class="item">
      <span class="item_title">2. DateTime picker</span>
      <TheTaskTwo />
    </li>
    <li class="item">
      <span class="item_title">3. Сброс значений в Select</span>
      <TheTaskThree />
    </li>
    <li class="item">
      <span class="item_title">4. Многострочный текст в ячейке</span>
      <TheTaskFour />
    </li>
    <li class="item">
      <span class="item_title">5. Таблица с поиском (расширенное задание)</span>
      <TheTaskFive />
    </li>
  </ul>
</template>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  list-style: none;
}
.item {
  margin-bottom: 12px;
  display: grid;
  grid-template-columns: 150px auto;
}
.item_title {
  font-size: 14px;
  font-weight: 600;
  line-height: 110%;
  color: #000000;
}
</style>../components/TheTaskOne.vue