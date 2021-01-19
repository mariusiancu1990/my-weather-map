export class GetData {
    static readonly type = '[App] GetData';
  }
  
  export class SetData {
    static readonly type = '[App] SetData';
  
    constructor(public data: string) {}
  }