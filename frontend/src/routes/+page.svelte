<script lang="ts">
	import type { PageData } from './$types';
	import { Card } from 'flowbite-svelte';
	export let data: PageData;
</script>

<div class="border rounded text-gray-900 dark:text-gray-200 font-mono h-[80vh] grid grid-cols-10 grid-rows-5 gap-5 p-5 mb-5">
	<div class="rounded bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-300 dark:to-gray-600 col-start-1 col-span-4 row-span-2">1</div>
	<div class="rounded bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-300 dark:to-gray-600 col-start-5 col-span-3 row-span-3">2</div>
	<div class="rounded bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-300 dark:to-gray-600 col-start-8 col-span-3">3</div>
	<div class="rounded bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-300 dark:to-gray-600 col-span-3 row-span-2">4</div>
	<div class="rounded bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-300 dark:to-gray-600 row-start-3 col-span-3 row-span-3">5</div>
	<div class="rounded bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-300 dark:to-gray-600 row-start-4 col-span-5">6</div>
	<div class="rounded bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-300 dark:to-gray-600 col-start-4 row-start-3">7</div>
	<div class="rounded bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-300 dark:to-gray-600">8</div>
	<div class="rounded bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-300 dark:to-gray-600 col-span-3">9</div>
	<div class="rounded bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-300 dark:to-gray-600">10</div>
	<div class="rounded bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-300 dark:to-gray-600 row-start-4 col-span-2 row-span-2">11</div>
</div>

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
