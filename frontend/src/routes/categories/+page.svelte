<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mb-5">
	Categories
</h1>
<div class="mb-5">All about your favorite topic in one place.</div>

<ul class="flex flex-wrap gap-4">
	<!--  h-full pt-20 bg-[url(https://picsum.photos/id/1018/1000)] bg-contain -->
	{#each data.data as category}
		<li>
			<Card
				horizontal
				class="gap-4 backdrop-blur dark:backdrop-opacity-90"
				style="background-color: {category.attributes.color};"
				size="xs"
				href="categories/{category.attributes.slug}"
			>
				<h5
					class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white drop-shadow-sm [filter:drop-shadow(0_0_.2rem_black)]"
				>
					{category.attributes.name}
				</h5>
			</Card>
		</li>
	{/each}
</ul>
