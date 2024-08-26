<template>
  <div class="task_2__container">
    <div class="task_2__description">
      Создать компонент “Время”.
    </div>
    <CustomDatePicker />
  </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomDatePicker from './CustomUiComponents/CustomDatePicker.vue'

export default defineComponent({
  name: 'TheTaskTwo',
  components: { CustomDatePicker },
  setup() { return {} }
})
</script>

<style scoped>
.task_2__description {
  margin-bottom: 12px;
  color: #000;
}
</style>
