import { StaticImageData } from "next/image";


export interface Products {
    _id: string,
    productName : string,
    _type : "product";
    image?: {
        asset:{
            _ref : string;
            _type: "image";

            
        }
    }
    price : number;
    description : string;
    slug: {
        _type : "slug"
        current : string;
    }

}