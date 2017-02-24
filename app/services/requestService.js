/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 *
 * @author hogyun
 */

export default class RequestService {
    constructor() {

    }
    static async get(url, qs) {
        try {
            let Options = {
                method: 'GET',
                headers: new Headers(),
                qs: qs
            };

            let response = await fetch(url, Options);
            let responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.error(error);
        }
    }
}
