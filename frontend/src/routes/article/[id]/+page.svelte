<script lang="ts">
	import type { PageData } from './$types';
	import { Hr } from 'flowbite-svelte';

	export let data: PageData & { data: any };
</script>

<svelte:head>
	<title>{data.data.attributes.title} – Hacker's Corner</title>
</svelte:head>

<div class="flex flex-col items-center">
	<div class="max-w-2xl ">
		<div class="flex gap-x-2 self-start text-base text-gray-700 dark:text-gray-300 mb-2 flex-wrap">
			<span
				><span>By </span>
				<address class="italic inline">
					{data.data.attributes.author.data?.attributes.name || 'Anonym'}
				</address>
				<span>on </span><time class="italic"
					>{new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'short' }).format(
						new Date(data.data.attributes.createdAt)
					)}</time
				></span
			>
			<span class:hidden={!data.data.attributes.category.data?.attributes.slug}>|</span>
			<span class:hidden={!data.data.attributes.category.data?.attributes.slug}
				>Posted in <a
					class="underline text-blue-500 hover:text-blue-700"
					href="/categories/{data.data.attributes.category.data?.attributes.slug}"
					><span style="color: {data.data.attributes.category.data?.attributes.color};"
						>&#9679;</span
					>{data.data.attributes.category.data?.attributes.name}</a
				></span
			>
		</div>
		<h1 class="self-start text-4xl md:text-6xl pb-5 font-black font-serif tracking-wide">
			{data.data.attributes.title}
		</h1>
		<img
			class="pb-5 max-h-[50vh] max-w-full object-scale-down"
			height={data.data.attributes.image.data?.attributes.height}
			width={data.data.attributes.image.data?.attributes.width}
			loading="lazy"
			src={data.data.attributes.image.data?.attributes.url}
			alt=""
		/>
	</div>

	<div class="max-w-2xl italic mb-4">{data.data.attributes.summary || ''}</div>
	<article class="prose dark:prose-invert max-w-2xl ck-content">
		{@html data.data.attributes.content}
	</article>

	<Hr class="m-5" />

	<div class="w-full max-w-2xl">
		<h2 class="text-2xl font-extralight">Sources:</h2>
		<div class="inline break-all sm:break-normal sm:break-words">
			{#each data.data.attributes.sources || [] as source, index}
				{index != 0 ? ', ' : ''}
				<a
					class="underline hover:decoration-2 hover:[filter:drop-shadow(0_0_.7rem_currentColor)] transition-[filter] duration-200 text-blue-500 hover:text-blue-700"
					href={source}
					target="_blank"
					rel="noopener noreferrer">{source}</a
				>
			{:else}
				<span class="text-gray-600 dark:text-gray-400">No sources provided.</span>
			{/each}
		</div>
	</div>
</div>
