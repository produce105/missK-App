/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 *
 * @author hogyun
 */

export default class RequestService {
    constructor() {

    }
    static async get(url) {
        try {
            let Options = {
                method: 'GET',
                headers: new Headers(),
            };
            let response = await fetch(url, Options);
            console.log(response);
            let responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.error(error);
        }
    }
}
