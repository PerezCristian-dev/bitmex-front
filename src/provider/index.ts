import { ObjectKeyDynamicI } from "@/interfaces/app.interface";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
class Base {
  private readonly axios: AxiosInstance;

  constructor(api: string, config?: AxiosRequestConfig) {
    this.axios = axios.create({
      baseURL: api,
      withCredentials: false,
      ...(config || {}),
    });
  }

  private params(params: ObjectKeyDynamicI): String {
    return Object.keys(params)
      .map((key) => {
        let value = params[key];
        value = typeof value == typeof {} ? JSON.stringify(value) : value;
        return `${key}=${value}`;
      })
      .join("&");
  }

  private getMessage(error: { response?: any; message?: string }): String {
    if (error?.response?.status === 401) {
      window.location.reload();
    }
    const response = error.response;
    const message =
      response && response.data && response.data.error
        ? response.data.error.message
        : error.message;
    return message;
  }

  protected get(
    url: string,
    params: ObjectKeyDynamicI = {},
    config: AxiosRequestConfig = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const _isParam = Object.keys(params).length > 0;
      this.axios
        .get(`${url}${_isParam ? `?${this.params(params)}` : ""}`, config)
        .then((res) => resolve(res.data))
        .catch((error) => {
          const message = this.getMessage(error);

          return reject({ message });
        });
    });
  }

  protected _download(
    url: string,
    params: ObjectKeyDynamicI = {},
    config: AxiosRequestConfig = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const _isParam = Object.keys(params).length > 0;
      this.axios
        .get(`${url}${_isParam ? `?${this.params(params)}` : ""}`, config)
        .then((res) => resolve(res))
        .catch((error) => {
          const message = this.getMessage(error);

          return reject({ message });
        });
    });
  }

  protected post(
    url: string,
    data: object = {},
    config: AxiosRequestConfig = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.axios
        .post(url, data, config)
        .then((res) => resolve(res.data))
        .catch((error) => {
          const message = this.getMessage(error);

          return reject({ message });
        });
    });
  }

  protected update(
    url: string,
    data: object = {},
    config: AxiosRequestConfig = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.axios
        .patch(url, data, config)
        .then((res) => resolve(res.data))
        .catch((error) => {
          const message = this.getMessage(error);

          return reject({ message });
        });
    });
  }

  protected delete(url: string, config: AxiosRequestConfig = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.axios
        .delete(url, config)
        .then((res) => resolve(res.data))
        .catch((error) => {
          const message = this.getMessage(error);

          return reject({ message });
        });
    });
  }
}

export default Base;
