<template>
  <div>
    <b-button v-b-modal="$options.MODAL_ID" class="px-3">
      <fa icon="search" class="text-gray-dark" size="lg" />
    </b-button>

    <b-modal
      :id="$options.MODAL_ID"
      title="BootstrapVue"
      size="lg"
      hide-footer
      @shown="onModalShown"
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
            spellcheck="false"
            class="outline-none block w-full mx-4 py-3 border-b border-gray focus:border-pink font-head"
            placeholder="Search..."
            @keyup.up="onUp"
            @keyup.down="onDown"
          />
          <button
            class="font-mono flex items-center px-1.5 py-0.5 h-full rounded text-sm font-medium border border-gray text-gray-dark"
            @click="$bvModal.hide($options.MODAL_ID)"
          >
            esc
          </button>
        </div>
      </template>
      <div class="mb-8 px-3 lg:px-8">
        <div v-if="showSuggestions">
          <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            class="space-y-2"
          >
            <li
              v-for="(suggestion, index) in suggestions"
              :key="index"
              class="py-3.5 px-4 rounded shadow-sm font-head cursor-pointer flex"
              :class="[
                index === focusIndex ? 'bg-pink-light' : 'bg-pink-lightest',
              ]"
              @mouseenter="focus(index)"
            >
              <!-- Note: mouseenter doesn't work in nuxt-link (but does on <a>), hence adding styling on <li> -->
              <div class="mr-4">
                <fa
                  :icon="[
                    'far',
                    `${$options.SUGGESTION_TYPE[suggestion.dir] || 'file'}`,
                  ]"
                  class="text-ink-light"
                />
              </div>
              <nuxt-link :to="suggestion.path">
                {{ suggestion.title }}
              </nuxt-link>
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
import { BFormInput, BModal, BButton, VBModal } from 'bootstrap-vue';
import { mapActions, mapGetters } from 'vuex';
import { RECENT_DATA_LIMIT } from '~/lib';

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
    if (this.recentTidbits4.length === 0) {
      const recentTidbits = await this.$content('tidbits')
        .only(['path', 'title', 'slug', 'dir'])
        .sortBy('order', 'desc')
        .limit(RECENT_DATA_LIMIT)
        .fetch();
      this.setRecentTidbits(recentTidbits);
    }

    this.suggestions = this.recentTidbits4;
    this.unfocus();
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
    ...mapActions('tidbit', ['setRecentTidbits']),
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
    focus(i) {
      this.focusIndex = i;
    },
    // Leaving this code here in case we want to use
    // This will remove focus styling if mouse leaves
    // Add to: <ul @mouseleave="unfocus">
    unfocus() {
      this.focusIndex = -1;
    },
  },
};
</script>
