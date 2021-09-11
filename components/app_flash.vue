<template>
  <b-alert
    class="flex border-l-4"
    :class="variantOption.container"
    :show="showFlash"
    dismissible
    fade
    @dismissed="dismissFlash"
    @dismiss-count-down="countDownChanged"
  >
    <!-- Apply to left side only, padding to match button -->
    <div class="flex py-4 pl-3 md:pl-4">
      <!-- ICON -->
      <span class="hidden md:block mr-3" :class="variantOption.iconClass">
        <fa :icon="['fas', variantOption.icon]" />
      </span>
      <!-- TEXT -->
      <span>{{ flash }}</span>
    </div>
    <!-- BUTTON -->
    <template #dismiss>
      <span class="sr-only">Dismiss</span>
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </template>
  </b-alert>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { BAlert } from 'bootstrap-vue';

const DEFAULT_DISMISS_SEC = 4;

const bgRed50 = 'bg-[#FEF2F2]';
const textRed800 = 'text-[#991B1B]';
const borderRed400 = 'border-[#F87171]';

const VARIANT_OPTION = {
  danger: {
    icon: 'times-circle',
    container: `${bgRed50} ${textRed800} ${borderRed400}`,
    iconClass: `${borderRed400}`,
  },
};

export default {
  components: {
    BAlert,
  },
  props: {
    variant: {
      type: String,
      default: 'danger',
      validator: (value) => Object.keys(VARIANT_OPTION).includes(value),
    },
    autoDismiss: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      dismissCountDown: 0,
    };
  },
  computed: {
    ...mapState('app', ['flash']),
    showFlash() {
      const hasFlash = Boolean(this.flash);

      if (this.autoDismiss) {
        // For auto dismissing alert, "show" prop must return an integer
        // https://bootstrap-vue.org/docs/components/alert
        return (hasFlash && DEFAULT_DISMISS_SEC) || 0;
      }
      return hasFlash;
    },
    variantOption() {
      return VARIANT_OPTION[this.variant];
    },
  },
  watch: {
    $route() {
      this.dismissFlash();
    },
  },
  methods: {
    ...mapActions('app', ['resetFlash']),
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    dismissFlash() {
      this.dismissCountDown = 0;
      this.resetFlash();
    },
  },
};
</script>

<style>
.alert .close {
  @apply order-1 ml-auto font-bold self-start py-4 px-3 md:px-4;
}
</style>
