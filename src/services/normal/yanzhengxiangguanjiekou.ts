// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getAuth POST /api/auth/getAuth */
export async function getAuthUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAuthUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultLoginUserVO_>('/api/auth/getAuth', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getCurrentUser GET /api/auth/getCurrentUser */
export async function getCurrentUserUsingGet(options?: { [key: string]: any }) {
  return request<API.ResultUserEntity_>('/api/auth/getCurrentUser', {
    method: 'GET',
    ...(options || {}),
  });
}
