import { ReactComponent as Folder } from '../../../assets/images/filetype/folderType.svg';
import { ReactComponent as File } from '../../../assets/images/filetype/file.svg';


import StatusFileEnum from '../../../Constants/StatusFileEnum';
import { FunctionComponent, SVGProps } from 'react';

export const statusIcons: Record<
    StatusFileEnum,
  FunctionComponent<SVGProps<SVGSVGElement>>
> = {
  [StatusFileEnum.Folder]: Folder,
  [StatusFileEnum.File]: File,
};
