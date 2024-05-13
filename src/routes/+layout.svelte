<title>Svelte soldiers</title>

<nav>
    <a href="/">Home</a>
    <a href="/people">People</a>
    <a href="/career">Career</a>
    <a href="/products">Products</a>
    <a href="/about">About</a>
</nav>

<slot/>

<style>
    :root {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background-color: rgb(235, 230, 230);
    }

    nav, a {
        position: relative;
        z-index: 999;
    }

    nav {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    :global(hr) {
        width: 100%;
    }

    :global(.page-container) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10%;
    }

    :global(.small-p) {
        font-size: smaller;
        font-style: italic;
    }

    :global(.card) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        border-radius: 1rem;
        background-color: rgb(235, 215, 215);
        box-shadow: 0 0 1rem 1rem rgba(150, 120, 120, 0.5);
    }
</style>
