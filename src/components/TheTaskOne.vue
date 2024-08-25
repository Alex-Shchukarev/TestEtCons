<template>
  <div class="task_1__container">
    <div class="task_1__description">
      Поле предназначено для отображения ссылок на форме редактирования.
    </div>
    <InputLink
      id="InputLink"
      :modelValue="modelValue"
      placeholder="https://"
      @change="changeValue"
      @goToLink="goToLink"
    />
  </div> 
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import InputLink from './InputLink.vue'

export default defineComponent({
  name: 'TheTaskOne',
  components: { InputLink },
  setup() {
    const modelValue = ref('')
    const changeValue = (val: any): void => { if (typeof val === 'string') { modelValue.value = val } }
    const goToLink = (): void => { console.log(`goToLink - ${modelValue.value}`) }

    return { modelValue, changeValue, goToLink }
  }
})
</script>

<style scoped>
.task_1__description {
  margin-bottom: 12px;
  color: #888;
}
</style>
