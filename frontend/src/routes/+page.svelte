<script lang="ts">
	import type { PageData } from './$types';
	import { Timeline, TimelineItem, Button, ButtonGroup } from 'flowbite-svelte';
	import Carousel from 'svelte-carousel';
	import { ArrowRight, ArrowLeft } from 'svelte-heros-v2';
	import { browser } from '$app/environment';

	export let data: PageData & { data: Array<any> };

	export const slides = data.data
		.filter((a: any) => a.attributes.image.data?.attributes.url)
		.sort((a: any, b: any) => {
			return (
				new Date(b.attributes.createdAt).getTime() -
				(new Date(0, 0, 1, 12).getTime() - Date.now()) * (b.attributes.priority || 0) -
				(new Date(a.attributes.createdAt).getTime() -
					(new Date(0, 0, 1, 12).getTime() - Date.now()) * (a.attributes.priority || 0))
			);
		})
		.slice(0, 5)
		.map((article: any, i: any) => {
			return {
				id: i,
				img_url: article.attributes.image.data?.attributes.url,
				name: article.attributes.title,
				article_id: article.id,
				summary: article.attributes.summary,
				article: new Date(article.attributes.createdAt).getTime()
			};
		});
</script>

<svelte:head>
	<title>Home – Hacker's Corner</title>
</svelte:head>

<div class="flex flex-col items-center">
	<div class="h-64 sm:h-96 md:h-[35rem] md:max-h-[60vh] w-full my-5">
		{#if browser}
			<Carousel
				autoplay
				autoplayDuration={10000}
				autoplayProgressVisible
				pauseOnFocus
				let:showPrevPage
				let:showNextPage
			>
				<ArrowLeft
					slot="prev"
					on:click={showPrevPage}
					class="my-auto mr-1 sm:mx-3 sm:p-2 sm:border-2 box-content rounded-full block sm:hover:scale-125 sm:hover:-translate-x-3 transition-all hover:text-gray-500"
				/>
				{#each slides as slide}
					<a
						class="relative flex justify-center items-center w-full"
						href="/article/{slide.article_id}"
					>
						<img
							class="object-cover h-64 sm:h-96 md:h-[35rem] bg-white md:max-h-[60vh] sm:object-contain w-full sm:w-auto"
							src={slide.img_url}
							alt={slide.name}
						/>
						<div
							class="h-full absolute top-0 bottom-0 left-0 sm:right-2/3 2xl:right-3/4 px-4 py-2 bg-gray-800 bg-opacity-70"
						>
							<h2 class="text-xl text-white font-bold">{slide.name}</h2>
							<p class="mt-2 text-sm text-gray-300 mb-7 line-clamp-5">{slide.summary || ''}</p>
							<ButtonGroup
								><Button class="flex gap-1" href="article/{slide.article_id}" color="alternative">
									Continue reading<ArrowRight size="20" />
								</Button></ButtonGroup
							>
						</div>
					</a>
				{/each}
				<ArrowRight
					slot="next"
					on:click={showNextPage}
					class="my-auto ml-1 sm:mx-3 sm:p-2 sm:border-2 box-content rounded-full block sm:hover:scale-125 sm:hover:translate-x-3 transition-all hover:text-gray-500"
				/>
			</Carousel>
		{/if}
	</div>
	<h2 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white m-10">
		Latest news
	</h2>
	<Timeline>
		{#each data.data as article}
			<TimelineItem
				date={new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(
					new Date(article.attributes.createdAt)
				)}
			>
				<a
					href="/article/{article.id}"
					class="overflow-hidden p-3 block duration-200 shadow hover:shadow-xl rounded-lg dark:shadow-gray-900 hover:scale-[1.01] ease-[ease] transition-all"
				>
					<h3 class="text-xl font-bold">{article.attributes.title}</h3>
					<div class="flex flex-wrap">
						<img
							class:hidden={!article.attributes.image.data?.attributes.url}
							class="max-w-full max-h-36 object-scale-down m-3 rounded"
							alt=""
							src={article.attributes.image.data?.attributes.url}
						/>
						<div>
							<p
								class="line-clamp-[10] sm:line-clamp-none max-w-lg mb-4 text-md font-normal text-gray-500 dark:text-gray-400"
							>
								{article.attributes.summary || ''}
							</p>
							<ButtonGroup>
								<Button class="flex gap-1" href="article/{article.id}" color="alternative"
									>Continue reading<ArrowRight size="20" /></Button
								></ButtonGroup
							>
						</div>
					</div>
				</a>
			</TimelineItem>
		{/each}
	</Timeline>
</div>
