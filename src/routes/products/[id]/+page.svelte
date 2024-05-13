<script>
    import { base } from '$app/paths';
    export let data;
</script>

<div class="page-container">
    <h1>{data.product.name}</h1>
    <p>{data.product.description}</p>
    <img src="{base}{data.product.img}"/>
</div>

<style>
    img {
        width: 20vw;
        height: auto;
    }
</style>
