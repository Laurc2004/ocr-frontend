// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 上传文件获取结果 POST /api/ocr/getByFile */
export async function getTextOnlyByFileUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTextOnlyByFileUsingPOSTParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.ResultListObject_>('/api/ocr/getByFile', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 通过url获取结果 POST /api/ocr/getTotalByUrl */
export async function getTotalByUrlUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTotalByUrlUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultListObject_>('/api/ocr/getTotalByUrl', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
