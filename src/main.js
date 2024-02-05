// Importo il font
import "@fontsource/montserrat";
// Importo bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Destrutturo create app da "vue"
import { createApp } from 'vue'

// Importo app dal file app.vue
import App from './App.vue'

// Importo la libreria generica
import { library } from '@fortawesome/fontawesome-svg-core'

// Importo il componente di Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importo l'icona/e che voglio usare
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Dico alla libreria quali icone deve "caricare"
library.add(faEnvelope);

// Creo l'app
const app = createApp(App);

// Registro il componente in maniera globale
app.component('FontAwesomeIcon', FontAwesomeIcon);

// Monto l'app
app.mount('#app');
