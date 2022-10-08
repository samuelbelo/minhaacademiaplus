<template>
	<v-container fluid>
		<v-container class="">
			<v-row class="">
				<v-col class="mb-4">
					<v-card :loading="loadingData">
						<v-card-title class="text-left text-subtitle-1">{{ alunoObj.dadosPessoais.nomeCompleto }}</v-card-title>
						<v-card-subtitle class="text-left">{{ alunoObj.dadosPessoais.apelido }} - {{ alunoObj.dadosPessoais.idade }}
							anos - {{ alunoObj.detalhesFisicos[alunoObj.detalhesFisicos.length - 1].peso }} kg - {{ alunoObj.detalhesFisicos[alunoObj.detalhesFisicos.length - 1].percentualGordura }}% BFP
							<br/>
							<span>Atualizado em: {{ formatDate(this.alunoObj.detalhesFisicos[this.alunoObj.detalhesFisicos.length - 1].dataHoraCadastro) }}</span>
						</v-card-subtitle>
						<v-card-text>
							<h3 class="text-left">Meus planos de exercícios</h3>
							<v-expansion-panels>
								<v-expansion-panel>
									<v-expansion-panel-header>Domingo</v-expansion-panel-header>
									<v-expansion-panel-content>
										<span v-if="!alunoObj.planosExercicios[0].domingo.length">Sem exercícios cadastrados</span>
										<TableExercicios
											v-else
											class="mb-2"
											v-for="exercicio in alunoObj.planosExercicios[0].domingo"
											:items="exercicio"
											:key="exercicio.ordem" />
									</v-expansion-panel-content>
								</v-expansion-panel>
								<v-expansion-panel>
									<v-expansion-panel-header>Segunda</v-expansion-panel-header>
									<v-expansion-panel-content>
										<span v-if="!alunoObj.planosExercicios[0].segunda.length">Sem exercícios cadastrados</span>
										<TableExercicios
											class="mb-2"
											v-for="exercicio in alunoObj.planosExercicios[0].segunda"
											:items="exercicio"
											:key="exercicio.ordem" />
									</v-expansion-panel-content>
								</v-expansion-panel>
								<v-expansion-panel>
									<v-expansion-panel-header>Terça</v-expansion-panel-header>
									<v-expansion-panel-content>
										<span v-if="!alunoObj.planosExercicios[0].terca.length">Sem exercícios cadastrados</span>
										<TableExercicios
											class="mb-2"
											v-for="exercicio in alunoObj.planosExercicios[0].terca"
											:items="exercicio"
											:key="exercicio.ordem" />
									</v-expansion-panel-content>
								</v-expansion-panel>
								<v-expansion-panel>
									<v-expansion-panel-header>Quarta</v-expansion-panel-header>
									<v-expansion-panel-content>
										<span v-if="!alunoObj.planosExercicios[0].quarta.length">Sem exercícios cadastrados</span>
										<TableExercicios
											class="mb-2"
											v-for="exercicio in alunoObj.planosExercicios[0].quarta"
											:items="exercicio"
											:key="exercicio.ordem" />
									</v-expansion-panel-content>
								</v-expansion-panel>
								<v-expansion-panel>
									<v-expansion-panel-header>Quinta</v-expansion-panel-header>
									<v-expansion-panel-content>
										<span v-if="!alunoObj.planosExercicios[0].quinta.length">Sem exercícios cadastrados</span>
										<TableExercicios
											class="mb-2"
											v-for="exercicio in alunoObj.planosExercicios[0].quinta"
											:items="exercicio"
											:key="exercicio.ordem" />
									</v-expansion-panel-content>
								</v-expansion-panel>
								<v-expansion-panel>
									<v-expansion-panel-header>Sexta</v-expansion-panel-header>
									<v-expansion-panel-content>
										<span v-if="!alunoObj.planosExercicios[0].sexta.length">Sem exercícios cadastrados</span>
										<TableExercicios
											class="mb-2"
											v-for="exercicio in alunoObj.planosExercicios[0].sexta"
											:items="exercicio"
											:key="exercicio.ordem" />
									</v-expansion-panel-content>
								</v-expansion-panel>
								<v-expansion-panel>
									<v-expansion-panel-header>Sábado</v-expansion-panel-header>
									<v-expansion-panel-content>
										<span v-if="!alunoObj.planosExercicios[0].sabado.length">Sem exercícios cadastrados</span>
										<TableExercicios
											class="mb-2"
											v-for="exercicio in alunoObj.planosExercicios[0].sabado"
											:items="exercicio"
											:key="exercicio.ordem" />
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-card-text>
					</v-card>
					<v-card></v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>

