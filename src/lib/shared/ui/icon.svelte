<script lang="ts">
  import { BoxingIcon, CalendarIcon, SwimmingIcon } from '$lib/shared/icons';

  const icons = {
    boxing: BoxingIcon,
    calendar: CalendarIcon,
    swimming: SwimmingIcon,
  };

  const sizes = {
    regular: 48,
    large: 128,
  };

  export let name: keyof typeof icons;
  export let size: keyof typeof sizes = 'regular';
</script>

<svg viewBox="0 0 48 48" width={sizes[size]} height={sizes[size]}>
  <use href={`${icons[name]}#icon`} />
</svg>
