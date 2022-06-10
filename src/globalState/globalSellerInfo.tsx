import { createContext, useState } from 'react';

export const sellerInformations = createContext<any>({});

let database:any = [
  {SellerId:0,
    SellerProductsId:1,
  },
  {SellerId:2,
    SellerProductsId:3,
  },
  {SellerId:3,
    SellerProductsId:4,
  },
  {SellerId:4,
    SellerProductsId:5,
  },
  {SellerId:5,
    SellerProductsId:6,
  },
  {SellerId:6,
    SellerProductsId:7,
  },
  {SellerId:7,
    SellerProductsId:8,
  },
  {SellerId:8,
    SellerProductsId:9,
  },
  {SellerId:10,
    SellerProductsId:0,
  },
  {SellerId:9,
    SellerProductsId:2,
  },
  {SellerId:8,
    SellerProductsId:3,
  },
]

export const GlobalSellerInfo = (props:any) => {
  const {children} = props;
  const [SellerInfo,setSellerInfo] = useState<any>(database)
  
  return(
  <sellerInformations.Provider value={{SellerInfo,setSellerInfo}}>
    {children}
  </sellerInformations.Provider>
  )
}