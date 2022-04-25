import { Configs } from './configs.model';
import { Logs } from './logs.model';

export class Users {
  public id: number = 0;
  public username: string = "";
  public mac: string = "";
  public ip: string = "";
  public online: boolean = false;
  public last_backup: Date = new Date();
  public configs: Configs[] = [];
  public logs: Logs[] = [];
}