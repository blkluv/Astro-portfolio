import rss from "@astrojs/rss";

export const get = () =>
	rss({
		title: "LUV NFT",
		description: "Y LUV NFT",
		site: import.meta.env.SITE,
		items: import.meta.glob("./blog/**/*.{md,mdx}"),
	});
