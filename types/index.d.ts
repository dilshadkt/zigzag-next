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
  index: number;
};
