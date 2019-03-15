<template>
  
  <q-page padding>
   <h1>Esto es Usuarios</h1>
    <!--<usuarioForm-component></usuarioForm-component>-->

  <div class="q-pa-md" style="max-width: 750px">
    <q-list bordered separator>

      <q-item clickable v-ripple>
        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-item-label>Nombre: </q-item-label>
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="visible = true"/>
            <q-btn class="gt-xs" size="12px" flat dense round icon="create" @click="opened = true"/>
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>

       <q-item clickable v-ripple>
        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-item-label>Apellido: </q-item-label>
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="visible = true"/>
            <q-btn class="gt-xs" size="12px" flat dense round icon="create" @click="opened = true"/>
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-item-label>Edad: </q-item-label>
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="visible = true"/>
            <q-btn class="gt-xs" size="12px" flat dense round icon="create" @click="opened = true"/>
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <div >
      <q-btn label="Usuario" color="primary" @click="opened = true" />
     </div>
  </div>

  <!--Modal -->
    <q-modal v-model="opened" :content-css="{minWidth: '50vw', minHeight: '50vh'}">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-btn
            flat
            round
            dense
            v-close-overlay
            icon="keyboard_arrow_left"
          />
          <q-toolbar-title>
            Editar usuario
          </q-toolbar-title>
        </q-toolbar>

        <q-toolbar slot="header">
          <q-search inverted v-model="search" color="none" />
        </q-toolbar>


        <div class="layout-padding">
          
            <usuarioForm-component></usuarioForm-component>

          <q-btn
            color="primary"
            v-close-overlay
            label="Close"
          />
        </div>
      </q-modal-layout>
    </q-modal>
   <!--Modal -->

   <!--Alerta-->
     <transition
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
      appear
    >
      <q-alert
        v-if="visible"
        type="negative"
        icon="delete"
        appear
        :actions="[{ label: 'Cerrar', handler: () => { visible = false } }]"
        class="q-mb-sm"
      >
       ¿Esta seguro que desea eliminar?
        <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
        <q-btn class="gt-xs" size="12px" flat dense round icon="cancel" />
  </q-alert>
</transition>
    <!--Alerta-->
  </q-page>
</template>

<script>

import ListadoComponent from '../components/listadoComponent'
import usuarioFormComponent from '../components/usuarioFormComponent'

export default {
  
  // name: 'PageName',
   components: {
    'listado-component': ListadoComponent,
    'usuarioForm-component': usuarioFormComponent
  },
   data () {
    return {
      opened: false,
      visible: false
    }
  }
}
</script>

<style>
</style>
