import axios, { AxiosResponse } from 'axios';

export const BASE_URL = 'http://localhost:4001';

/*
const GET: string =  'get';
const POST =  'post';
const PUTS =  'put';
const PATCH =  'patch';
const DELETE =  'delete';

enum Method {
  GET,
  POST, 
  PUT,
  PATCH, 
  DELETE
}
*/

export const fetchWhatsappApi = async ({
  url,
  method,
  data,
  token,
  customHeaders
}: {
  url: string;
  method: any;
  data?: any;
  token?: string;
  customHeaders?: any;
}) => {
  const optionalHeaders = customHeaders ?? {};

  const headers = {
    Authorization: `token ${token as string | ''}`,
    ...optionalHeaders
  };

  const response: AxiosResponse = await axios({ method, url: `${BASE_URL}/${url}`, data, headers });

  return response;
};
