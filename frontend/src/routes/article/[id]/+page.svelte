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
<article class="ARTICLE max-w-5xl">{@html data.data.attributes.content}</article>

<style global lang="postcss">
	.ARTICLE {
		h1 {
			@apply text-6xl;
		}

		h2 {
			@apply text-5xl pb-3;
		}

		h3 {
			@apply text-4xl;
		}

		h4 {
			@apply text-3xl;
		}

		h5 {
			@apply text-2xl;
		}

		h6 {
			@apply text-xl;
		}

		p {
			@apply text-lg pb-4;
		}
	}
</style>
