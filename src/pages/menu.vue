<template>
  <q-page padding>
    <h1>Esto es el menu</h1>
    <listado-component></listado-component>
  </q-page>
</template>



<script>

import ListadoComponent from '../components/listadoComponent'

export default {
  name: 'MenuComponent',
  components: {
    'listado-component': ListadoComponent
  }
}
</script>

<style>
</style>
