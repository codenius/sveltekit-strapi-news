<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.data.attributes.title} – Hacker's Corner</title>
</svelte:head>

<div class="flex flex-col items-center">
	<div class="max-w-2xl ">
		<div class="flex gap-x-2 self-start text-base text-gray-700 mb-2 flex-wrap">
			<span
				>By <address class="italic inline">
					{data.data.attributes.author.data?.attributes.name}
				</address>
				at<time class="italic"
					>{new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'short' }).format(
						new Date(data.data.attributes.createdAt)
					)}</time
				></span
			>
			<span>|</span>
			<span
				>Posted in <a
					class="underline text-blue-500"
					href="/catgories/{data.data.attributes.category.data?.attributes.slug}"
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
</div>
