<template>
  <div>
    <side-list
      text="Favorite Things"
      color="orchid"
      :list="$options.FAVORITES"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import { ROUTE_DATA } from '~/lib';

const {
  uses,
  techstack,
  'favorite-slug-courses': favcourses,
  'favorite-slug-podcasts': favpodcasts,
} = ROUTE_DATA;

const FAVORITES = [uses, techstack, favcourses, favpodcasts];

export default {
  FAVORITES,
};
</script>
