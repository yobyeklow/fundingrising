import Cookies from "js-cookie";

const accessTokenKey = "access_token";
const refreshTokenKey = "refresh_token";
const objectCookies = {
  expires: 30,
  domain: process.env.COOKIE_DOMAIN,
};

export const saveToken = (access_token, refresh_token) => {
  if (access_token && refresh_token) {
    Cookies.set(accessTokenKey, access_token, {
      ...objectCookies,
    });
    Cookies.set(refreshTokenKey, refresh_token, {
      ...objectCookies,
    });
  } else {
    Cookies.remove(accessTokenKey, {
      ...objectCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objectCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};

export const logout = () => {
  const [access_token] = Cookies.get(accessTokenKey);
  if (access_token) {
    Cookies.remove(accessTokenKey, {
      ...objectCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
    Cookies.remove(refreshTokenKey, {
      ...objectCookies,
      path: "/",
      domain: process.env.COOKIE_DOMAIN,
    });
  }
};
export const getToken = () => {
  const accessToken = Cookies.get(accessTokenKey);
  const refreshToken = Cookies.get(refreshTokenKey);

  return {
    accessToken,
    refreshToken,
  };
};
