import * as db from '$lib/database'

export function load() {
    return {
        products: db.getAll()
    }
}