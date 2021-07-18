<template>
  <div class="w-full lg:w-auto">
    <b-button
      v-b-modal="$options.MODAL_ID"
      class="flex items-center text-gray-darker md:bg-gray-lighter rounded px-3 sm:px-4 md:px-2 py-2 md:py-0.5 lg:pl-2 md:w-full lg:w-80 xl:w-96"
    >
      <fa
        icon="search"
        class="text-gray-light md:text-ink text-lg sm:text-xl md:text-base"
      />
      <span class="hidden md:inline-block lg:hidden pl-2">Search...</span>
      <span class="hidden lg:inline-block pl-2">
        Press &quot;/&quot; to search...
      </span>
    </b-button>

    <b-modal
      :id="$options.MODAL_ID"
      title="BootstrapVue"
      size="lg"
      hide-footer
      @shown="onModalShown"
      @hidden="onModalHidden"
    >
      <template #modal-header>
        <div class="flex items-center w-full px-3 lg:px-8 py-3 mb-3">
          <fa icon="search" class="text-pink" size="lg" />
          <b-form-input
            ref="searchInput"
            v-model="query"
            aria-label="Search"
            type="search"
            debounce="100"
            autocomplete="off"
            spellcheck="false"
            class="outline-none block w-full mx-4 py-3 border-b border-gray focus:border-pink font-head"
            placeholder="Search..."
            @keyup.up="onUp"
            @keyup.down="onDown"
            @keyup.enter="go(focusIndex)"
          />
          <button
            class="font-mono flex items-center px-1.5 py-0.5 h-full rounded text-sm font-medium border border-gray text-gray-dark"
            @click="$bvModal.hide($options.MODAL_ID)"
            @focus="unfocus"
          >
            esc
          </button>
        </div>
      </template>
      <div class="mb-8 px-3 lg:px-8">
        <div v-if="showSuggestions">
          <ul class="space-y-2" role="listbox">
            <li
              v-for="(suggestion, index) in suggestions"
              :key="index"
              class="flex py-3.5 px-4 leading-tight rounded shadow-sm font-head cursor-pointer"
              :class="[
                index === focusIndex ? 'bg-pink-light' : 'bg-pink-lightest',
              ]"
              tabindex="0"
              role="option"
              :aria-selected="index === focusIndex ? 'true' : 'false'"
              @mouseenter="focus(index)"
              @mousedown="go(index)"
              @keyup.enter="go(index)"
            >
              <!-- Note: mouseenter doesn't work in nuxt-link (but does on <a>), hence adding styling on <li> -->
              <a :to="suggestion.path" @click.prevent>
                <span class="mr-4">
                  <fa
                    :icon="[
                      'far',
                      `${$options.SUGGESTION_TYPE[suggestion.dir] || 'file'}`,
                    ]"
                    class="text-ink-light"
                  />
                </span>
                {{ suggestion.title }}
              </a>
            </li>
          </ul>
        </div>
        <p v-else class="text-gray-dark mt-4 mb-12 text-lg">
          No results for &quot;<span class="font-bold">{{ query }}</span
          >&quot;
        </p>
      </div>
    </b-modal>
  </div>
</template>

<script>
// Reference > https://github.com/vuejs/vuepress/blob/64e92ca6a14a4778c7801ee2b5625e0b89727f5d/packages/%40vuepress/plugin-search/SearchBox.vue
import { BFormInput, BModal, BButton, VBModal } from 'bootstrap-vue';
import { mapGetters } from 'vuex';
import { Tidbit } from '~/lib';

const SEARCH_HOTKEYS = ['s', '/'];
const MODAL_ID = 'search-modal';

const SUGGESTION_TYPE = {
  '/tidbits': 'file-code',
  '/blog': 'file-alt',
};

export default {
  MODAL_ID,
  SUGGESTION_TYPE,
  components: {
    BFormInput,
    BModal,
    BButton,
  },
  directives: {
    'b-modal': VBModal,
  },
  data: () => ({
    query: '',
    suggestions: [],
    focused: false,
    focusIndex: 0,
  }),
  async fetch() {
    await Tidbit.dispatchRecents({
      content: this.$content,
      store: this.$store,
    });

    this.unfocus();
    this.suggestions = this.recentTidbits4;
  },
  computed: {
    ...mapGetters('tidbit', ['recentTidbits4']),
    showSuggestions() {
      return this.suggestions?.length;
    },
  },
  watch: {
    async query(query) {
      if (!query) {
        this.suggestions = [];
        return;
      }
      // Note: can't use in combo with sortBy
      this.suggestions = await this.$content('', { deep: true })
        .only(['title', 'path', 'dir'])
        .search(query)
        .limit(10)
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
        this.$bvModal.show(MODAL_ID);
        event.preventDefault();
      }
    },
    onModalShown() {
      this.$refs.searchInput.focus();
      this.suggestions = this.recentTidbits4;
    },
    onModalHidden() {
      this.unfocus();
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
      this.$bvModal.hide(MODAL_ID);
      this.query = '';
      this.unfocus();
    },
    focus(i) {
      this.focusIndex = i;
    },
    // Add to ul if want to remove focus styling when mouse leaves
    // <ul @mouseleave="unfocus">
    unfocus() {
      this.focusIndex = -1;
    },
  },
};
</script>
