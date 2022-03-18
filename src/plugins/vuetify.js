import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                background: "#E8EAF6",
            },
            dark: {
                background: "#212121",
            }
        }
    }
});
