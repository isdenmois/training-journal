<script lang="ts" context="module">
  import { onMount } from 'svelte';

  export interface RadioItem<T = unknown> {
    value: T;
    label: string;
  }
</script>

<script lang="ts">
  export let name: string;
  export let items: RadioItem[];
  export let initialValue: unknown = items[0]?.value;

  let listRoot: HTMLUListElement;

  onMount(() => {
    const initialItem = listRoot.querySelector(`input[value="${initialValue}"]`) as HTMLInputElement;

    if (initialItem) {
      initialItem.checked = true;
    }
  });
</script>

<ul bind:this={listRoot}>
  {#each items as item}
    <li>
      <label>
        <input type="radio" {name} value={item.value} />
        {item.label}
      </label>
    </li>
  {/each}
</ul>

<style>
  ul {
    border: var(--border);
    border-radius: 8px;
    display: flex;
    overflow: hidden;
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    flex: 1;
  }

  label {
    flex: 1;
    padding: 0.5rem;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }

  li + li {
    border-left: var(--border);
  }

  label:has(:checked) {
    background-color: var(--color-checked);
    color: var(--color-background);
  }
</style>
