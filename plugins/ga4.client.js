import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ isDev, app, $config }) => {
  if (!isDev) {
    Vue.use(
      VueGtag,
      {
        config: { id: $config.ga4Secret },
      },
      app.router,
    );
  }
};
