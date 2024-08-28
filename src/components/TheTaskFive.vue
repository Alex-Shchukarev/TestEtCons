<template>
  <div class="task_5__container">
    <div class="task_5__description">
      Таблица с поиском
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
import { defineComponent, ref, reactive } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { dataTable } from '../constants'

export default defineComponent({
  name: 'TheTaskFive',
  components: { 
    DataTable,
    Column
  },
  setup() {
    const loading = ref(false)
    const tableData = reactive([ ...dataTable ])

    return { loading, tableData }
  }
})
</script>

<style scoped>
.task_5__description {
  margin-bottom: 12px;
  color: #888;
}
</style>
