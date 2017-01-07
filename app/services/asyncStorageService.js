/**
 * Copyright (c) 2016 Produce105 - miss_k
 *
 *
 * @author hogyun
 */

import { AsyncStorage } from 'react-native';

export default class AsyncStorageService {
    constructor(){

    }

    static async getCache(key){
        try{
            let value = await AsyncStorage.getItem('@cacheStorage:' + key);
            if (value !== null){
                return JSON.parse(value);
            }else{
                console.log('there is no data');
                return null;
            }
        }
        catch(e){
            throw new Error(e);
            // Handle exceptions
        }
    }

    static async setCache(key, value){
        try {
            await AsyncStorage.setItem('@cacheStorage:' + key, JSON.stringify(value));
        } catch (e) {
            console.log('caught error', e);
            // Error saving data
        }
    }

    static async removeCache(key){
        try {
            await AsyncStorage.removeItem('@cacheStorage' + key);
        } catch (e){
            console.log('caught error', e);
        }
    }

    static async clearCache(){
        try {
            await AsyncStorage.clear();
        } catch(e){
            console.log('caught error', e);
        }
    }


}
