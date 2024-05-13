const products = [
    {
        id: 'super-cool-product-01',
        name: 'The Sveltinator 9000',
        description: 'Injects Svelte into your vains',
        img: '/images/sveltinator.jpg'
    },
    {
        id: 'super-cool-product-02',
        name: 'React Destroyer Model X',
        description: 'Makes you regret ever learning React (or any other kind of JavaScript framework, we just like to dump on React)',
        img: '/images/reactDestroyer.jpg'
    },
    {
        id: 'super-cool-product-03',
        name: 'Cat <3',
        description: 'He cute <3',
        img: '/images/cat.jpg'
    }
]

export function getByID(id) {
    const product = products.find((product) => product.id == id);
    return product;
}

export function getAll() {
    return products;
}