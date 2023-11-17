import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.env.NODE_ENV !== 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			strict: false
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		}
	},
	preprocess: vitePreprocess()
};
export default config;