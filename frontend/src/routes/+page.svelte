<script lang="ts">
	import type { PageData } from './$types';
	import { Card } from 'flowbite-svelte';
	import Tile from './Tile.svelte';
	export let data: PageData;


	/**
	 * Zips any number of arrays. It will always zip() the shortest array, omitting overhanging values of longer arrays.
	 * @param  {...Array<any>} arrays 
	 */
	function* zip(...arrays: Array<any>){
	const maxLength = arrays.reduce((min, curIterable) => curIterable.length < min ? curIterable.length: min, Infinity);
	for (let i = 0; i < maxLength; i++) {
		yield arrays.map(array => array[i]);
	}
	}

	
	const tiles = ['col-start-1 col-span-4 row-span-2','col-start-5 col-span-3 row-span-3',
	'col-start-8 col-span-3','col-span-3 row-span-2',
	'row-start-3 col-span-3 row-span-3','row-start-4 col-span-5',
	'col-start-4 row-start-3','',
	'col-span-3','',
	'row-start-4 col-span-2 row-span-2']

	console.dir(JSON.stringify([...zip(tiles, data.data)]))

	const topNews = [...zip(tiles, data.data)]
</script>

<div class="border rounded text-gray-900 dark:text-gray-200 h-[80vh] grid grid-cols-10 grid-rows-5 gap-5 p-5 mb-5">
	{#each topNews as [classes, article]}
		<Tile class={classes}>{article.attributes.title}</Tile>
	{/each}
</div>


<div class="border rounded text-gray-900 dark:text-gray-200 h-[80vh] grid grid-cols-10 grid-rows-5 gap-5 p-5 mb-5">
	<Tile class="col-start-1 col-span-4 row-span-2">Housing Situation in Germany</Tile>
	<Tile class="col-start-5 col-span-3 row-span-3">2</Tile>
	<Tile class="col-start-8 col-span-3">3</Tile>
	<Tile class="col-span-3 row-span-2">4</Tile>
	<Tile class="row-start-3 col-span-3 row-span-3">5</Tile>
	<Tile class="row-start-4 col-span-5">6</Tile>
	<Tile class="col-start-4 row-start-3">7</Tile>
	<Tile class="">8</Tile>
	<Tile class="col-span-3">9</Tile>
	<Tile class="">10</Tile>
	<Tile class="row-start-4 col-span-2 row-span-2">11</Tile>
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
