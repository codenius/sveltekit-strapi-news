<script lang="ts">
	import type { PageData } from './$types';
	import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
	import { ArrowRight } from 'svelte-heros-v2';
	export let data: PageData;
</script>

<div class="flex flex-col items-center">
	<h2 class="text-4xl font-bold m-10">Latest news</h2>
	<Timeline>
		{#each data.data as article}
			<TimelineItem
				date={new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(
					new Date(article.attributes.createdAt)
				)}
			>
				<a
					href="article/{article.id}"
					class="overflow-hidden p-3 block duration-200 shadow hover:shadow-xl rounded-lg dark:shadow-gray-900 hover:scale-[1.01] ease-[ease] transition-all"
				>
					<h3 class="text-xl font-bold capitalize">{article.attributes.title}</h3>
					<div class="flex flex-wrap">
						<img
							class="max-w-full max-h-36 object-scale-down m-3 rounded"
							alt=""
							src={article.attributes.image.data.attributes.url}
						/>
						<div>
							<p
								class="line-clamp-[10] sm:line-clamp-none max-w-lg mb-4 text-md font-normal text-gray-500 dark:text-gray-400"
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus adipisci
								aut dolore, odio asperiores. Atque ipsum quo praesentium aliquid, fuga eaque
								eligendi facilis magni nisi deleniti dicta nam. Officia debitis obcaecati ex aliquid
								temporibus quas ipsum delectus tempora vitae quo et placeat, numquam magnam ipsam
								molestias corrupti reprehenderit totam voluptates voluptatum eveniet. Tempora rerum
								dicta velit fugit ullam amet illum consequatur, mollitia aliquam nemo laborum.
								Pariatur doloribus quam dolor accusamus modi facilis similique? Facere veritatis
								rerum nisi, corrupti, quis voluptates, in incidunt ducimus culpa temporibus earum
								placeat. Facere possimus tempora blanditiis explicabo officia inventore dicta odit,
								rerum placeat quisquam!
							</p>
							<Button class="flex gap-1" href="article/{article.id}" color="alternative"
								>Continue reading<ArrowRight size="20" /></Button
							>
						</div>
					</div>
				</a>
			</TimelineItem>
		{/each}
	</Timeline>
</div>
