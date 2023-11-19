import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
			//assets: process.argv.includes('dev') ? '' : 'https://eliasreutelsterz.github.io/enze/docs'
		}
	}
};

export default config;