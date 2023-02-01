<script lang="ts">
	import type { PageData } from './$types';
	import { Card } from 'flowbite-svelte';
	export let data: PageData & {data: Array<any>};
</script>

<ul class="flex flex-wrap gap-4">
	{#each data.data as article}
		<li>
			<Card horizontal class="gap-4" size="xs" href="article/{article.id}">
				<img
					class="h-20 object-scale-down rounded"
					src={article.attributes.image.data.attributes.url}
					alt=""
				/>
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{article.attributes.title}
				</h5>
			</Card>
		</li>
	{/each}
</ul>
