import * as db from '$lib/database'

export function load({ params }) {
    const product = db.getByID(params.id);
    return {
        product
    }
}