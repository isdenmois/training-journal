<script lang="ts">
  import { t } from '$lib/shared/i18n';
  import { Counter } from '$lib/shared/ui';

  export let boxingCount: number;
  export let swimmingCount: number;

  $: countItems = [
    {
      value: boxingCount,
      label: $t('home.boxing'),
    },
    {
      value: swimmingCount,
      label: $t('home.swimming'),
    },
  ];
</script>

<Counter items={countItems} />
