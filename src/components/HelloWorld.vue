<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
	<v-container class="text-center">
		<v-row class="my-3">
			<v-col class="">
				<h1 class="text-h4 font-weight-bold mb-3">Bem-vindo ao MinhaAcademia+</h1>

			</v-col>
		</v-row>
		<v-row>
			<v-col class="mb-5" cols="12">
				<component :is="selectedComponent"></component>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
import Aluno from '../views/Aluno/Aluno.vue'
import Professor from '@/views/Professor/Professor.vue'
import { computed } from "vue";

const selectedComponent = computed({
	get() {
		return localStorage.getItem('tipoUsuario') == 'Aluno' ? Aluno : Professor
	},
	set() {
		//
	}
})
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
