<script>
	//TODO.. no more arrow just click and it will become active
	export let title, description, date, url, image;
	export let active = false;
	export let forceOpen = false
	let showToggle = false;
	let arrowSize = 20;
	let screenWidth;
	let urlHover = false
	
	$: if (screenWidth < 1024) {
		arrowSize = 15;
	}
	let turnArrow;
	$: if (active) {
		turnArrow = "-";
	} else {
		turnArrow = "";
	}
	import { slide } from "svelte/transition";
</script>


<div
	class="flex flex-col container border-b-2 border-slate-200/20 p-2 py-4"
	on:mouseenter={() => {
		showToggle = true;
	}}
	on:mouseleave={() => {
		showToggle = false;
	}}
>
	<div
		class="flex flex-row justify-between items-center cursor-pointer">
		<div class="w-fit">
			{#if forceOpen}
			<h6 class="text-sm text-slate-400 font-light">{date}</h6>
			{/if}
			<h4 class="text-lg md:text-xl 2xl:text-2xl font-semibold quote">{title}</h4>
		</div>
		<!-- This causing issues on phone screen -->
		{#if showToggle && !forceOpen || active && !forceOpen || screenWidth < 1024 && !forceOpen} 
		<!-- <div>
			<svg xmlns="http://www.w3.org/2000/svg" width={arrowSize} height="24" viewBox="0 0 24 24" fill="#cbd5e1" class="{turnArrow}rotate-90 transition duration-300"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
		</div> -->
		{/if}
	</div>
	{#if active || forceOpen}
		<div transition:slide>
			<p class="lg:text-lg opacity-90 font-light font-sans">{description}</p>

			<a href={url} class="flex items-center lg:text-xl text-lg font-semibold py-2 text-indigo-600 w-fit"
            on:mouseenter={() => {urlHover = true }}
            on:mouseleave={() => {urlHover = false }}>Read more
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="#818cf8" clip-rule="evenodd" class="{urlHover ? "mx-4" : "mx-1"} transition-all duration-300"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
            </a>
		</div>
	{/if}
</div>

<svelte:window bind:innerWidth={screenWidth} />
