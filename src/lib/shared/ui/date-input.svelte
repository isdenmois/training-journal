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

  <Icon name="calendar" />

  <div class="label">
    {value.toLocaleDateString($locale, { dateStyle: 'long' })}
  </div>
</div>

<style>
  .input {
    display: flex;
    align-items: center;
    border: 1px solid var(--color-secondary-text);
    border-radius: 8px;
    cursor: pointer;
    gap: 1rem;
    padding: 0.5rem;
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

  .label {
    font-size: 20px;
  }
</style>
