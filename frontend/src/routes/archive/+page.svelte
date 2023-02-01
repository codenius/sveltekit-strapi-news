<script lang="ts">
	import NewsCard from '$lib/NewsCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData & {data: Array<any>};
</script>

<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white m-10">Archive</h1>
<ul class="flex flex-wrap gap-4">
	{#each data.data as article}
		<li>
			<NewsCard {article} />
		</li>
	{/each}
</ul>
