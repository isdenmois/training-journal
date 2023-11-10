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
    font-size: 32px;
  }

  .label {
    font-size: 14px;
    color: var(--color-secondary-text);
  }
</style>
