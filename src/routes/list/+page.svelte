<script lang="ts">
  import { EditLogModal, LogList } from '$lib/entities/log';
  import type { Log } from '$lib/server/schema/logs';
  import { t } from '$lib/shared/i18n';
  import { Header } from '$lib/shared/ui';
  import type { PageData } from './$types';

  export let data: PageData;

  let editLog: Log | null = null;
</script>

<Header title={$t('list.all')} type="edit" />

<main>
  <LogList logs={data.logs} on:edit={({ detail }) => (editLog = detail)} />
</main>

{#if editLog}
  <EditLogModal log={editLog} on:close={() => (editLog = null)} />
{/if}

<style>
  main {
    padding: 1rem;
  }
</style>
