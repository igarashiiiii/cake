import { createContext, useState } from 'react';

export const buyerInformations = createContext<any>({});

let database:any = [
  {BuyerId:0,
    BuyerProductsId:1,
  },
  {BuyerId:2,
    BuyerProductsId:3,
  },
  {BuyerId:3,
    BuyerProductsId:4,
  },
  {BuyerId:4,
    BuyerProductsId:5,
  },
  {BuyerId:5,
    BuyerProductsId:6,
  },
  {BuyerId:6,
    BuyerProductsId:7,
  },
  {BuyerId:7,
    BuyerProductsId:8,
  },
  {BuyerId:8,
    BuyerProductsId:9,
  },
  {BuyerId:10,
    BuyerProductsId:0,
  },
  {BuyerId:9,
    BuyerProductsId:2,
  },
  {BuyerId:8,
    BuyerProductsId:3,
  },
]

export const GlobalBuyerInfo = (props:any) => {
  const {children} = props;
  const [buyerInfo,setbuyerInfo] = useState<any>(database)
  
  return(
  <buyerInformations.Provider value={{buyerInfo,setbuyerInfo}}>
    {children}
  </buyerInformations.Provider>
  )
}