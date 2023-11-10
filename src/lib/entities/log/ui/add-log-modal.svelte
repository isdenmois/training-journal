<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { t } from '$lib/shared/i18n';
  import { ModalForm, DateInput, Radio } from '$lib/shared/ui';
  import TypeSelect from './type-select.svelte';

  let date = new Date();

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');

  const countItems = [
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
</script>

<ModalForm type="success" title={$t('log.add-header')} on:close={close} action="?/create">
  <Radio name="count" items={countItems} initialValue={4} />

  <div class="mt-8">
    <DateInput name="date" bind:value={date} />
  </div>

  <div class="mt-4">
    <TypeSelect />
  </div>

  <button class="mt-4 success" on:click={close}>{$t('log.add')}</button>
</ModalForm>
