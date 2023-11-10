<script lang="ts">
  import { t } from '$lib/shared/i18n';
  import { Header } from '$lib/shared/ui';
  import { AddLogModal, EditLogModal, LogCounter, LogList, SubLogModal } from '$lib/entities/log';
  import type { Log } from '$lib/server/schema/logs';
  import type { PageData } from './$types';
  import { postAction } from '$lib/shared/lib/post-action';

  export let data: PageData;

  let isAddVisible = false;
  let isSubVisible = false;
  let editLog: Log | null = null;

  const toggleLocale = async () => {
    const result = await postAction('locale', new FormData());

    console.log({ result });
  };
</script>

<Header title={$t('home.trainings')} on:click={toggleLocale} />

<main>
  <LogCounter boxingCount={data.boxingCount} swimmingCount={data.swimmingCount} />

  <div class="mt-8">
    <LogList logs={data.logs} on:edit={({ detail }) => (editLog = detail)} />
  </div>

  {#if data.logs.length >= 10}
    <a class="mt-2" href="/list">{$t('log.all')}</a>
  {/if}
</main>

<footer>
  <button class="flex-1 success" on:click={() => (isAddVisible = true)}>{$t('log.add')}</button>
  <button class="flex-1 error" on:click={() => (isSubVisible = true)}>{$t('log.sub')}</button>
</footer>

{#if isAddVisible}
  <AddLogModal on:close={() => (isAddVisible = false)} />
{/if}

{#if isSubVisible}
  <SubLogModal on:close={() => (isSubVisible = false)} />
{/if}

{#if editLog}
  <EditLogModal log={editLog} on:close={() => (editLog = null)} />
{/if}

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  a {
    padding: 1rem 0;
    font-size: 20px;
    color: var(--color-secondary-text);
    text-align: center;
  }

  footer {
    display: flex;
    gap: 1rem;
    position: sticky;
    bottom: 0;
    background-color: var(--color-background);
    padding: 0.5rem 1rem 2rem 1rem;
  }
</style>
