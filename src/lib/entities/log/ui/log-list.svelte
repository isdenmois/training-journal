<script lang="ts">
  import type { Log } from '$lib/server/schema/logs';
  import { createEventDispatcher } from 'svelte';
  import LogItem from './log-item.svelte';

  export let logs: Log[];

  const dispatch = createEventDispatcher();
  const edit = (log: Log) => dispatch('edit', log);
</script>

<ul>
  {#each logs as log}
    <LogItem {log} on:click={() => edit(log)} />
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0;
  }
</style>
