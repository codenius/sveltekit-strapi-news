<script>
	import { Card } from 'flowbite-svelte';
	export let article;
</script>

<Card
	horizontal
	class="gap-4 {!article.attributes.image.data?.attributes.url ? 'gap-0' : ''}"
	size="xs"
	href="/article/{article.id}"
>
	<img
		class="h-20 object-scale-down rounded {!article.attributes.image.data?.attributes.url
			? 'w-0 hidden md:block'
			: ''}"
		src={article.attributes.image.data?.attributes.url}
		alt=""
	/>
	<h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{article.attributes.title}
	</h5>
</Card>
