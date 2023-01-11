<script lang="ts">
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

<h2>Waking up backend...</h2>
<p>Come back in a minute.</p>

<button
	disabled={countdown <= 0}
	on:click={() => {
		countdown = 0;
	}}>Reload ({countdown > 0 ? countdown : 'reloading...'})</button
>
