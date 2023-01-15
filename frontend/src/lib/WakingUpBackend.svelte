<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	let countdown = 10;
	onMount(() => {
		timer(true);
	});

	function timer(firstTime: boolean) {
		if (!firstTime) {
			countdown -= 1;
		}
		if (countdown > 0) {
			setTimeout(timer, 1000);
		}
	}

	$: countdown <= 0 ? location.reload() : null;
</script>

<div class="h-full flex flex-col justify-center items-center text-center">
	<h1 class="text-4xl mb-1">Waking up backend...</h1>
	<p class="mb-3">Come back in a minute.</p>

	<Button
		disabled={countdown <= 0}
		on:click={() => {
			countdown = 0;
		}}>Reload ({countdown > 0 ? countdown : 'reloading...'})</Button
	>
</div>
