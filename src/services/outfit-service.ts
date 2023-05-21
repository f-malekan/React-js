import create from "./http-service";

export interface Outfit {
    id: number;
    title: string;
    category:string;
    price:string
  }

  export default create('outfits')