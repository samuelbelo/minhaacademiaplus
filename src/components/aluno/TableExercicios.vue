<template>
	<v-card>
		<v-card-title class="h5">{{ items.nomeExercicio }}</v-card-title>
		<v-card-text class="text-left">
			<h3>Execução: {{ items.quantidadeDeSeries }} x {{ items.quantidadeDeRepeticoes }} </h3>
			<h5 v-if="items.observacaoInstrutor">Observações: {{ items.observacaoInstrutor }}</h5>
		</v-card-text>
	</v-card>
</template>
<script>

export default {
	props: ["items"],
	data() {
		return {
			headers: [
				{
					text: "Nome",
					align: "start",
					sortable: false,
					value: "nomeExercicio"
				},
				{
					text: "Séries",
					align: "start",
					sortable: false,
					value: "quantidadeDeSeries"
				},
				{
					text: "Reps",
					align: "start",
					sortable: false,
					value: "quantidadeDeRepeticoes"
				}
			]
		};
	}
};

</script>

<style scoped>

</style>
