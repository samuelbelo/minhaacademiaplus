<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
	<v-container class="text-center">
		<v-row class="my-3">
			<v-col class="mb-4">
				<h1 class="text-h3 font-weight-bold mb-3">Bem-vindo ao MeuAcademia+</h1>

			</v-col>

			<v-col class="mb-5" cols="12">

			</v-col>

			<v-col class="mb-5" cols="12">

			</v-col>

			<v-col class="mb-5" cols="12">

			</v-col>

			<v-col class="mb-5" cols="12">

			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Logo
import vueLogo from "@/assets/vue.svg";
import viteLogo from "@/assets/vite.svg";
import vuetifyLogo from "@/assets/vuetify.svg";

import type MetaInterface from "@/interfaces/MetaInterface";
import Meta from "@/Meta";

/** HelloWorld Component */
export default defineComponent({
	props: {
		/** Message */
		msg: { type: String, default: undefined }
	},
	setup() {
		/** Meta information */
		const meta: MetaInterface = Meta;

		/** Plugins */
		const plugins: Record<string, string>[] = [
			{
				text: "vite-plugin-vue2",
				href: "https://github.com/vitejs/vite-plugin-vue2#readme"
			},
			{
				text: "unplugin-vue-components",
				href: "https://github.com/antfu/unplugin-vue-components"
			},
			{
				text: "typescript",
				href: "https://vitejs.dev/guide/features.html#typescript"
			},
			{
				text: "vite-plugin-checker",
				href: "https://github.com/fi3ework/vite-plugin-checker"
			},
			{
				text: "rollup-plugin-visualizer",
				href: "https://github.com/btd/rollup-plugin-visualizer"
			}
		];

		/** Whats next */
		const whatsNext: Record<string, string>[] = [
			{
				text: "Explore components",
				href: "https://vuetifyjs.com/components/api-explorer"
			},
			{
				text: "Select a layout",
				href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
			},
			{
				text: "Frequently Asked Questions",
				href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
			}
		];

		/** Important Links */
		const importantLinks: Record<string, string>[] = [
			{
				text: "Documentation",
				href: "https://vuetifyjs.com"
			},
			{
				text: "Chat",
				href: "https://community.vuetifyjs.com"
			},
			{
				text: "Made with Vuetify",
				href: "https://madewithvuejs.com/vuetify"
			},
			{
				text: "Twitter",
				href: "https://twitter.com/vuetifyjs"
			},
			{
				text: "Articles",
				href: "https://medium.com/vuetify"
			},
			{
				text: "github",
				href: "https://github.com/vuetifyjs/vuetify"
			},
			{
				text: "awesome-vuetify",
				href: "https://github.com/vuetifyjs/awesome-vuetify"
			}
		];

		/** Ecosystem Links */
		const ecosystem: Record<string, string>[] = [
			{
				text: "vue-router",
				href: "https://v3.router.vuejs.org"
			},
			{
				text: "vuex",
				href: "https://v3.vuex.vuejs.org"
			},
			{
				text: "vue-devtools",
				href: "https://devtools.vuejs.org/"
			},
			{
				text: "@logue/vue2-helpers",
				href: "https://github.com/logue/vue2-helpers"
			},
			{
				text: "vue2-teleport",
				href: "https://github.com/Mechazawa/vue2-teleport"
			},
			{
				text: "vue-class-component",
				href: "https://class-component.vuejs.org/"
			},
			{
				text: "vue-property-decorator",
				href: "https://github.com/kaorun343/vue-property-decorator"
			}
		];

		return {
			meta,
			plugins,
			whatsNext,
			importantLinks,
			ecosystem,
			vueLogo,
			viteLogo,
			vuetifyLogo
		};
	}
});
</script>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.vuetify:hover {
	filter: drop-shadow(0 0 2em #2196f3aa);
}
</style>
