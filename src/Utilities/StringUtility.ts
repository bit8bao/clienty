import { camelCase, startCase } from 'lodash';

export default class StringUtility {

  public static toTitleCase(str: string): string {
    return startCase(camelCase(str));
  }

}
