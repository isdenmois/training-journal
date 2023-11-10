<script lang="ts">
  import type { Log } from '$lib/server/schema/logs';
  import { locale } from '$lib/shared/i18n';
  import { Icon, ListItem } from '$lib/shared/ui';
  export let log: Log;
</script>

<ListItem label={log.date.toLocaleDateString($locale, { dateStyle: 'long' })} on:click>
  <div class="left" slot="left" class:addition={log.count > 0} class:subtraction={log.count < 0}>
    <Icon name={log.type === 'BOXING' ? 'boxing' : 'swimming'} />
  </div>

  <div class="count" slot="right">
    {#if log.count > 0}
      +{log.count}
    {/if}
  </div>
</ListItem>

<style>
  .count {
    color: var(--color-success);
    font-size: 20px;
  }

  .left {
    display: flex;
    gap: 0.25rem;
  }

  .left::before {
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 0.25rem;
    display: block;
    position: absolute;
  }

  .addition {
    color: var(--color-success);
  }

  .addition::before {
    background-color: var(--color-success);
  }

  .subtraction {
    color: var(--color-error);
  }

  .subtraction::before {
    background-color: var(--color-error);
  }
</style>
