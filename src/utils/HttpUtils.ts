import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface HttpResponse extends AxiosResponse {}


class AxiosHttpUtils {

    private axiosInstance: AxiosInstance;

    constructor() {

        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:8080',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
    }

    async post(url: string, data: any) {

        return await this.axiosInstance.post(url, data) as HttpResponse;
    }

    async get(url: string) {

        return await this.axiosInstance.get(url);
    }
}

const HttpUtils = new AxiosHttpUtils();

export default HttpUtils;