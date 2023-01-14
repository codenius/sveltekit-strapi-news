<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="pb-10 font-semibold tracking-wide">{data.data.attributes.title}</h1>
<img
	class="m-5"
	style="max-height: 50vh; max-width: 100%"
	src={data.data.attributes.image.data.attributes.url}
	alt=""
/>
<article class="text-base max-w-5xl">{@html data.data.attributes.content}</article>
