import { BaseModel } from 'sjs-base-model';

/*
    // Returned Api Data Sample
    {
      "id": "b2aa3835-d0af-45a5-a80e-f9beccb6ba8b",
      "parentId": null,
      "name": "Work Orders",
      "url": "/WorkOrder",
      "icon": "WorkOrders",
      "description": null
      "children": []
    }
 */
export default class NavigationModel extends BaseModel {
  public readonly id: string = '';
  public readonly parentId: string = '';
  public readonly name: string = '';
  public readonly url: string = '';
  public readonly icon: string = '';
  public readonly description: string = '';
  public readonly children: NavigationModel[] = [NavigationModel as any];

  /*
   * Client-Side properties (Not from API)
   */

  constructor(data: Partial<NavigationModel>) {
    super();

    this.update(data);
  }

  public update(data: Partial<NavigationModel>): void {
    super.update(data);
  }
}
