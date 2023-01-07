<script lang="ts">
	import type { PageData } from './$types';
	import getUrl from '$lib/getUrl';

	export let data: PageData;
</script>

<h1>Home</h1>
<ul>
	{#each data.data as article}
		<li>
			<a href="article/{article.id}">
				<img
					style="height: 4rem;"
					src={article.attributes.image.data.attributes.url}
					alt=""
				/>
				{article.attributes.title}</a
			>
		</li>
	{/each}
</ul>
