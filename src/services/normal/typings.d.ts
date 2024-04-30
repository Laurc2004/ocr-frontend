declare namespace API {
  type getAuthUsingPOSTParams = {
    /** code */
    code?: string;
  };

  type getTextOnlyByFileUsingPOSTParams = {
    /** filterType */
    filterType?: string;
    /** isAggregate */
    isAggregate?: boolean;
  };

  type getTotalByUrlUsingPOSTParams = {
    /** filterType */
    filterType?: string;
    /** isAggregate */
    isAggregate?: boolean;
    /** url */
    url?: string;
  };

  type LoginUserVO = {
    token?: string;
  };

  type RequestMsgEntity = {
    content?: string;
    createTime?: number;
    fromUserName?: string;
    msgId?: number;
    msgType?: string;
    picUrl?: string;
    toUserName?: string;
  };

  type ResponseMsgEntity = {
    content?: string;
    createTime?: number;
    fromUserName?: string;
    msgType?: string;
    toUserName?: string;
  };

  type ResultListObject_ = {
    code?: number;
    data?: Record<string, any>[];
    msg?: string;
  };

  type ResultLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    msg?: string;
  };

  type ResultUserEntity_ = {
    code?: number;
    data?: UserEntity;
    msg?: string;
  };

  type UserEntity = {
    id?: number;
    lines?: number;
    openid?: string;
  };

  type validateUsingGETParams = {
    /** appid */
    appid: string;
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
    /** signature */
    signature?: string;
    /** timestamp */
    timestamp?: string;
  };
}
