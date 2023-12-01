<script>
	// Your existing script remains unchanged
  </script>
  
  <body class="h-screen w-screen">
	<h1
	  class="text-white flex items-center justify-center text-6xl w-screen h-screen"
	>
	  <TypeWriter
		words={[
		  "404", "Click to go home"
		]}
	  />
	</h1>
	<a href="https://y.luvnft.com">
	  <!-- Updated SVG for LUV NFT Logo -->
	  <svg
		version="1.0"
		xmlns="http://www.w3.org/2000/svg"
		width="2400.000000pt"
		height="2400.000000pt"
		viewBox="0 0 2400.000000 2400.000000"
		preserveAspectRatio="xMidYMid meet"
		style="position: absolute; left: {xPosition}px; top: {yPosition}px"
	  >
		<style>
		  @import 'https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap';
		</style>
		<g transform="translate(0.000000,2400.000000) scale(0.100000,-0.100000)" fill="#a5b4fc" stroke="none">
		  <text x="400" y="1200" font-family="Archivo Black, Arial, sans-serif" font-size="500" fill="#a5b4fc">LUV NFT</text>
		</g>
	  </svg>
	</a>
  </body>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<style>
	/* Interesting, actually. 404 Pages automatically wrapped inside of a body tag. I suppose that makes sense, though... */
	/* Leaving that comment there but damn what a stupid thing to say  */
	/* Actually no I think the comment was fine because I was confused that it didn't take the websites general body style, but overwrote it */
	body {
		@apply m-0 bg-[#222222] p-0;
	}
</style>
