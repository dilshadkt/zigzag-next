declare type FormValue = {
  page: {
    heading: string;
    image: FormData | null;
    description: string;
  }[];
  metaData: {
    title: string;
    description: string;
    keyword: string[];
    ogTitle: string;
    ogDescritpion: string;
    path: string;
  };
};

declare type TextEditor = {
  setvalue: any;
  getValues: any;
  index: number;
};

declare interface Content {
  photos: string;
  path: string;
  ogDescription: string;
  ogTitle: string;
  metaKeyWord: string;
  metaDescription: string;
  metaTitle: string;
  test: string;
  _id: string;
}
declare interface ContentPageProps {
  params: {
    path: string;
  };
}
