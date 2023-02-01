<script>
	import {
		LightBulb,
		Bolt,
		Clock,
		Moon,
		CurrencyDollar,
		DocumentMagnifyingGlass
	} from 'svelte-heros-v2';
	Moon;
	const features = [
		{
			title: 'Up to date',
			description: 'Be the first that knows what is going on!',
			icon: Clock
		},
		{
			title: 'Best informed',
			description: `Don't miss any detail about your favorite topic. We will tell you everything you ever wanted to know!`,
			icon: LightBulb
		},
		{
			title: 'Free',
			description:
				'Enjoy high quality journalism for free. Want to support us? <a class="underline text-blue-500 hover:text-blue-700" href="/donate">Donate something</a>.',
			icon: CurrencyDollar
		},

		{
			title: 'Fast',
			description: 'Never wait for your news again. Our site is blazingly fast!',
			icon: Bolt
		},
		{
			title: 'Dark mode',
			description: 'Any night owls here? Enjoy dark mode when reading at night.',
			icon: Moon
		},
		{
			title: 'Sources provided',
			description:
				'Want to investigate yourself? We play with open cards. Check out the sources below an article!',
			icon: DocumentMagnifyingGlass
		}
	];
</script>

<section class="bg-white dark:bg-gray-900 rounded-xl">
	<div class="py-4 px-4 mx-auto max-w-screen-xl sm:px-6">
		<div class="max-w-screen-md mb-8 lg:mb-16">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Hacker's Corner: Your favorite news provider for technologie topics.
			</h2>
			<p class="text-gray-500 sm:text-xl dark:text-gray-400">
				If your are interested in technologie, you have come to the right place. <i
					>Hacker's Corner</i
				>
				is a news portal for everyone who wants to learn more about the latest technologie in a simple
				and understandable way. Welcome to <i>Hacker's Corner!</i>
			</p>
		</div>
		<div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
			{#each features as feature}
				<div>
					<div
						class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-200 lg:h-12 lg:w-12 dark:bg-blue-900"
					>
						<svelte:component
							this={feature.icon}
							class="text-blue-600 dark:text-blue-300"
							variation="solid"
						/>
					</div>
					<h3 class="mb-2 text-xl font-bold dark:text-white">{feature.title}</h3>
					<p class="text-gray-500 dark:text-gray-400">{@html feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
