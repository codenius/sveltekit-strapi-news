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

<svelte:head>
	<title>Hacker's Corner</title>
</svelte:head>

<div class="flex flex-col h-screen">
	<header class="sticky top-0 z-50 shadow-md">
		<Navbar let:hidden let:toggle>
			<NavBrand href="/" class="gap-1">
				<img src="/favicon.svg" class="h-5 sm:h-7 dark:invert" />
				<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Hacker's Corner
				</span>
			</NavBrand>
			<div class="flex md:order-2">
				<DarkMode
					class="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 shadow-lg dark:shadow-gray-800"
				/>
				<NavHamburger on:click={toggle} />
			</div>
			<NavUl {hidden}>
				<NavLink href="/">Home</NavLink>
				<NavLink href="/categories">Categories</NavLink>
				<NavLink href="/archive">Archive</NavLink>
				<NavLink href="/donate">Donate</NavLink>
				<NavLink href="/about">About</NavLink>
			</NavUl>
		</Navbar>
	</header>

	<main class="p-3 sm:px-10 max-w-screen-xl m-auto flex-grow w-full">
		<slot />
	</main>

	<Footer class="border-t-2 dark:border-gray-700 rounded-b-none">
		<FooterCopyright href="/" by="Hacker's Corner" year={2023} />
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
		>
			<FooterLink href="/about">About</FooterLink>
			<FooterLink href="/admin" target="_blank">Admin</FooterLink>
		</FooterLinkGroup>
	</Footer>
</div>

<style global lang="postcss">
	body {
		@apply bg-white text-black dark:bg-gray-800 dark:text-white transition-colors ease-out;
	}
</style>
