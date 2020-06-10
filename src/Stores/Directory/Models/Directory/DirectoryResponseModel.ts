import {BaseModel} from 'sjs-base-model';
import DirectoryModel from './DirectoryModel';

/*
    // Returned Api Data Sample
    {
      "data": null,
      "success": true,
      "errors": []
    }
 */
export default class DirectoryResponseModel extends BaseModel {

  public readonly data: [DirectoryModel] = [DirectoryModel as any];
  public readonly success: boolean = true;
  public readonly errors: string[] = [];


  constructor(data: Partial<DirectoryResponseModel>) {
    super();
    this.update(data);
  }

  public update(data: Partial<DirectoryResponseModel>): void {
    super.update(data);
  }

}
