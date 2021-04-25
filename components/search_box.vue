<template>
  <div class="relative search-box">
    <div class="relative rounded-md shadow-sm w-64">
      <div
        class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
      >
        <fa icon="search" class="text-gray-dark" />
      </div>
      <b-form-input
        ref="input"
        v-model="query"
        class="focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white block w-full pl-8 pr-2 sm:text-sm border-gray-300 rounded-md py-2 bg-gray-lighter"
        aria-label="Search"
        :class="{ focused: focused }"
        :placeholder="$options.PLACEHOLDER"
        type="search"
        autocomplete="off"
        spellcheck="false"
        debounce="100"
        @focus="focused = true"
        @blur="focused = false"
        @keyup.enter="go(focusIndex)"
        @keyup.up="onUp"
        @keyup.down="onDown"
      />
    </div>
    <!-- SEARCH RESULT -->
    <div
      v-if="showSuggestions"
      class="suggestion-result origin-top-right absolute right-0 mt-1 w-64 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto"
    >
      <ul
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
        class="py-1"
      >
        <li
          v-for="(suggestion, index) in suggestions"
          :key="index"
          :class="{ focused: index === focusIndex }"
          @mousedown="go(index)"
          @mouseenter="focus(index)"
        >
          <NuxtLink
            class="block px-4 py-2.5 text-sm font-semibold hover:bg-pink-lightest leading-tight"
            :to="suggestion.path"
          >
            {{ suggestion.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// Reference > https://github.com/vuejs/vuepress/blob/64e92ca6a14a4778c7801ee2b5625e0b89727f5d/packages/%40vuepress/plugin-search/SearchBox.vue
import { BFormInput } from 'bootstrap-vue';

const SEARCH_HOTKEYS = ['s', '/'];
const PLACEHOLDER = 'Press "s" to search...';

export default {
  components: {
    BFormInput,
  },
  data() {
    return {
      query: '',
      suggestions: [],
      focused: false,
      focusIndex: 0,
    };
  },
  computed: {
    showSuggestions() {
      return this.focused && this.suggestions && this.suggestions.length;
    },
  },
  watch: {
    async query(query) {
      if (!query) {
        this.suggestions = [];
        return;
      }
      this.suggestions = await this.$content('', { deep: true })
        .only(['title'])
        .sortBy('createdAt', 'asc')
        .search(query)
        .fetch();
    },
  },
  mounted() {
    document.addEventListener('keydown', this.onHotkey);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onHotkey);
  },
  methods: {
    onHotkey(event) {
      if (
        event.srcElement === document.body &&
        SEARCH_HOTKEYS.includes(event.key)
      ) {
        this.$refs.input.focus();
        event.preventDefault();
      }
    },
    onUp() {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--;
        } else {
          this.focusIndex = this.suggestions.length - 1;
        }
      }
    },
    onDown() {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++;
        } else {
          this.focusIndex = 0;
        }
      }
    },
    go(i) {
      if (!this.showSuggestions) {
        return;
      }
      this.$router.push(this.suggestions[i].path);
      this.query = '';
      this.focusIndex = 0;
    },
    focus(i) {
      this.focusIndex = i;
    },
    unfocus() {
      this.focusIndex = -1;
    },
  },
  PLACEHOLDER,
};
</script>

<style lang="scss" scoped>
.suggestion-result {
  max-height: 75vh;
}

/* // responsive breakpoints
$MQNarrow ?= 959px
$MQMobile ?= 719px
$MQMobileNarrow ?= 419px */

/* sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... } */

// @media (max-width: theme('screens.lg')) {
//   .search-box input {
//     cursor: pointer;
//     width: 0;
//     border-color: transparent;
//     position: relative;
//   }
// }
</style>