<script>

import TableExercicios from "@/components/aluno/TableExercicios.vue";
import api from "@/api/api";

export default {
	components: {
		TableExercicios
	},
	data() {
		return {
			loadingData: false,
			alunoObj: {
				dadosPessoais: {
					nomeCompleto: "Eliaquim Dos Santos",
					apelido: "Brabo",
					dataNascimento: "2022-09-30T10:48:50.657074+00:00",
					idade: 0
				},
				planosExercicios: [
					{
						domingo: [],
						segunda: [
							{
								ordem: 1,
								nomeExercicio: "Rosca Biceps",
								quantidadeDeSeries: 4,
								quantidadeDeRepeticoes: 10,
								carga: 0,
								observacaoAluno: null,
								observacaoInstrutor: null
							},
							{
								ordem: 1,
								nomeExercicio: "Supino Reto",
								quantidadeDeSeries: 4,
								quantidadeDeRepeticoes: 10,
								carga: 0,
								observacaoAluno: null,
								observacaoInstrutor: null
							}
						],
						terca: [],
						quarta: [
							{
								ordem: 1,
								nomeExercicio: "Rosca Biceps",
								quantidadeDeSeries: 4,
								quantidadeDeRepeticoes: 10,
								carga: 0,
								observacaoAluno: null,
								observacaoInstrutor: null
							},
							{
								ordem: 1,
								nomeExercicio: "Supino Reto",
								quantidadeDeSeries: 4,
								quantidadeDeRepeticoes: 10,
								carga: 0,
								observacaoAluno: null,
								observacaoInstrutor: null
							}
						],
						quinta: [],
						sexta: [
							{
								ordem: 1,
								nomeExercicio: "Rosca Biceps",
								quantidadeDeSeries: 4,
								quantidadeDeRepeticoes: 10,
								carga: 0,
								observacaoAluno: null,
								observacaoInstrutor: null
							},
							{
								ordem: 1,
								nomeExercicio: "Supino Reto",
								quantidadeDeSeries: 4,
								quantidadeDeRepeticoes: 10,
								carga: 0,
								observacaoAluno: null,
								observacaoInstrutor: null
							}
						],
						sabado: [],
						dataUltimaAtualizacao: "0001-01-01T00:00:00"
					}
				],
				detalhesFisicos: [
					{
						peso: 83.4,
						percentualGordura: 1,
						observacao: "Blablabla",
						dataHoraCadastro: "2022-09-30T10:48:50.6571758+00:00"
					}
				]
			},
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
	},
	methods: {
		async getExerciciosAluno() {
			this.loadingData = true
			await api({ requiresAuth: true })
				.get("https://minha-academia-plus-api.azurewebsites.net/aluno")
				.then(({ data }) => {
					//@ts-ignore
					this.alunoObj = data;
				})
				.finally(() => {
					this.loadingData = false
				})
		},
		formatDate (date) {
			let formatedDate = new Date(date)
			return new Intl.DateTimeFormat('pt-BR').format(formatedDate)
		}
	},
	computed: {

	},
	mounted() {
		//@ts-ignore
		this.getExerciciosAluno();
	}
};


</script>

<style scoped>

</style>
