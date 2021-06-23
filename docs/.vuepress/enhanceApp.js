import VueCompositionApi from '@vue/composition-api'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.use(VueCompositionApi)
  Vue.use(VueMaterial)

  try {
    const link = window.document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute(
      'href',
      '//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons'
    )
    window.document.head.appendChild(link)
  } catch (error) {
    console.error(error)
  }
}
