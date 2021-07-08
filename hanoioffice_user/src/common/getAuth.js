import { getCookie } from '../config/cookies';

export default () => {
  const csOfficeToken = getCookie('csoffice_accessToken');
  const csofficeRefreshToken = getCookie('csoffice_refreshToken');
  const userInfo = getCookie('user_info');
  return { csOfficeToken, csofficeRefreshToken, userInfo };
};
