<template>
    <div>
        <b-tabs content class="mt-3">
            <b-tab title="Crédito" active>
                <h2>Crédito</h2>
            </b-tab>
            <b-tab title="Débito" :disabled="!hasDebit">
                <h2>Débito</h2>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
    
    export default {
        name: 'CheckoutArea',
        props: {
            hasCredit: {
                type: Boolean,
                default: false
            },
            hasDebit: {
                type: Boolean,
                default: false
            }
        }
    }

</script>

<style scoped>

</style>