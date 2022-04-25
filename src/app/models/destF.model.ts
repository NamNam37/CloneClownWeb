import { FTP } from './FTP.model';
import { Configs } from './configs.model';

export class DestF {
  public id: number = 0;
  public configID: number = 0;
  public path: string = "";
  public type: string = "";
  public ftp: FTP = new FTP();
  public config: Configs = new Configs();
}