import axios from 'axios';
import BASEURL from '../config/env.config';

const api=axios.create({
    baseURL: BASEURL,
})


export default class HttpService {

    constructor(private path:string) {
        this.path=path
    }

    async findAll(params:string="" ){
        try {
            const response = await api.get(`${this.path}${params}`);
            if(response.status>=200 && response.status<300){
                return response.data;
            }else{
                return null;
            }
        } catch (error) {
            return null;
        }

    }
}