export class ApiResponse<T> {
  constructor(
    public success: boolean,
    public message: string,
    public data?: T,
  ) {}

  static success<T>(data: T, message = 'Success'): ApiResponse<T> {
    return new ApiResponse<T>(true, message, data);
  }

  static error<T>(message: string, data?: T): ApiResponse<T> {
    return new ApiResponse<T>(false, message, data);
  }
}
