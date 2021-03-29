<template>
  <div>
    <nav-side :routes="$options.ROUTES" />
    <nav-top :routes="$options.ROUTES" />
  </div>
</template>

<script>
// :to="{ name: 'tidbits', query: { page: 2 } }"
const ROUTES = [
  { to: 'tidbits', text: 'Tidbits' },
  { to: 'blog', text: 'Blog' },
  { to: 'courses', text: 'Courses' },
  // { to: 'contact', text: 'Contact' },
  { to: 'flexbox30', text: 'Flexbox30' },
];

export default {
  ROUTES,
};
</script>
