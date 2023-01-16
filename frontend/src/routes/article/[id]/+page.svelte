<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl md:text-6xl pb-5 text-center font-black font-serif tracking-wide">{data.data.attributes.title}</h1>
	<img
		class="pb-5 max-h-[50vh] max-w-full object-scale-down"
		src={data.data.attributes.image.data.attributes.url}
		alt=""
	/>
	<article class="prose dark:prose-invert">{@html data.data.attributes.content}</article>
</div>
