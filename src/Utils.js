import request from 'superagent';

const URL = 'https://agile-cove-58837.herokuapp.com/';

//Fetch all potions: GET
export async function fetchAllPotions() {
    try {
        const response = await request.get(`${URL}potions`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

//Fetch one potion: GET
export async function fetchOnePotion(someId) {
    try {
        const response = await request.get(`${URL}potions/${someId}`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

//Fetch all brands: GET
export async function fetchAllBrands() {
    try {
        const response = await request.get(`${URL}brands`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

//Fetch one brand: GET
export async function fetchOneBrand(someId) {
    try {
        const response = await request.get(`${URL}potions/${someId}`);

        return response.body;
    } catch(err) {
        throw err;
    }
}

//Create Potion: POST
export async function createPotion(newPotion) {
    try {
        await request
        .post(`${URL}potions`)
        .send(newPotion);

        return
    } catch(err) {
        throw err;
    }
}

//Update Potion: PUT
export async function updatePotion(someId, newPotion) {
    try {
        await request
        .put(`${URL}potions/${someId}`)
        .send(newPotion);

        return
    } catch(err) {
        throw err;
    }
}

//Delete Potion: DELETE
export async function deletePotion(someId) {
    try {
        await request.delete(`${URL}potions/${someId}`)

        return
    } catch(err) {
        throw err;
    }
}
