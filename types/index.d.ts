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

declare interface Experts {
  _id: string;
  image: string;
  name: string;
  role: string;
}

declare interface EditExpertProps {
  expert: Experts | undefined;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  isEdit: boolean;
  setData: React.Dispatch<Data[]>;
}

declare interface Data {
  _id: string;
  image: string;
  name: string;
  role: string;
}
