export interface IImageGridItem {
  id: string;
  evenGridItem?: boolean;
  name: string;
  imageUrlSmall: string;
  linkUrl?: string;
  onClick?: (itemId: string) => void;
}
