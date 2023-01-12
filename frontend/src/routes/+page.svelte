<script lang="ts">
	import type { PageData } from './$types';
	import { Card } from 'flowbite-svelte';
	export let data: PageData;
</script>

<ul class="flex flex-wrap max-w-screen-xl m-auto gap-4">
	{#each data.data as article}
		<li>
			<Card img={article.attributes.image.data.attributes.url} href="article/{article.id}">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.attributes.title}</h5>	
			</Card>
		</li>
	{/each}
</ul>
