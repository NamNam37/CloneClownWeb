import { DestF } from './destF.model';

export class FTP {
  public id: number = 0;
  public destID: number = 0;
  public login: string = "";
  public password: string = "";
  public hostname: string = "";
  public destF: DestF = new DestF();
}