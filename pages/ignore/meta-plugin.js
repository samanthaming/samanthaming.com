import Vue from 'vue';
import { routeMeta } from '../../lib/utils/meta';

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__my_meta_mixin__) {
  Vue.__my_meta_mixin__ = true;
  Vue.mixin({
    head() {
      return routeMeta(this.$route.name);
    },
  }); // Set up your mixin then
}

// import Vue from 'vue'

// Vue.mixin({
//     data: {
//         my_global_config: 'This'
//     },
//     created: function () {
//         console.log('mixin hook called')
//     }
//     methods: {}
// })
