import { toast } from "react-toastify";
import {
  requestAuthRefreshToken,
  requestFetchMe,
  requestLogin,
  requestRegister,
} from "./requests";
import { call, put } from "redux-saga/effects";
import { saveToken } from "../../utils/auth";
import { authUpdateUser } from "./authSlice";
function* handleRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestRegister, payload);
    if (response.status === 201) {
      toast.success("Create new user successfully!");
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleLogin(action) {
  const { payload } = action;
  try {
    const response = yield call(requestLogin, payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetch, { payload: response.data.accessToken });
    }
  } catch (e) {
    const response = e.response.data;
    if (response.statusCode === 403) {
      toast.error(response.error.message);
      return;
    }
  }
}
function* handleAuthFetch(action) {
  const { payload } = action;
  try {
    const response = yield call(requestFetchMe, payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
  } catch (e) {}
}
function* handleRefreshToken(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRefreshToken, payload);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield handleAuthFetch({
        payload: response.data.accessToken,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
export { handleLogin, handleRegister, handleAuthFetch, handleRefreshToken };
