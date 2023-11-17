<script lang="ts">
	import { base } from '$app/paths';
	export const prerender = true;
	export const trailingSlash = 'always';
</script>

<nav>
	<a href="{base}/enze">Home</a>
	<a href="{base}/enze/about">About</a>
</nav>

<slot />
