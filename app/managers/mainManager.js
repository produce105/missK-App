/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 *
 * @author hogyun
 */

import MainDTO from '../DTOs/MainDTO'

export default class MainManager {

    constructor() {
        this.sample1 = new MainDTO(new Date())
    }

    getDataSample() {
        return this.sample1;
    }

}
