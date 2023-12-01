<script>
	import ProjectCard from "./ProjectCard.svelte";
	import ProjectCard2 from "./projectCard2.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import { slide, fade, crossfade, fly } from "svelte/transition";
	import { flip } from "svelte/animate";



	const projects = [
		{
			id: 0,
			title: "Live",
			tech: "Livepeer, Polygon blockchain",
			description:
			"Stream live on blockchain and we will convert it to a LUV NFT as an Arvrtise <a href='https://ateam.arvrtise.com'>A-Team</a> service.",
			url: "https://live.luvnft.com",
			buttonText: "Visit Site",
			image: "projects/live-luvnft.webp",
			logos: ["live.png", "polygon.png",],
			colors: ["#b8a6c1", "#8fa770"],
		},
		// {
		// 	id: 1,
		// 	title: "Personal Website V1",
		// 	tech: "HTML, CSS, Bootstrap, PHP, MySQL",
		// 	description:
		// 		"The first iteration of my website! My introduction to front end development.",
		// 	url: "https://dev.joemmalatesta.com/",
		// 	buttonText: "Visit Site",
		// 	image: "projects/old-website.webp",
		// 	logos: ["bootstrap.png", "css.png", "html.png", "github.svg"],
		// 	colors: ["#1d1d1d", "#70a1b1"],
		// },
		{
			id: 2,
			title: 'Paste',
			tech: "IPFS",
			description:
				"A decentralized service for sharing code snippets, notes, and media.",
			url: "https://paste.luvnft.com/",
			buttonText: "Learn more",
			image: "projects/paste-luvnft.webp",
			logos: ["paste.png"],
			colors: ["#33333a", "#b4ac9c", "#33387d"],
		},
		{
		 	id: 3,
		 	title: "TIP",
		 	tech: "Solana blockchain",
		 	description:
		 		"Send a $SOL tip with a link to anyone in the world even if they don't own crypto.",
		 	url: "https://tip.luvnft.com",
		 	buttonText: "Visit Site",
		 	image: "projects/tip-luvnft.webp",
		 	logos: ["solana.png"],
		 	colors: ["#e89850", "#c8bbde"],
		 },
		{
			id: 4,
			title: "Note",
			tech: "IPFS",
			description:
				"Create a decentralized LUV Note to yourself stored in your wallet.",
			url: "https://note.luvnft.com",
			buttonText: "Visit Site",
			image: "projects/note-luvnft.webp",
			logos: ["notes.png"],
			colors: ["#e89850", "#c8bbde"],
		},
		{
			id: 4,
			title: "HealXYZ",
			tech: "Discord, Polygon blockchain",
			description:
				"A trending PPV spiritual social media game for adults to Heal X, Y & Z to level up and win crystals and $LUV. ",
			url: "https://healxyz.com",
			buttonText: "Visit Site",
			image: "projects/healxyz.webp",
			logos: ["luv.png", "polygon.png"],
			colors: ["#e89850", "#c8bbde"],
		},
	];
	let active;
	let delay = 0;
</script>

<SectionHeader
	title={"Portfolio"}
	subtitle={"Upgrade your business to Web5 and place your website on the front page."}
/>

<div class="lg:flex flex-col hidden justify-center items-center py-3">
	{#if projects[active]}
		
			<div class="p-6 rounded-lg xl:w-3/4 w-full relative z-10" >

				<div
					class="w-full scale-100 h-full absolute inset-0 -z-10 bg-gradient-to-r from-indigo-300 via-indigo-200 to-white  blur-2xl ring-slate-300 ring-4 opacity-25"
				/>
				<ProjectCard2
					title={projects[active].title}
					tech={projects[active].tech}
					description={projects[active].description}
					url={projects[active].url}
					buttonText={projects[active].buttonText}
					image={projects[active].image}
					active={true}
					colors={projects[active].colors}
				/>
			</div>
		
		{#if projects[active]}
			<div class="flex justify-center items-center">
				<button
					class="text-center underline text-lg underline-offset-2 hover:underline-offset-4 transition-all"
					on:click={() => {
						active = null;
					}}>Reset View</button
				>
			</div>
		{/if}
	{/if}
	<div class="flex items-center flex-wrap justify-center">
		{#each projects as project, index}
			{#if index != active}
				<div
					class="m-4 z-20"
					on:click={() => {
						active = index;
					}}
					on:keypress={() => {
						active = index;
					}}
				>
					<ProjectCard2
						title={project.title}
						tech={project.tech}
						description={project.description}
						url={project.url}
						buttonText={project.buttonText}
						image={project.image}
						active={false}
						logos={project.logos}
					/>
				</div>
			{/if}
		{/each}
	</div>
</div>



<!-- use for phone sizes.  -->

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:hidden">
	{#each projects as project}
		<ProjectCard
			title={project.title}
			tech={project.tech}
			description={project.description}
			url={project.url}
			buttonText={project.buttonText}
			image={project.image}
			phoneScreen={true}
			logos={project.logos}
		/>
	{/each}
</div>
