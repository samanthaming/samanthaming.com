<script>
export default {
  functional: true,
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  render(createElement, { props, data, slots }) {
    return createElement(
      'h' + props.level, // tag name
      data, // passdown any attributes or event listeners
      slots().default, // array of children
    );
  },
};
</script>
