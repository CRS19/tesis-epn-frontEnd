export interface IAxiosError {
  message: string;
  name: string;
  config: Config;
  code: string;
  status: number;
}

export interface Config {
  transitional: Transitional;
  transformRequest: any[];
  transformResponse: any[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Env;
  headers: Headers;
  method: string;
  url: string;
  data: string;
}

export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface Env {
  FormData: any;
}

export interface Headers {
  Accept: string;
  "Content-Type": string;
}
