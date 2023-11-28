import { createApp } from "vue";
import App from "./App.vue";

// Router
import router from "./router";

// VueGtag for GA4
import VueGtag from "vue-gtag";

// Styles
import "./styles/main.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// FontAwesome
/* the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* specific icons families */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
/* add all icons to the library to use them */
library.add(fas, far, fab)

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);

app.use(router);
app.use(VueGtag, {
    config: { id: "G-CSWTNN351B" }
}, router); // pass the VueRouter instance as the third parameter will start tracking all your pages automatically
app.use(vuetify);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount("#app");
