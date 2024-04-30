// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 微信公众号验签 GET /api/wechat/protal/${param0} */
export async function validateUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.validateUsingGETParams,
  options?: { [key: string]: any },
) {
  const { appid: param0, ...queryParams } = params;
  return request<string>(`/api/wechat/protal/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 微信公众号公众号逻辑处理 POST /api/wechat/protal/${param0} */
export async function postUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.postUsingPOSTParams,
  body: API.RequestMsgEntity,
  options?: { [key: string]: any },
) {
  const { appid: param0, ...queryParams } = params;
  return request<API.ResponseMsgEntity>(`/api/wechat/protal/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
