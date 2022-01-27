import axios, {create} from 'axios';

export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

/**
 * axios object
 */
const API = create({
  timeout: 60000,
});


/**
 * To perform api from class where this function/method is imported,
 * and send back completion in resolve or reject based on api response.
 */
export const request = (
  url: any,
  httpMethod: any,
  params: {},
  header = {},
) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log('<><><><><> start request <><><><><>');
      console.log('<><><><><> url <><><><><>', url);
      console.log('<><><><><> httpMethod <><><><><>', httpMethod);
      console.log('<><><><><> params <><><><><>', JSON.stringify(params));
      console.log('<><><><><> end request <><><><><>');

      switch (httpMethod) {
        // GET
        case HTTP_METHODS.GET:
          doGet(url, resolve, reject);
          break;

        // POST
        case HTTP_METHODS.POST:
          doPost(url, params, resolve, reject);
          break;

        // PUT
        case HTTP_METHODS.PUT:
          doPut(url, params, resolve, reject);
          break;

        // DELETE
        case HTTP_METHODS.DELETE:
          doDelete(url, params, resolve, reject);
          break;
      }
    } catch (error) {
      reject(error);
    }
  });

/**
 *  This function is used to parse response and send completion to handle resolve and reject value for parent Promise.
 * We can consider it as a child promise
 * @param {*} response
 */
export const parseResponse = (response: { status: number; data: { message: any; } | null; }) =>
  new Promise((parsedResponse) => {
    const isSuccess =
      response.status === 200 || response.status === 202 ? true : false; // 202 is used for Knet-checkout
    if (isSuccess) {
      parsedResponse({isSuccess: true, response: response});
    } else {
      let message = 'SOMETHING_WENT_WRONG';
      if (response.data != null && response.data.message) {
        message = response.data.message;
      }
      parsedResponse({isSuccess: false, message: message});
    }
  });

/***
 * This function is used for service request with GET as request type
 * and send back completion in resolve or reject based on parent Promise.
 * @param {*} url
 * @param {*} resolve
 * @param {*} reject
 * @param {*} config
 */
const doGet = (url: string, resolve: { (value: unknown): void; (arg0: { response: any; }): void; }, reject: { (reason?: any): void; (arg0: any): void; }) => {
  API.get(url)
    .then((response: any) => {
      parseResponse(response).then((parsedResponse: any) => {
        console.log('do Get parsedResponse-->', parsedResponse)
        if (parsedResponse.isSuccess) {
          resolve({response: parsedResponse.response});
        } else {
          reject(parsedResponse.message);
        }
      });
    })
    .catch((error: { response: { status: number; }; message: any; }) => {
      console.log('do Get Error-->', error);
      reject(error);
    });
};

/***
 * This function is used for service request with POST as request type
 * and send back completion in resolve or reject based on parent Promise.
 * @param {*} url
 * @param {*} resolve
 * @param {*} reject
 * @param {*} config
 */
const doPost = (url: string, params: any, resolve: { (value: unknown): void; (arg0: { response: any; }): void; }, reject: { (reason?: any): void; (arg0: any): void; }, config = {}) => {
  API.post(url, params, config)
    .then((response: any) => {
      parseResponse(response).then((parsedResponse: any) => {
        if (parsedResponse.isSuccess) {
          resolve({response: parsedResponse.response});
        } else {
          reject(parsedResponse.message);
        }
      });
    })
    .catch((error: { response: { status: number; }; message: any; }) => {
        reject(error);
    });
};

/***
 * This function is used for service request with PUT as request type
 * and send back completion in resolve or reject based on parent Promise.
 * @param {*} url
 * @param {*} resolve
 * @param {*} reject
 * @param {*} config
 */
const doPut = (url: string, params: any, resolve: { (value: unknown): void; (arg0: { response: any; }): void; }, reject: { (reason?: any): void; (arg0: any): void; }, config = {}) => {
  API.put(url, params, config)
    .then((response: any) => {
      parseResponse(response).then((parsedResponse: any) => {
        if (parsedResponse.isSuccess) {
          resolve({response: parsedResponse.response});
        } else {
          reject(parsedResponse.message);
        }
      });
    })
    .catch((error: { response: { status: number; }; message: any; }) => {
      reject(error);
    });
};

/***
 * This function is used for service request with DELETE as request type
 * and send back completion in resolve or reject based on parent Promise.
 * @param {*} url
 * @param {*} resolve
 * @param {*} reject
 * @param {*} config
 */
const doDelete = (url: string, params: any, resolve: { (value: unknown): void; (arg0: { response: any; }): void; }, reject: { (reason?: any): void; (arg0: unknown): void; }, config = {}) => {
  API.delete(url, config)
    .then((response: any) => {
      parseResponse(response).then((parsedResponse: any) => {
        console.log(`url ${url} response => ${JSON.stringify(response)}`);
        if (parsedResponse.isSuccess) {
          resolve({response: parsedResponse.response});
        } else {
          reject(parsedResponse);
        }
      });
    })
    .catch((error: { response: { status: number; }; message: any; }) => {
      reject(error.response);
    });
};

