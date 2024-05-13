<script>
    import { base } from '$app/paths'

    export let id
    export let name
    export let img
</script>

<div class="card">
    <a href="/products/{id}">
        <h2>{name}</h2>
        <img src="{base}{img}" />
    </a>
</div>

<style>
    a {
        text-decoration: none;
        color: #000;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    img {
        width: 40%;
        height: auto;
    }
</style>