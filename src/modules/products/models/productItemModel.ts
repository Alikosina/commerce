export interface ProductItemModel {
  id: number;
  code: number;
  link: string;
  imgUrl: string;
  availability: boolean;
  title: string;
  params: ProductParamModel[];
  inFav: boolean;
  inComparsion: boolean;
}

interface ProductParamModel {
  name: string;
  value: string;
}
