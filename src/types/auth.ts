export type IAccessToken = string;
export type IRefreshToken = string;

export interface IPasswordChangeData {
  password: string;
  re_password: string;
}

export interface ISignupData extends IPasswordChangeData {
  email: string;
  username: string;
}

export interface IPasswordConfirmFormData {
  new_password: string;
  re_new_password: string;
}

export interface IPasswordResetConfirmData
  extends IPasswordConfirmFormData {
  uid: string;
  token: string;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface AuthTokens {
  access: IAccessToken;
  refresh: IRefreshToken;
}

export interface IRefreshTokenResponse {
  access: IAccessToken;
}

export interface IPasswordResetFormData {
  email: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
  callbackUrl: string;
}