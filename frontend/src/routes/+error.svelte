<script>
	import { page } from '$app/stores';
	import WakingUpBackend from '$lib/WakingUpBackend.svelte';
</script>

{#if $page.status == 408}
	<WakingUpBackend />
{:else}
	<div class="h-full flex flex-col justify-center items-center text-center">
		<h1 class="text-4xl mb-1">{$page.status}: {$page.error?.message}</h1>
		<p>Go back to <a href="/" class="text-blue-500 hover:underline">Home</a>.</p>
	</div>
{/if}
