<script lang="ts">
	import { base } from '$app/paths';
	export const prerender = true;
</script>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/about">About</a>
</nav>

<slot />
