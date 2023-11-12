<script lang="ts" context="module">
  export interface CounterItem {
    value: number;
    label: string;
  }
</script>

<script lang="ts">
  export let items: CounterItem[];
</script>

<ul>
  {#each items as item}
    <li>
      <div class="value">
        {item.value}
      </div>
      <div class="label">
        {item.label}
      </div>
    </li>
  {/each}
</ul>

<style>
  ul {
    background-color: var(--color-background);
    list-style: none;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  li {
    text-align: center;
  }

  .value {
    font-size: 48px;
    font-weight: 600;
    color: var(--color-primary-text);
  }

  .label {
    font-size: 16px;
    font-weight: 400;
    color: var(--color-secondary-text);
  }
</style>
