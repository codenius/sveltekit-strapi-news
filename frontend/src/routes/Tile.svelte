<script lang="ts">
	let classes: string = '';
	export { classes as class };
	export let article;
</script>

<div
	class="flex flex-col gap-2 rounded p-3 bg-gray-300 bg-gradient-to-tr from-gray-400 to-gray-300 dark:to-gray-600 {classes}"
>
	<div class="flex-shrink rounded overflow-hidden w-full h-full">
		<img
			class="object-scale-down h-full rounded"
			src={article?.attributes.image.data.attributes.url}
			alt=""
		/>
	</div>
	<h3 class="text-2xl text-white font-bold"><slot /></h3>
</div>
