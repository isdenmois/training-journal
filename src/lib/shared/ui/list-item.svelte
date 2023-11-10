<script lang="ts" context="module"></script>

<script lang="ts">
  export let label: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li on:click>
  <slot name="left" />

  <div class="label">
    {label}
  </div>
  <slot name="right" />
</li>

<style>
  li {
    display: flex;
    gap: 12px;
    align-items: center;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
    padding: 0.5rem 1rem;
    position: relative;
  }

  .label {
    flex: 1;
    font-weight: bold;
    font-size: 20px;
  }
</style>
