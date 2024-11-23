<script lang="ts">
 import GridPattern from '$lib/components/magic-ui/GridPattern.svelte';
 import { cn } from '$lib/utils';
</script>

<GridPattern
  width={20}
  height={20}
  x={-1}
  y={-1}
  class={cn(
    "fixed inset-0 z-[-1] [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
  )}
/>

<div class="relative h-screen grid grid-rows-[auto_1fr_auto] max-w-3xl sm:max-w-full m-auto border border-[hsl(var(--border))] rounded-[var(--radius)] bg-[hsl(var(--card))] text-[hsl(var(--foreground))]">
  <slot name="header"></slot>
  <slot name="main"></slot>
  <slot name="footer"></slot>
</div>