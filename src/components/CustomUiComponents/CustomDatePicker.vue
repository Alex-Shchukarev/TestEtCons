<template>
  <div class="custom_datepicker__container">
    <div class="label_time">
      Значение переменной директивы v-model: {{ formattedValue }}
    </div>
    <DatePicker
      id="datepicker-timeonly"
      v-model="time"
      timeOnly
      showButtonBar
      class="custom_picker"
    />
  </div> 
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import DatePicker from 'primevue/datepicker'
import { dateTimeFormatter } from '../../utils/DateTimeUtil'

export default defineComponent({
  name: 'CustomDatePicker',
  components: { DatePicker },
  setup() {
    const time = ref('')
    const formattedValue = computed(() => dateTimeFormatter(time.value))

    return { time, formattedValue }
  }
})
</script>

<style scoped>
.custom_datepicker__container {
  width: 400px;
  margin-bottom: 12px;
}
.label_time {
  margin-bottom: 4px;
  text-align: center;
}
.custom_picker {
  width: 100%;
}
</style>