
export const tokenObtainUrl = 'auth/jwt/create/';
export const tokenRefreshUrl = 'auth/jwt/refresh/';

export const usersUrl = 'auth/users/';
export const myUserUrl = 'auth/users/me/';
export const userActivateUrl = 'auth/users/activation/';
export const resetPasswordUrl = 'auth/users/reset_password/';
export const resetPasswordConfirmUrl =
  'auth/users/reset_password_confirm/';

export const palaceTreeUrl = (rootId: string | number) => {
  return `palace/palaces/tree/?root=${rootId}`;
};
export const palaceStatisticsUrl = (palaceId: string | number) =>
  `palace/palaces/${palaceId}/statistics/`;

export const palaceNodesUrl = 'node/nodes/';
export const nodeDetailUrl = (nodeId: string | number) => {
  return `node/nodes/${nodeId}/`;
};
export const nodeBodyDetailUrl = (bodyId: number | string) => {
  return `node/bodies/${bodyId}/`;
};

export const nodeMediaUrl = 'node/media/'
export const learningSessionsUrl = 'learning/sessions/';
export const myActiveSessionUrl = 'learning/sessions/active_session/';
export const learningSessionDetailUrl = (sessionId: number | string) => {
  return `learning/sessions/${sessionId}/`;
};
export const startLearningSessionUrl = 'learning/sessions/start/';
export const submitRepetitionUrl = (sessionId: number | string) => {
  return `learning/sessions/${sessionId}/record_repetition/`;
};
export const makeSubmitRepetitionUrl = submitRepetitionUrl;
export const finishLearningSessionUrl = (sessionId: number | string) => {
  return `learning/sessions/${sessionId}/finish/`;
};
export const makeFinishLearningSessionUrl = finishLearningSessionUrl;


