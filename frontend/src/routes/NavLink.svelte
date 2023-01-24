<script lang="ts">
	import { page } from '$app/stores';
	import { NavLi } from 'flowbite-svelte';

	export let href: string = '#';
</script>

<NavLi {href} active={$page.url.pathname.split('/')[1] == href.split('/')[1]}>
	<slot />
</NavLi>
