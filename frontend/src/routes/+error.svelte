<script>
	import { page } from '$app/stores';
	import WakingUpBackend from '$lib/WakingUpBackend.svelte';
</script>

{#if $page.status == 408}
	<WakingUpBackend />
{:else}
	<h1>{$page.status}: {$page.error?.message}</h1>
{/if}
