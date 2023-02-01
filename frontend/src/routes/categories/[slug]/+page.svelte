<script lang="ts">
	import NewsCard from '$lib/NewsCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	data = data.data[0];
</script>

<div class="min-w-[50vw]">
	<div
		class="rounded mt-10 sm:m-10 text-white"
		style="background-color: {data.attributes.color}; box-shadow:0 0 1rem 4rem {data.attributes
			.color}"
	>
		<h1 class="text-4xl tracking-tight font-extrabold mb-5 [filter:drop-shadow(0_0_.2rem_black)]">
			{data.attributes.name}
		</h1>
		<div class="mb-5 [filter:drop-shadow(0_0_0.2rem_black)]">
			{data.attributes.description ? data.attributes.description : ''}
		</div>
	</div>
	<ul class="flex flex-wrap gap-4">
		{#each data.attributes.articles.data as article}
			<li>
				<NewsCard {article} />
			</li>
		{:else}
			<div class="w-[50vw] mt-20">No articles found.</div>
		{/each}
	</ul>
</div>
