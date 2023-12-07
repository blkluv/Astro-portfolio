<script>
	import TypeWriter from './TypeWriter.svelte'; // Replace './TypeWriter.svelte' with the correct path to your TypeWriter component
  
	let windowHeight = 0;
	let windowWidth = 0;
  
	// This code will run only on the client-side
	import { onMount } from 'svelte';
  
	onMount(() => {
	  // Accessing window properties after the component has mounted
	  windowHeight = window.innerHeight;
	  windowWidth = window.innerWidth;
	});
  </script>
  
  <body class="h-screen w-screen">
	<h1 class="text-white flex items-center justify-center text-6xl w-screen h-screen">
	  {#if TypeWriter}
		<TypeWriter
		  words={["404", "Click to go home"]}
		/>
	  {:else}
		<span>404 Click to go home</span> <!-- Fallback in case TypeWriter is not available -->
	  {/if}
	</h1>
	<!-- Rest of your code -->
  </body>
  
  <svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />
  
  <style>
	/* Styling remains the same */
	body {
	  @apply m-0 bg-[#000000] p-0;
	}
  </style>
  