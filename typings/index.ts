export interface NavBarPage {
  name: string;
  url: string;
}

export interface ResponseData<D = null> {
  error: boolean;
  message: string;
  data: D | null;
}
