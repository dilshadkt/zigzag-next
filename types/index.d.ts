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

declare interface ServiceParams {
  params: {
    service: string;
  };
}

declare interface Offer {
  image: string;
  link: string;
  status: boolean;
  _id: string;
}
declare interface OfferProps {
  offer: Offer;
  setOffers: React.Dispatch<Offer[]>;
  offers: Offer[];
}

declare interface contactModalPropos {
  onClose: React.Dispatch<boolean>;
  isOpen: boolean;
}
declare interface CareeProps {
  title: string;
  experience: string;
  deadline: string;
  skill: string;
}
declare interface CareerFormProps {
  jobs: CareeProps[];
  isVisible: boolean;
}
