/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 *
 * @author hogyun
 */

import MainDTO from '../DTOs/MainDTO'
import RequestService from './../services/requestService'
import CONFIG from './../config'

export default class MainManager {

    constructor() {
        this.sample1 = new MainDTO(new Date())
    }

    static getDataSample() {
        return this.sample1;
    }

    static async getDustData(lat, long) {
        let qs = {
                date: '2017-02-20',
                hour: '17',
                lat: lat,
                long: long
        };


        let resJson = await RequestService.get(CONFIG.API_SERVER_BASE_URL + '/totalinfo', qs);
        return resJson;
    }



}
