<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import SiteLayout from '$lib/components/layouts/SiteLayout.svelte';
	import ThemeSwitch from '$lib/components/ui/theme-switch/ThemeSwitch.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { Braces } from 'lucide-svelte';
	// import AnimatedTabs from '$lib/components/luxe-ui/animated-tabs.svelte'
	import { UmamiAnalytics } from '@lukulent/svelte-umami';
</script>

<UmamiAnalytics
	websiteID="43192eba-463d-4ca5-88e7-5f8f0a1871b6"
	srcURL="https://eu.umami.is/script.js"
/>

<svelte:head>
	<script defer data-domain="gregross.dev" src="https://plausible.io/js/script.js"></script>
	<script defer>
    <!-- Matomo -->
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://gregrossdev.matomo.cloud/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/gregrossdev.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
  })();
  <!-- End Matomo Code -->
	</script>
</svelte:head>

<ModeWatcher />

<!-- Constrain the layout width and add margin for top/bottom spacing -->
<div class="mx-auto my-0 flex h-screen max-w-full flex-col md:max-w-3xl lg:max-w-screen-md">
	<SiteLayout>
		<!-- Header -->
		<header slot="header" class="space-y-2 bg-secondary p-2 text-secondary-foreground md:p-4">
			<nav class="flex items-center justify-between">
				<a href="/" class="flex items-center">
					<span class="text-2xl md:text-3xl lg:text-4xl">&#123;&nbsp;</span>
					<h1 class="font-extrabold">gregross.dev</h1>
					<span class="text-2xl md:text-3xl lg:text-4xl">&nbsp;&#125;</span>
				</a>
				<ThemeSwitch />
			</nav>
			<!-- <AnimatedTabs /> -->
		</header>
		<!-- Main -->
		<main slot="main" class="flex-grow space-y-4 bg-background p-2 text-foreground md:p-4 lg:p-6">
			<slot />
		</main>
		<!-- Footer -->
		<footer slot="footer" class="bg-secondary p-2 text-center text-secondary-foreground md:p-4">
			<h3 class="text-xs md:text-sm">© 2024 gregross.dev - All rights reserved</h3>
		</footer>
	</SiteLayout>
</div>
