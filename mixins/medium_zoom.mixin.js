// Reference:
// https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-medium-zoom
import zoom from 'medium-zoom';

export const mediumZoomMixin = {
  data: () => ({
    zoom: null,
  }),
  mounted() {
    this.updateZoom();
  },
  updated() {
    this.updateZoom();
  },
  methods: {
    updateZoom() {
      setTimeout(() => {
        if (this.zoom) {
          this.zoom.detach();
        }
        // .medium-zoom-container :not(a) > img
        this.zoom = zoom('.medium-zoom img', {
          // See: https://github.com/francoischalifour/medium-zoom/issues/69#issuecomment-414970408
          margin: window.innerWidth < 1000 ? 0 : 50,
          background: 'rgba(0, 0, 0, 0.8)',
        });
      }, 1000);
    },
  },
};
