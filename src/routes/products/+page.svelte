<script>
    import Product from '$lib/product.svelte';
    export let data;
</script>

<div class="page-container">
    <div class="products-container">
        {#each data.products as product}
            <Product id={product.id} name={product.name} img={product.img}/>
        {/each}
    </div>
</div>

<style>
    .products-container {
        width: 100%;
        height: inherit;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
</style>
