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
      <Column field="data" header="Data">
        <template #body="slotProps">
          <div v-if="slotProps.data.id === '1'">{{ slotProps.data.data }}</div>
          <ul v-else class="list_descriptions">
            <li v-for="(s, idx) in arrStr" :key="idx+1" class="list_item">
              {{ s }}
            </li>
          </ul>
        </template>
      </Column>
    </DataTable>
  </div> 
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { dataTable } from '../constants'
import { fetchAllStr } from '../api/apiSevice'
import { tableService } from '../services/TableService'

export default defineComponent({
  name: 'TheTaskFour',
  components: { 
    DataTable,
    Column
  },
  setup() {
    const loading = ref(false)
    const tableData = reactive([ ...dataTable ])
    const arrStr = ref([] as string[])

    onMounted(async (): Promise<void> => {
      loading.value = true
      let allStr = await fetchAllStr()
      arrStr.value = tableService.prepareArrRows(allStr)
      loading.value = false
    })
    return { loading, tableData, arrStr }
  }
})
</script>

<style scoped>
.task_4__description {
  margin-bottom: 12px;
  color: #000;
}
.list_descriptions {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list_item {
  padding: 4px 8px;
}
</style>
