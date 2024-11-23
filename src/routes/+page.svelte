<script lang="ts">
    import { Button } from '$lib/components/ui/button/index.js';
    import { FileText, Linkedin, Github, Mail } from 'lucide-svelte';
    import ShineBorder from '$lib/components/magic-ui/ShineBorder.svelte';
</script>

<div class="mx-auto w-full max-w-prose space-y-8 lg:my-8 grid grid-cols-1">
		
		<header class="grid grid-cols-1 gap-4">
			<h1 class="text-xl font-bold md:text-2xl lg:text-3xl">Greg Ross</h1>
			<h3 class="text-lg md:text-xl lg:text-2xl">Full-Stack Software Engineer</h3>
			<p>
				I am a full-stack software engineer with a passion for creating user-friendly applications that solve real-world
				problems. I have experience working with a variety of technologies and am always looking to learn more.
			</p>
		</header>

    <section class="grid grid-cols-1 gap-4">
        <a href="https://drive.google.com/file/d/1GKCzZS0rIXDeQMR2LUMGpBdmB_hT3cCK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <ShineBorder
                class="flex w-full transform items-center justify-center p-4 text-center text-2xl font-bold capitalize transition-transform duration-300 hover:scale-105"
                color={['#FF057A', '#0883FF']}
            >
                <FileText class="mr-2 h-6 w-6" />
                <span class="text-lg">Resume</span>
            </ShineBorder>
        </a>
        <a href="https://www.linkedin.com/in/gregrossdev/" target="_blank">
            <Button variant="outline" class="w-full p-4 text-lg">
                <Linkedin class="mr-2 h-6 w-6" />
                <span>LinkedIn</span>
            </Button>
        </a>
        <a href="https://github.com/gregrossdev" target="_blank">
            <Button variant="outline" class="w-full p-4 text-lg">
                <Github class="mr-2 h-6 w-6" />
                <span>GitHub</span>
            </Button>
        </a>
        <a href="mailto:gregross.dev@gmail.com">
            <Button variant="outline" class="w-full p-4 text-lg">
                <Mail class="mr-2 h-6 w-6" />
                <span>Email</span>
            </Button>
        </a>
    </section>
</div>