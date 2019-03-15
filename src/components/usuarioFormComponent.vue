<template>

<q-field
  orientation="horizontal"
  label-width="5"
>
  <q-input v-model="text" type="text" float-label="Nombre/s" />
  <q-input v-model="text" type="text" float-label="Apellido" />
  <q-input v-model="number" type="number" float-label="Edad" />
</q-field>


</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>

<style>
</style>
