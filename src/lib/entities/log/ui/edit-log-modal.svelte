<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { t } from '$lib/shared/i18n';
  import { ModalForm, DateInput, Radio } from '$lib/shared/ui';
  import { postAction } from '$lib/shared/lib/post-action';
  import type { Log } from '$lib/server/schema/logs';
  import TypeSelect from './type-select.svelte';

  export let log: Log;

  let date = log.date;
  let type = log.type as 'BOXING' | 'SWIMMING';

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');

  const countItems = [
    {
      value: -1,
      label: '-1',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 8,
      label: '8',
    },
    {
      value: 12,
      label: '12',
    },
  ];

  const removeLog = async () => {
    if (confirm('Are you sure you want to remove this log?')) {
      const body = new FormData();
      body.set('id', String(log.id));

      postAction('remove', body);
      close();
    }
  };
</script>

<ModalForm type="edit" title={$t('log.edit-header')} on:close={close} action="?/edit">
  <input type="hidden" name="id" value={log.id} />

  <Radio name="count" items={countItems} initialValue={log.count} />

  <div class="mt-8">
    <DateInput name="date" bind:value={date} />
  </div>

  <div class="mt-4">
    <TypeSelect initialValue={type} />
  </div>

  <div class="mt-4 footer">
    <button class="flex-1 error" on:click|preventDefault={removeLog}>{$t('log.remove')}</button>
    <button class="flex-1 edit" on:click={close}>{$t('log.save')}</button>
  </div>
</ModalForm>

<style>
  .footer {
    display: flex;
    gap: 1rem;
  }
</style>
