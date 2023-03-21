import axios from 'axios';
import Cookie from 'js-cookie';

// 匹配域名正则
const ipRegex = /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g;
const cookieDomain = ipRegex.test(window.location.hostname) ? window.location.hostname : `.${window.location.hostname}`;
const ERROR_CODE_AUTH = 'AuthFailure.TGWMissToken';
const ERROR_CODE_TOKEN = 'AuthFailure.TokenFailure';

// 清除域名下的用户、签名信息
const clearDomainCookie = () => {
  Cookie.remove('token', { path: '/', domain: cookieDomain });
  Cookie.remove('user', { path: '/', domain: cookieDomain });
};

class ApiServer {
  initServer () {
    const http = axios.create({
      timeout: 20 * 60 * 1000,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'X-TC-Language': 'zh-CN'
      },
      withCredentials: true // 允许携带cookie
    });
    http.interceptors.request.use(
      (config) => {
        // @ts-ignore
        const tmpAction = config.url.slice(1);
        const myConfig = { ...config };
        myConfig.headers['X-TC-Titoken'] = Cookie.get('token') || '';
        myConfig.headers['X-TC-Timestamp'] = Math.round(new Date().getTime() / 1000).toString();
        myConfig.headers['X-TC-Action'] = tmpAction.split('?')[0];
        myConfig.headers['X-TC-Service'] = 'chat-service';
        // @ts-ignore
        myConfig.headers['Content-Type'] = config.contentType || 'application/json;charset=UTF-8';
        myConfig.url = `/${tmpAction}`;
        myConfig.data =
          (config.data && (typeof config.data === 'object' ? config.data : JSON.parse(config.data))) || {};
        return myConfig;
      },
      (error) => Promise.reject(error)
    );

    http.interceptors.response.use(
      // @ts-ignore
      (response) => {
        const { status, data, config } = response;
        // 跳转回登录页
        if (status === 401) {
          location.href = window.location.origin;
        }
        if (status === 200) {
          if (
            data.Response?.Error ||
            data.Error ||
            (data.Response?.OperateResponse && data.Response.OperateResponse.FailedReason !== 'success')
          ) {
            // 跳转回登录页
            if (
              data.Error?.Code === ERROR_CODE_AUTH ||
              data.Response?.Error?.Code === ERROR_CODE_AUTH ||
              data.Response?.Error?.Code === ERROR_CODE_TOKEN
            ) {
              clearDomainCookie();
              window.location.href = window.location.origin;
              return;
            }
            const msg =
              data.Error?.Message ||
              data.Response?.Error?.Message ||
              data.Response?.OperateResponse?.FailedReason;
            if (!config?.customError) {
              console.error(msg);
            }
            return Promise.reject(msg);
          }
          return Promise.resolve(response);
        }
      },
      (error) => {
        const { config } = error;
        const defaultText = '网络错误，请稍后重试'; // 可以通过弹窗抛出错误提示，后续可以根据自己需要
        if (error.message === 'Network Error') {
          return Promise.resolve({});
        }
        if (error.response) {
          const { status = 0 } = error.response;
          if (status) {
            if (!config?.customError) {
              console.error(defaultText);
            }
            return Promise.reject(error.response);
          }
        }
        if (!config?.customError) {
          console.error(defaultText);
        }
      }
    );
    return http;
  }
}
// INIT SERVER
export const http = new ApiServer().initServer();

// POST API
export const callApi = <P = Record<string, any>, R = Response>({
  action,
  payload,
  customConfig = {}
}: {
  action: string;
  payload: P;
  customConfig?: { [x: string]: object };
}): Promise<R> =>
    new Promise((resolve, reject) => {
      http
        .post(`/${action}`, payload, {
          headers: { 'X-TC-Version': '2022-03-02' }, // 默认为2022-03-20
          ...customConfig
        })
        .then(({ status, data }) => {
          if (status === undefined) return;
          if (status === 200 && !data?.Response?.Error) {
            resolve(data?.Response);
          } else {
            throw data?.info || data;
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

/**
 * Dodo
 * 目前仅增加post请求api，后续增加其他请求方式
 * get
 * put
 * update
 */
