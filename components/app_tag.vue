<script>
// Reference: https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/assets/javascripts/jobs/components/log/line_number.vue
export default {
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  render(createElement, { props, data, slots }) {
    return createElement(
      props.tag, // tag name
      data, // passdown any attributes or event listeners
      slots().default,
    );
  },
};
</script>
