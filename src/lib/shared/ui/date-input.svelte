<script lang="ts">
  import { locale } from '../i18n';
  import Icon from './icon.svelte';

  export let name: string;
  export let value: Date;

  $: dateString = value.toJSON().slice(0, 10);

  let dateInput: HTMLInputElement;

  const openCalendar = () => dateInput.showPicker();

  const onChange = () => {
    value = dateInput.valueAsDate ?? value;
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="input" on:click={openCalendar}>
  <input type="date" {name} bind:this={dateInput} value={dateString} on:change={onChange} />

  <div class="icon">
    <Icon name="calendar" />
  </div>

  <div class="label">
    {value.toLocaleDateString($locale, { dateStyle: 'long' })}
  </div>
</div>

<style>
  .input {
    display: flex;
    align-items: center;
    border: var(--border);
    border-radius: 8px;
    cursor: pointer;
    gap: 1rem;
    padding: 0.25rem 0.5rem;
  }
  .input:hover {
    opacity: 0.75;
  }
  .input:active {
    opacity: 0.5;
  }
  input {
    display: none;
  }

  .icon {
    color: var(--color-secondary-text);
  }

  .label {
    color: var(--color-primary-text);
    font-size: 20px;
    font-weight: bold;
  }
</style>
