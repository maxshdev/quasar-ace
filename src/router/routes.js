
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
  

    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'menu', component: () => import('pages/menu.vue') },
      { path: 'archivos', component: () => import('pages/archivos.vue') },
      { path: 'bloques', component: () => import('pages/bloques.vue') },
      { path: 'configuraciones', component: () => import('pages/configuraciones.vue') },
      { path: 'eventos', component: () => import('pages/eventos.vue') },
      { path: 'imagenes', component: () => import('pages/imagenes.vue') },
      { path: 'item', component: () => import('pages/item.vue') },
      { path: 'noticias', component: () => import('pages/noticias.vue') },
      { path: 'usuarios', component: () => import('pages/usuarios.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
