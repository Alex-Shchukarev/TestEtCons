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
      :maxSelectedLabels="3"
      class="custom_multiselect"
      closeIcon
    >
      <template #chip>
        <div class="value_container">
          <img
            src="../../assets/cancel.svg"
            alt="clear"
            @click="clearValue"
          />
        </div>
    </template>
    </MultiSelect>
  </div> 
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import MultiSelect from 'primevue/multiselect'
import { citiesData } from '../../constants'
import { IOption } from '../../typing'

export default defineComponent({
  name: 'CustomMultiSelect',
  components: { MultiSelect },
  setup() {
    const selectedCities = reactive([] as IOption[])
    const cities = reactive([ ...citiesData ])
    const clearValue = (): void => { console.log('clearValue') }

    return { selectedCities, cities, clearValue }
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
  display: flex;
  justify-content: space-between;
}
.value_container img {
  margin-left: 8px;
  cursor: pointer;
}
</style>