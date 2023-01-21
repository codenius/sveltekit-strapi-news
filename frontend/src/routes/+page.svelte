<script lang="ts">
	import type { PageData } from './$types';
	import { Card } from 'flowbite-svelte';
	import Tile from './Tile.svelte';
	export let data: PageData;

	/**
	 * Zips any number of arrays. It will always return an array with `lenght` and fill up with `null`.
	 * @param  {number} length
	 * @param  {...Array<any>} arrays
	 */
	function* zip(length: number, ...arrays: Array<any>) {
		for (let i = 0; i < length; i++) {
			yield arrays.map((array) => array[i]);
		}
	}

	const tiles = [
		'col-start-1 col-span-4 row-span-2',
		'col-start-5 col-span-3 row-span-3',
		'col-start-8 col-span-3',
		'col-span-3 row-span-2',
		'row-start-3 col-span-3 row-span-3',
		'row-start-4 col-span-5',
		'col-start-4 row-start-3',
		'',
		'col-span-3',
		'',
		'row-start-4 col-span-2 row-span-2'
	];

	const topNews = [...zip(tiles.length, tiles, data.data)];
</script>

<div
	class="border rounded text-gray-900 dark:text-gray-200 h-[80vh] grid grid-cols-10 grid-rows-5 gap-1 p-5 mb-5"
>
	{#each topNews as [classes, article]}
		<Tile {article} class={classes}>{article ? article.attributes.title : ''}</Tile>
	{/each}
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
