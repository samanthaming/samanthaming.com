<template>
  <div class="relative" :class="[colorOption.border, borderTop]">
    <div
      v-if="!border && divider"
      aria-hidden="true"
      class="inset-0 flex items-center"
      :class="{ absolute: text }"
    >
      <div class="w-full border-t-8" :class="colorOption.border"></div>
    </div>
    <div v-if="text" class="relative flex" :class="directionOption.parent">
      <app-tag
        :tag="hasTo ? 'app-link' : 'h2'"
        :to="path"
        :class="textClasses"
        class="font-black italic font-head uppercase"
      >
        <span>{{ text }}</span>
        <!-- <span
          v-if="hasTo"
          class="text-sm xs:text-base md:text-lg lg:text-xl pl-2"
        >
          <fa icon="caret-right" class="" />
        </span> -->
      </app-tag>
    </div>
    <p
      v-if="description"
      class="text-gray-darker text-sm font-head font-medium"
    >
      {{ description }}
    </p>
  </div>
</template>

<script>
import { ROUTE_DATA } from '~/lib';

const COLOR_OPTION = {
  orange: {
    border: 'border-orange-dark',
    text: 'text-orange-dark',
  },
  green: {
    border: 'border-green',
    text: 'text-green',
  },
  blue: {
    border: 'border-blue',
    text: 'text-blue',
  },
  orchid: {
    border: 'border-orchid',
    text: 'text-orchid',
  },
  purple: {
    border: 'border-purple-dark',
    text: 'text-purple-dark',
  },
};

const DIRECTION_OPTION = {
  center: {
    parent: 'justify-center',
    text: 'pr-3.5 pl-3',
  },
  left: {
    parent: 'justify-start',
    text: 'pr-3.5',
  },
  right: {
    parent: 'justify-end',
    text: 'pl-3',
  },
};

export default {
  props: {
    text: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: undefined,
    },
    color: {
      type: String,
      default: 'orange',
      validator: (value) => Object.keys(COLOR_OPTION).includes(value),
    },
    direction: {
      type: String,
      default: 'center',
      validator: (value) => Object.keys(DIRECTION_OPTION).includes(value),
    },
    textClass: {
      type: String,
      default: null,
    },
    divider: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    colorOption() {
      return COLOR_OPTION[this.color];
    },
    directionOption() {
      return DIRECTION_OPTION[this.direction];
    },
    borderTop() {
      return this.border ? 'border-t-8 pt-1 mb-4' : '';
    },
    hasTo() {
      return Boolean(this.to) && this.$route.name !== this.to;
    },
    path() {
      const to = ROUTE_DATA[this.to];

      if (!this.to || !to) {
        return '/';
      }

      return to.path;
    },
    textClasses() {
      const classes = [this.colorOption.text, this.directionOption.text];

      if (this.textClass) {
        classes.push(this.textClass);
      }

      if (this.divider) {
        classes.push('bg-white');
      }

      if (this.hasTo) {
        //  flex items-center border-dotted border-b
        classes.push('hover:underline');
      }

      return classes;
    },
  },
};
</script>
