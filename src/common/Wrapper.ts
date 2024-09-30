class Wrapper<T> {
  readonly result: T | T[];
  readonly message: string;
  readonly success?: boolean = false;

  constructor(result: T | T[], message: string, success: boolean = false){
    this.result = result;
    this.message = message;
    this.success = success;
  }
}