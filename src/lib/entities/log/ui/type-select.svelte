<script lang="ts">
  import { Icon } from '$lib/shared/ui';
  import { onMount } from 'svelte';

  export let initialValue: 'BOXING' | 'SWIMMING' = 'BOXING';

  let listRoot: HTMLDivElement;

  onMount(() => {
    const initialItem = listRoot.querySelector(`input[value="${initialValue}"]`) as HTMLInputElement;

    if (initialItem) {
      initialItem.checked = true;
    }
  });
</script>

<div class="type-select" bind:this={listRoot}>
  <label>
    <input type="radio" name="type" value="BOXING" checked />
    <Icon name="boxing" size="large" />
  </label>

  <label>
    <input type="radio" name="type" value="SWIMMING" />
    <Icon name="swimming" size="large" />
  </label>
</div>

<style>
  .type-select {
    display: flex;
    justify-content: space-around;
  }
</style>
