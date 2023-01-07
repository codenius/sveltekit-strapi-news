<script lang="ts">
	import getUrl from '$lib/getUrl';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>{data.data.attributes.title}</h1>
<img style="max-height: 50vh; max-width: 100%" src="{data.data.attributes.image.data.attributes.url}" alt="">
{@html data.data.attributes.content}
