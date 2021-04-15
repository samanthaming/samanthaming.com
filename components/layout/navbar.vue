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
  { to: 'basics', text: 'Basics' },
];

export default {
  ROUTES,
};
</script>
