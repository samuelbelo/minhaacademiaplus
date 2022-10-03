<template>
	<v-container class="home">
		<hello-world msg="MinhaAcademia" />
		<teleport to="head">
			<meta
				name="keyword"
				content=""
			/>
			<meta name="" content="" />
			<component :is="'script'" type="application/ld+json">
				{{ jsonLd }}
			</component>
		</teleport>
	</v-container>
</template>

<script setup lang="ts">
import { defineComponent, ref, watch, type Ref, type SetupContext, computed } from "vue";
import { useStore } from '@logue/vue2-helpers/vuex';
import { useRoute } from "vue-router/composables";
import HelloWorld from "@/components/HelloWorld.vue";
import logo from "@/assets/vuetify.svg";
import store from "@/store/index.bkp";
const route = useRoute();

// const store = useStore();
const jsonLd: Ref<string> = ref(
	JSON.stringify(
		{
			"@schema": "https://json.schemastore.org/jsonld.json",
			"@context": "http://schema.org",
			"@type": "WebSite",
			name: "Vite Vue2 TypeScript Startar",
			url: "https://github.com/logue/vite-vue2-vuetify-ts-starter",
			description: "Vite Vue2 TypeScript Demo Page",
			logo: logo
		},
		null,
		2
	)
);

const computedValue: Ref<string> = computed({
	get: () => store.getters.computedValue,
	set: v => store.dispatch('setComputedValue', v)
})

// Watch
watch(
	() => route?.name,
	name => console.log("route is changed:", name)
);
</script>
