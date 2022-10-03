<template>
	<v-data-table
		dense
		:headers="headers"
		:items="items"
		item-key="name"
		class="elevation-1"></v-data-table>
</template>
<script setup lang="ts">
defineProps({
	headers: String,
	items: Array
})

</script>

<style scoped>

</style>
