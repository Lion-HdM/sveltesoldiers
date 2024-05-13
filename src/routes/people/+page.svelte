<script>
    import Person from "$lib/person.svelte";
</script>

<div class="page-container">
    <div class="people-container">
        <Person name={'Alex'} slogan={'"Slogan incoming"'}/>
        <Person name={'Lion'} slogan={'"KI steht für \'Kein Interesse\'"'}/>
    </div>
</div>

<style>
    .people-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
</style>