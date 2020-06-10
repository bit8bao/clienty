import {BaseModel} from 'sjs-base-model';

export default class DirectoryModel extends BaseModel {

  public readonly fileSystemId: string = '';
  public readonly fileTypeName: string = '';
  public readonly fileType: string = '';

  constructor(data: Partial<DirectoryModel>) {
    super();
    this.update(data);
  }

  public update(data: Partial<DirectoryModel>): void {
    super.update(data);
  }

}
