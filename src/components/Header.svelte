<script>
	let showNav = false;
	let burgerClass;
	$: if (showNav) {
		burgerClass = " transform rotate-90 transition-all";
	} else {
		burgerClass = "transform transition-all";
	}
	let fillColor = "#f1f5f9";
	import { slide, fade } from "svelte/transition";
</script>

<!-- LARGE SCREEN SIZES -->
<nav
	class=" hidden md:flex items-center justify-between text-2xl xl:mx-36 lg:mx-10 md:mx-5"
>
	<!-- Name -->
	<a href="/">
		<svg
			width="100"
			viewBox="0 0 2400 2400"
			preserveAspectRatio="xMidYMid meet"
			on:mouseenter={() => {
				fillColor = "url(#Gradient)";
			}}
			on:mouseleave={() => {
				fillColor = "#f1f5f9";
			}}
		>
			<defs>
				<linearGradient id="Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" style="stop-color:#f1f5f9;stop-opacity:1" />
					<stop offset="100%" style="stop-color:#6366f1;stop-opacity:1" />
				</linearGradient>
			</defs>
			<g transform="translate(0.000000,2400.000000) scale(0.100000,-0.100000)" stroke="none" fill={fillColor}>
			  <!-- Updated LUV NFT Logo -->
			  <text x="400" y="1200" font-family="Archivo Black, Arial, sans-serif" font-size="500" fill="#a5b4fc">LUV NFT</text>
			</g>
		</svg>
	</a>
	<!-- Main Links -->
	<div class="flex items-center">
		<a
			class="mx-2 hover:border-b-2 border-spacing-3 border-indigo-500 transition duration-100"
			href="/about">About</a
		>
		<a
			class="mx-2 hover:border-b-2 border-spacing-3 border-indigo-500 transition duration-100"
			href="/#blog">Blog</a
		>
		<a
			class="mx-2 hover:border-b-2 border-spacing-3 border-indigo-500 transition-all duration-100"
			href="/#projects">Projects</a
		>
		<a
			class="ml-2 hover:border-b-2 border-spacing-3 border-indigo-500 transition-all duration-100"
			href="/#contact">Contact</a
		>
	</div>
</nav>

<!-- PHONE SCREEN SIZES -->
<nav class="md:hidden flex flex-col items-start justify-center px-3 text-lg">
	<div class="flex justify-between items-center w-full py-2 px-2">
		<a href="/">
			<svg
				width="70"
				viewBox="0 0 2400 2400"
				preserveAspectRatio="xMidYMid meet"
				on:mouseenter={() => {
					fillColor = "url(#Gradient)";
				}}
				on:mouseleave={() => {
					fillColor = "#f1f5f9";
				}}
			>
				<defs>
					<linearGradient id="Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" style="stop-color:#f1f5f9;stop-opacity:1" />
						<stop offset="100%" style="stop-color:#38bdf8;stop-opacity:1" />
					</linearGradient>
				</defs>
				<g transform="translate(0.000000,2400.000000) scale(0.100000,-0.100000)" stroke="none" fill={fillColor}>
				  <!-- Updated LUV NFT Logo -->
				  <text x="400" y="1200" font-family="Archivo Black, Arial, sans-serif" font-size="500" fill="#a5b4fc">LUV NFT</text>
				</g>
			</svg>
		</a>
		<button
		class="flex flex-col py-2 pb-2 px-1"
			on:click={() => {
				showNav = !showNav;
			}}
		>
		<!-- Make burger that turns into an X -->
				<div class="w-10 bg-white h-1 origin-center {showNav ? "rotate-45 translate-y-1" : "rotate-0 -translate-y-1.5"} transition-all" />
				<div class="w-10 bg-white h-1 origin-center {showNav ? "rotate-45 translate-y-0" : "rotate-0 "} transition-all" />
				<div class="w-10 bg-white h-1 origin-center {showNav ? "-rotate-45 -translate-y-1" : "rotate-0 translate-y-1.5"} transition-all" />
		</button>
	</div>

	{#if showNav}
		<div class="wrapper" transition:slide>
			<div class="mx-2 mb-4 flex flex-col text-2xl">
				<a class="underline underline-offset-2" href="/about">About</a>
				<a class="underline underline-offset-2" href="/#blog">Blog</a>
				<a class="underline underline-offset-2" href="/#projects">Projects</a>
				<a class="underline underline-offset-2" href="/#contact">Contact</a>
			</div>
		</div>
	{/if}
</nav>
