
export type AccessToken = string;
export type RefreshToken = string;
export type AuthHeaders = Record<string, string>;

export interface PasswordChangeData {
  password: string;
  re_password: string;
}

export interface SignupData extends PasswordChangeData {
  email: string;
  username: string;
}

export interface PasswordConfirmFormData {
  new_password: string;
  re_new_password: string;
}

export interface PasswordResetConfirmData
  extends PasswordConfirmFormData {
  uid: string;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthTokens {
  access: AccessToken;
  refresh: RefreshToken;
}

export interface RefreshTokenResponse {
  access: AccessToken;
}

export interface PasswordResetFormData {
  email: string;
}

export interface AccessTokenParts {
  exp: number;
  jti: string;
  token_type: 'access' | 'refresh';
  user_id: number;
}