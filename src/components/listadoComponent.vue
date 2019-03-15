<template>
  <q-table
    title="Noticias"
    :data="tableData"
    :columns="columns"
    row-key="name"
  >
  <q-td slot="body-cell-actions" slot-scope="props" :props="props">
    <div class="row items-center justify-between no-wrap">
        <q-btn size="md" round dense color="secondary" icon="search" />
        <q-btn size="md" round dense color="tertiary" icon="create" />
        <q-btn size="md" round dense color="negative" icon="clear" />
      </div>
  </q-td>
  
  </q-table>
</template>

<script>
export default {
  data: () => ({
    columns: [
      {
        name: 'name',
        required: true,
        label: 'Nombre',
        align: 'left',
        field: 'name',
        sortable: true,
        style: 'width: 200px'
      },
      {
        name: 'detail',
        required: true,
        label: 'Detalle',
        align: 'left',
        field: 'detail',
        sortable: true,
        style: 'width: 500px'
      },
      {
        name: 'actions',
        required: false,
        label: 'Acciones',
        align: 'left',
        field: 'actions',
        sortable: false,
        style: 'width: 100px'
      },
    ],
    tableData: [
      {
        name: 'Potatoes',
        detail: '159 calories, carbs 24',
      },
      {
        name: 'Frozen Yogurt',
        detail: '80 calories, carbs 10'
      },
    ]
  })
}
</script>
<style>
</style>
