<template>
  <div class="custom_multiselect__container">
    <div class="label_select">
      Множественный выбор 
    </div>
    <MultiSelect
      v-model="selectedCities"
      :options="cities"
      optionLabel="name"
      placeholder="Выберите город"
      class="custom_multiselect"
      @change="changeValue"
    >
      <template #value>
        <div class="value_container">
          <div class="value_items">
            {{ !arrStr.length ? '' : arrStr.join(', ') }}
          </div>
          <i
            v-show="arrStr.length"
            class="pi pi-times"
            @click.prevent.stop="clearValue()"
          />
        </div>
      </template>
    </MultiSelect>
  </div> 
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import MultiSelect from 'primevue/multiselect'
import { citiesData } from '../../constants'
import { IOption } from '../../typing'

export default defineComponent({
  name: 'CustomMultiSelect',
  components: { MultiSelect },
  setup() {
    const selectedCities = ref([] as IOption[])
    const arrStr = ref([] as string[])
    const cities = reactive([ ...citiesData ])
    const changeValue = (): void => {
      arrStr.value = []
      selectedCities.value.forEach(c => { arrStr.value.push(c.name) })
    }
    const clearValue = (): void => {
      selectedCities.value = []
      arrStr.value = []
     }

    return { selectedCities, cities, arrStr, clearValue, changeValue }
  }
})
</script>

<style scoped>
.custom_multiselect__container {
  margin-bottom: 12px;
}
.label_select {
  margin-bottom: 4px;
}
.custom_multiselect {
  width: 300px;
}
.value_container {
  width: 100%;
  height: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.value_items {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.value_container img {
  margin-left: 8px;
  cursor: pointer;
}
</style>