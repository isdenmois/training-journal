<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fly, fade } from 'svelte/transition';

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');
</script>

<div class="modal">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="backdrop" transition:fade={{ duration: 300 }} on:click={close} />

  <div class="content" transition:fly={{ y: 100, duration: 300 }}>
    <slot />
  </div>
</div>

<style>
  .modal {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
    z-index: 101;
  }

  .backdrop {
    position: absolute;
    inset: 0;
    background-color: #000a;
    z-index: -1;
  }

  .content {
    background-color: var(--color-background);
  }
</style>
