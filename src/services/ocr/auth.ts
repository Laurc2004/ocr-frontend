// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getAuth POST /api/auth/getAuth */
export async function getAuthUsingPost(
    params: API.getAuthUsingPOSTParams,
    options: { [key: string]: any } = {},
) {
  options.skipInterceptor = true; // 添加skipInterceptor属性以跳过请求拦截
  return request<API.ResultLoginUserVO_>('/api/auth/getAuth', {
    method: 'POST',
    params: { ...params },
    ...options,
  });
}



/** getCurrentUser GET /api/auth/getCurrentUser */
export async function getCurrentUserUsingGet(options?: { [key: string]: any }) {
  return request<API.ResultUserEntity_>('/api/auth/getCurrentUser', {
    method: 'GET',
    ...(options || {}),
  });
}
