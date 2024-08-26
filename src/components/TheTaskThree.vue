<template>
  <div class="task_3__container">
    <div class="task_3__description">
      Для селекта с возможностью мультивыбора реализовать функцию сброса выбранных значений.
    </div>
    <CustomMultiSelect />
  </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomMultiSelect from './CustomUiComponents/CustomMultiSelect.vue'

export default defineComponent({
  name: 'TheTaskThree',
  components: { CustomMultiSelect },
  setup() { return {} }
})
</script>

<style scoped>
.task_3__description {
  margin-bottom: 12px;
  color: #888;
}
</style>