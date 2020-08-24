<template>
	<div class="checkout">
    	<h1>Finalize a sua compra</h1>
		<CheckoutArea 
			:hasCredit="true" 
			:hasDebit="true" />
  	</div>
</template>

<script>

  	import CheckoutArea from '@/components/CheckoutArea.vue';

	export default {
		name: 'Checkout',
		components: {
			CheckoutArea
		}
	}

</script>

<style scoped>

</style>