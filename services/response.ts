import { AxiosError } from 'axios';

export interface IResponseValidationError {
  fieldName: string;
  errorMessage: string[];
}

export interface IResponseExceptionError {
  exceptionMessage: string;
  ticketNumber: string;
}

export interface IResponseError {
  ValidationError?: (err: any) => void;
  ServerError?: (err: IResponseExceptionError) => void;
  TokenExpired?: () => void;
  RequestError?: () => void;
}

export interface IResponseSuccessAndError extends IResponseError {
  Success?: <T>(res: T) => void;
  Error?: <T>(res: T) => void;
}

export interface IResponseSuccess extends IResponseError {
  Success?: <T>(res: T) => void;
}

export interface IResponseSuccessVoid extends IResponseSuccess {
  Success?: () => void;
}

let handle401 = () => {
  // console.log('401');
};

export const HandleError = (err: AxiosError, handler: IResponseError) => {
  console.log(err);

  err.request &&
    (() => {
      // handle request Error
      return handler.RequestError ? handler.RequestError() : handle401();
    })();

  err.response &&
    (() => {
      const e = err.response;
      switch (e.status) {
        case 400: {
          return handler.ValidationError(e.data as IResponseValidationError[]);
        }

        case 401: {
          return handler.TokenExpired ? handler.TokenExpired() : handle401();
        }

        default: {
          return handler.ServerError(e.data as IResponseExceptionError);
        }
      }
    })();
};
