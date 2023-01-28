<script lang="ts">
	import NewsCard from '$lib/NewsCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<ul class="flex flex-wrap gap-4">
	{#each data.data as article}
		<li>
			<NewsCard {article} />
		</li>
	{/each}
</ul>
