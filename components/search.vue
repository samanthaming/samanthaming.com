<template>
  <div>
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
import { BModal, BButton, VBModal } from 'bootstrap-vue';

export default {
  components: {
    BModal,
    BButton,
  },
  directives: {
    'b-modal': VBModal,
  },
};
</script>
