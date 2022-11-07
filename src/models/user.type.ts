export interface Wid {
  server: string;
  user: string;
  _serialized: string;
}
export interface Me {
  server: string;
  user: string;
  _serialized: string;
}

export interface User {
  pushname: string;
  phone: string;
  platform: string;
  wid: Wid;
  me: Me;
}

export const emptyUser = {
  pushname: '',
  phone: '',
  platform: '',
  wid: null,
  me: null
};
