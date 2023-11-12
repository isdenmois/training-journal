<script lang="ts">
  export let title: string;
  export let type: 'default' | 'success' | 'error' | 'edit' = 'default';
</script>

<div class="header">
  <header class={type}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h1 on:click>{title}</h1>

    <slot />
  </header>
</div>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 1;
    overflow: hidden;
  }
  header {
    color: var(--color-background);
    position: relative;
    text-align: center;
    padding: 2rem;
    font-size: 24px;
    font-weight: 600;
  }

  header::before {
    content: '';
    display: block;
    position: absolute;
    inset: -10px -10% 0 -10%;
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%;
    z-index: -1;
  }

  .default::before {
    background-color: var(--color-header);
  }

  .success::before {
    background-color: var(--color-success);
  }

  .error::before {
    background-color: var(--color-error);
  }

  .edit::before {
    background-color: var(--color-edit);
  }
</style>
