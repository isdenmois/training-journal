<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { t } from '$lib/shared/i18n';
  import { ModalForm, DateInput } from '$lib/shared/ui';
  import TypeSelect from './type-select.svelte';

  let date = new Date();

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');
</script>

<ModalForm type="error" title={$t('log.sub-header')} on:close={close} action="?/create">
  <input type="hidden" name="count" value="-1" />

  <DateInput name="date" bind:value={date} />

  <div class="mt-4">
    <TypeSelect />
  </div>

  <button class="mt-4 error" on:click={close}>{$t('log.sub')}</button>
</ModalForm>
