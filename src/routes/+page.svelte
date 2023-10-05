<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  let countType = 'REMOVE';
  let date = new Date().toJSON().slice(0, 10);
</script>

<p>
  Boxing: <b>{data.boxingCount}</b>
</p>

<p>
  Swimming: <b>{data.swimmingCount}</b>
</p>

<form method="post">
  <div>
    <label>
      <input type="radio" name="type" value="BOXING" checked />
      Boxing
    </label>

    <label>
      <input type="radio" name="type" value="SWIMMING" />
      Swimming
    </label>
  </div>

  <div>
    <label>
      <input type="radio" name="countType" value="ADD" bind:group={countType} />
      Add
    </label>

    <label>
      <input type="radio" name="countType" value="REMOVE" bind:group={countType} />
      Remove
    </label>
  </div>

  {#if countType === 'ADD'}
    <label>
      <input type="radio" name="count" value="4" checked />
      4
    </label>
    <label>
      <input type="radio" name="count" value="8" />
      8
    </label>
    <label>
      <input type="radio" name="count" value="12" />
      12
    </label>
  {:else}
    <input type="hidden" name="count" value="-1" />
  {/if}

  <div>
    <label>
      Date
      <input type="date" name="date" value={date} />
    </label>

    <div>
      <button>Save</button>
    </div>
  </div>
</form>

<ul>
  {#each data.logs as log}
    <li class:red={log.count < 0} class:green={log.count > 0}>
      {log.date.toLocaleDateString()}, {log.type}, {log.count}
    </li>
  {/each}
</ul>

<style>
  .red {
    color: red;
  }
  .green {
    color: green;
  }
</style>
