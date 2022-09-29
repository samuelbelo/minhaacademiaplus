<template>
	<v-container>
		<div class="col-md-12">
			<v-card class="card card-container">
				<v-card-text>
					<h1 class="text-center mb-10">Aluno</h1>
					<v-img
						id="profile-img"
						src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
						class="profile-img-card"
					/>
					<v-form ref="form" @submit.prevent="handleLogin" v-model="valid">
						<v-text-field class="mt-5" autofocus label="Username">

						</v-text-field>
						<v-text-field label="Password">

						</v-text-field>
					</v-form>
				</v-card-text>
				<v-card-actions>
					<v-btn block>Login</v-btn>
				</v-card-actions>
			</v-card>
		</div>
	</v-container>
</template>
<script setup lang="ts">
import type { Ref } from "vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "@logue/vue2-helpers/vuex";
import { useRouter } from "vue-router/composables";


const valid: Ref<boolean> = ref(false);
const user: Ref<any> = ref("");
const loading: Ref<any> = ref(false);
const message: Ref<any> = ref("");
const store = useStore();
const router = useRouter();

const loggedIn: Ref<boolean> = computed({
	get: () => store.state.auth.status.loggedIn,
	set: v => {
	}
});

onMounted(() => {
	if (loggedIn.value) {
		router.push({ name: "Profile" });
	}
});


const handleLogin = () => {
	loading.value = true;
	/*this.$validator.validateAll().then(isValid => {
		if (!isValid) {
			this.loading = false;
			return;
		}

		if (this.user.username && this.user.password) {
			this.$store.dispatch("auth/login", this.user).then(
				() => {
					this.$router.push("/profile");
				},
				error => {
					this.loading = false;
					this.message =
						(error.response && error.response.data) ||
						error.message ||
						error.toString();
				}
			);
		}
	});*/
};


</script>

<style scoped>
label {
	display: block;
	margin-top: 10px;
}

.card-container.card {
	max-width: 350px !important;
	max-height: 100%;
	padding: 40px 40px;
}

.card {
	padding: 20px 25px 30px;
	margin: 0 auto 25px;
	margin-top: 25%;
	margin-bottom: 100%;
	-moz-border-radius: 2px;
	-webkit-border-radius: 2px;
	border-radius: 2px;
	-moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	-webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
	width: 96px;
	height: 96px;
	margin: 0 auto 10px;
	display: block;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
}
</style>
