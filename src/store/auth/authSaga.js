import { takeLatest } from "redux-saga/effects";
import { authRegister, authLogin, authRefreshToken } from "./authSlice";
import {
  handleLogin,
  handleRefreshToken,
  handleRegister,
} from "./authHandlers";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleRegister);
  yield takeLatest(authLogin.type, handleLogin);
  yield takeLatest(authRefreshToken.type, handleRefreshToken);
}
