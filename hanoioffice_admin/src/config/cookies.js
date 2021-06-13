import Cookies from 'js-cookie';

export const getCookie = (name) => {
  return Cookies.get(name);
};

export const setCookie = (name, value, expires) => {
  if (!value) { return; }
  return Cookies.set(name, value, { expires: expires });
};

export const removeCookie = (name) => {
  return Cookies.remove(name);
};

export const COOKIE_CS_OFFICE_ACCESS_TOKEN = 'cs_office_accesstoken';