import axios from 'axios'

import { AxiosProps } from './types'

const BASE_URL = 'https://snailly.unikomcodelabs.id/'

export const axiosGet = (
    url: string,
    { withoutBaseURL, ...config }: AxiosProps
) => {
    return axios.get(url, {
        ...config,
        baseURL: withoutBaseURL ? '' : BASE_URL,
    })
}

export const axiosPost = (
    url: string,
    data: any,
    { withoutBaseURL, ...config }: AxiosProps
) => {
    return axios.post(url, data, {
        ...config,
        baseURL: withoutBaseURL ? '' : BASE_URL,
    })
}

export const axiosPut = (
    url: string,
    data: any,
    { withoutBaseURL, ...config }: AxiosProps
) => {
  return axios.put(url, data, {
    ...config,
    baseURL: withoutBaseURL ? "" : BASE_URL,
  });
};

export const axiosDelete = (
    url: string,
    data: any,
    { withoutBaseURL, ...config }: AxiosProps
) => {
    return axios.delete(url, {
        ...config,
        baseURL: withoutBaseURL ? '' : BASE_URL,
    })
}
