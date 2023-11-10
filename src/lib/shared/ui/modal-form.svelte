<script lang="ts">
  import { enhance } from '$app/forms';
  import Header from './header.svelte';
  import Modal from './modal.svelte';

  export let title: string;
  export let action: string;
  export let type: 'default' | 'success' | 'error' | 'edit';
</script>

<Modal on:close>
  <Header {title} {type} />

  <form method="post" class={type} {action} use:enhance>
    <slot />
  </form>
</Modal>

<style>
  form {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
  }

  form.success {
    --color-checked: var(--color-success);
  }

  form.error {
    --color-checked: var(--color-error);
  }

  form.edit {
    --color-checked: var(--color-edit);
  }
</style>
