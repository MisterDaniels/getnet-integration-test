<template>
	<div class="home">
		<HelloWorld msg="Bem vindo ao teste Getnet" />
	</div>
</template>

<script>
	import HelloWorld from "@/components/HelloWorld.vue";

	export default {
		name: "Home",
		components: {
			HelloWorld
		}
	};
</script>