/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 *
 * @author hogyun
 */

/** External dependencies **/
var moment = require('moment');

/** Internal dependencies **/
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
                date: moment().format('YYYY-MM-DD'), //오늘 date
                hour: new Date().getHours()+'', //오늘 hour
                lat: lat+'',
                long: long+''
        };
        console.log(qs);

        let resJson = await RequestService.get(CONFIG.AWS_SERVER_BASE_URL + '/totalinfo' + `?date=${qs.date}&hour=${qs.hour}&lat=${qs.lat}&long=${qs.long}`);
        return resJson;
    }



}
