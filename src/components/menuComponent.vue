<template>
   <q-layout view="lHh Lpr lFf">

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Menu</q-list-header>
        <q-item to="/menu">
          <q-item-side icon="list" />
          <q-item-main label="Menu" sublabel="menu" />
        </q-item>
        <q-item to="/item">
          <q-item-side icon="subject" />
          <q-item-main label="Item" sublabel="" />
        </q-item>
        <q-item to="/noticias">
          <q-item-side icon="library_books" />
          <q-item-main label="Noticia" sublabel="" />
        </q-item>
        <q-item to="/imagenes">
          <q-item-side icon="collections" />
          <q-item-main label="Imagenes" sublabel="" />
        </q-item>
        <q-item to="/eventos">
          <q-item-side icon="event" />
          <q-item-main label="Eventos" sublabel="" />
        </q-item>
        <q-item to="/archivos">
          <q-item-side icon="archive" />
          <q-item-main label="Archivos" sublabel="" />
        </q-item>
        <q-item to="/usuarios">
          <q-item-side icon="assignment_ind" />
          <q-item-main label="Usuarios" sublabel="" />
        </q-item>
        <q-item to="/configuraciones">
          <q-item-side icon="build" />
          <q-item-main label="Configuraciones" sublabel="" />
        </q-item>
        <q-item to="/bloques">
          <q-item-side icon="dns" />
          <q-item-main label="Bloques" sublabel="" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script>
export default {
   name: 'menuComponent',
  data () {
    return {}
  }
}
</script>

<style>
</style>
