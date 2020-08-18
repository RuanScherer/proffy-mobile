import axios, { AxiosResponse, AxiosError } from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.15.7:3333'
})

export function addTokenMiddleware(signOutFunction: Function) {
    api.interceptors.response.use((response: AxiosResponse) => {
        return response
    }, (error: AxiosError) => {
        const response = error.response as AxiosResponse
        if (response.status === 401) return signOutFunction()
        return Promise.reject(error)
    })
}

export default api