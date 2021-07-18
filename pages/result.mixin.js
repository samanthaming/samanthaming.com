export const resultMixin = {
  data: () => ({
    resultChunks: [],
    page: 1,
    loading: false,
    hasLoadMore: true,
  }),
  computed: {
    pageQuery() {
      return this.$route.query?.page;
    },
    tagQuery() {
      return this.$route.query?.tag;
    },
    currentResultsCount() {
      return this.resultChunks.flat().length;
    },
  },
  watch: {
    '$route.query.tag'() {
      this.resultChunks = [];
      this.resetLoadMore();
      this.$fetch();
    },
  },
  methods: {
    clickLoadMore() {
      const page = +this.pageQuery + 1 || 2;

      this.page = page;
      this.loading = true;

      this.loadMoreResults();
    },
    resetLoadMore() {
      this.hasLoadMore = true;
      this.loading = false;
    },
    clickFilter(value) {
      const hash = `#${this.$route.name}`;
      const routerObject = {
        name: this.$route.name,
      };

      if (value) {
        routerObject.query = { tag: value };
      }

      this.$scrollTo(hash);
      this.$router.push(routerObject);
    },
    incrementPageQuery() {
      const tag = this.tagQuery ? { tag: this.tagQuery } : {};

      this.$router.push({
        name: this.$route.name,
        query: { page: this.page, ...tag },
        hash: `#${this.page}`,
      });
    },
  },
};
