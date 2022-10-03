<template>
	<v-container fluid>
		<v-container class="">
			<v-row class="my-3">
				<v-col class="mb-4">
					<v-card>
						<v-card-title>{{alunoObj.dadosPessoais.nomeCompleto}}</v-card-title>
						<v-card-subtitle class="text-left">{{alunoObj.dadosPessoais.apelido}} - {{dayjs(alunoObj.dadosPessoais.dataNascimento).format('DD/MM/YYYY')}} - {{alunoObj.dadosPessoais.idade}} anos</v-card-subtitle>
						<v-card-text>
							<h3 class="text-left">Meus planos de exercícios</h3>
							<v-expansion-panels>
								<v-expansion-panel>
									<v-expansion-panel-header>Domingo</v-expansion-panel-header>
									<v-expansion-panel-content>
										<TableExercicios></TableExercicios>
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-card-text>
					</v-card>

				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import TableExercicios from "@/components/aluno/TableExercicios.vue";
import { onMounted, ref } from "vue";
import api from "@/api/api";

//region aluno
const alunoObj = ref({
	"dadosPessoais": {
		"nomeCompleto": "Eliaquim Dos Santos",
		"apelido": "Brabo",
		"dataNascimento": "2022-09-30T10:48:50.657074+00:00",
		"idade": 0
	},
	"planosExercicios": [
		{
			"domingo": [],
			"segunda": [
				{
					"ordem": 1,
					"nomeExercicio": "Rosca Biceps",
					"quantidadeDeSeries": 4,
					"quantidadeDeRepeticoes": 10,
					"carga": 0,
					"observacaoAluno": null,
					"observacaoInstrutor": null
				},
				{
					"ordem": 1,
					"nomeExercicio": "Supino Reto",
					"quantidadeDeSeries": 4,
					"quantidadeDeRepeticoes": 10,
					"carga": 0,
					"observacaoAluno": null,
					"observacaoInstrutor": null
				}
			],
			"terca": [],
			"quarta": [
				{
					"ordem": 1,
					"nomeExercicio": "Rosca Biceps",
					"quantidadeDeSeries": 4,
					"quantidadeDeRepeticoes": 10,
					"carga": 0,
					"observacaoAluno": null,
					"observacaoInstrutor": null
				},
				{
					"ordem": 1,
					"nomeExercicio": "Supino Reto",
					"quantidadeDeSeries": 4,
					"quantidadeDeRepeticoes": 10,
					"carga": 0,
					"observacaoAluno": null,
					"observacaoInstrutor": null
				}
			],
			"quinta": [],
			"sexta": [
				{
					"ordem": 1,
					"nomeExercicio": "Rosca Biceps",
					"quantidadeDeSeries": 4,
					"quantidadeDeRepeticoes": 10,
					"carga": 0,
					"observacaoAluno": null,
					"observacaoInstrutor": null
				},
				{
					"ordem": 1,
					"nomeExercicio": "Supino Reto",
					"quantidadeDeSeries": 4,
					"quantidadeDeRepeticoes": 10,
					"carga": 0,
					"observacaoAluno": null,
					"observacaoInstrutor": null
				}
			],
			"sabado": [],
			"dataUltimaAtualizacao": "0001-01-01T00:00:00"
		}
	],
	"detalhesFisicos": [
		{
			"peso": 83.4,
			"percentualGordura": 1,
			"observacao": "Blablabla",
			"dataHoraCadastro": "2022-09-30T10:48:50.6571758+00:00"
		}
	]
})
//endregion

onMounted(async () => {
	await api({requiresAuth: false})
		.get("https://minha-academia-plus-api.azurewebsites.net/aluno")
		.then(({ data }) => {
			alunoObj.value = data
		})
})


</script>

<style scoped>

</style>
