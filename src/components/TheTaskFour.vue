<template>
  <div class="task_4__container">
    <div class="task_4__description">
      Необходимо, используя компонент datatable, отобразить в одной из ячеек таблицы массив.
    </div>
    <DataTable
      :value="tableData"
      :loading="loading"
      showGridlines
      tableStyle="min-width: 50rem"
    >
      <Column field="code" header="Code"></Column>
      <Column field="data" header="Data"></Column>
    </DataTable>
  </div> 
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { dataTable } from '../constants'

export default defineComponent({
  name: 'TheTaskFour',
  components: { 
    DataTable,
    Column
  },
  setup() {
    const loading = ref(false)
    const tableData = reactive([ ...dataTable ])

    onMounted(() => {
      loading.value = true
    })
    return { loading, tableData }
  }
})
</script>

<style scoped>
.task_4__description {
  margin-bottom: 12px;
  color: #000;
}
</style>
