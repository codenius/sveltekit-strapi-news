<script lang="ts">
	import '../app.postcss';
	import '$lib/ck-content-styles.css';
	import {
		Navbar,
		NavBrand,
		NavUl,
		NavHamburger,
		Footer,
		FooterCopyright,
		FooterLink,
		FooterLinkGroup,
		DarkMode
	} from 'flowbite-svelte';
	import NavLink from './NavLink.svelte';
	import { Home } from 'svelte-heros-v2';
</script>

<div class="flex flex-col h-screen">
	<header class="sticky top-0 z-50 shadow-md">
		<Navbar let:hidden let:toggle>
			<NavBrand href="/" class="gap-1">
				<Home class="h-6 sm:h-9" />
				<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Flowbite
				</span>
			</NavBrand>
			<div class="flex md:order-2">
				<DarkMode class="bg-gray-100 dark:bg-gray-800 shadow-xl dark:shadow-gray-800" />
				<NavHamburger on:click={toggle} />
			</div>
			<NavUl {hidden}>
				<NavLink href="/">Home</NavLink>
				<NavLink href="/categories">Categories</NavLink>
				<NavLink href="/archive">Archive</NavLink>
				<NavLink href="/about">About</NavLink>
			</NavUl>
		</Navbar>
	</header>

	<main class="p-3 sm:px-10 max-w-screen-xl m-auto flex-grow">
		<slot />
	</main>

	<Footer class="border-t-2 dark:border-gray-700 rounded-b-none">
		<FooterCopyright href="/" by="Flowbite™" year={2022} />
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
		>
			<FooterLink href="/">About</FooterLink>
			<FooterLink href="/">Privacy Policy</FooterLink>
			<FooterLink href="/">Licensing</FooterLink>
			<FooterLink href="/">Contact</FooterLink>
		</FooterLinkGroup>
	</Footer>
</div>

<style global lang="postcss">
	body {
		@apply bg-white text-black dark:bg-gray-800 dark:text-white transition-colors ease-out;
	}
</style>
