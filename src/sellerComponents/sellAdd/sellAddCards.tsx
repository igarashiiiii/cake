import {  Stack, TextField } from "@mui/material"

// import { useContext } from "react";
import { ProductInformations } from "../../globalState/globalProductInfo";
import { useForm, Controller} from "react-hook-form";
import { useContext, useEffect, useRef, useState } from "react";

export const SellAddCards = () => {
  // global stateのproductInfoの情報を取得
  let { productInfo, setProductInfo } = useContext(ProductInformations)

  //preview表示
  const [picture, setPicture] = useState()
  const [preview, setPreview] = useState()
  const {handleSubmit,control} = useForm({
    mode:"onSubmit",
  })
  const fileInputRef:any = useRef()
  useEffect(() => {
    if(picture){
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as any);
    };
    reader.readAsDataURL(picture)
  }
  },[picture])

  //onSubmitを押したときの処理
  // globalStateを更新する
  let addObject = {}
  const onSubmit = (newData:any) => {
    console.log(preview)
    addObject = {
      productId : 11,
      BuyerId:"",
      SellerId:0,
      productDescription:newData.productDescription,
      productPicture:{preview},
      productPrice:newData.productPrice,
      productStatus:'sell',
      productTradeDate:newData.productTradeDate,
      productTitle:newData.productTitle,
      productPlace:newData.productPlace,
      productQuantity:newData.productQuantity
     }
     const newProductInfo:any[] = [...productInfo, addObject]
    setProductInfo(newProductInfo)
  }

  

  return(
    <div >
      <div style={{margin:"auto"}}>
        <img alt="" src={preview}
        width="100%" height="250px"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          {/* 写真uploadボタン */}
          <button onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click()
          }}>
            Add Image
          </button>
          <input
            type="file"
            name="picture"
            ref={fileInputRef}
            style={{display:"none"}}
            accept="image/*"
            onChange={(event:any) => {
              const file:any = event.target.files[0]
              if(file && file.type.substr(0,5) === "image"){
                setPicture(file)
              }
            }}
          />

          {/* タイトル記入 */}
          <Controller
            render={
              ({ field }) => <TextField {...field}
              id="outlined-password-input"
              label="Title"
              required
          />}
            rules={{ required: true }}
            name="productTitle"
            control={control}
            defaultValue=""       
          />
          {/* 金額記入 */}
          <Controller
            render={
              ({ field }) => <TextField {...field}
              id="outlined-password-input"
              label="Price"
              fullWidth
              required
          />}
            rules={{ required: true }}
            name="productPrice"
            control={control}
            defaultValue=""       
          />
          {/* 場所記入 */}
          <Controller
            render={
              ({ field }) => <TextField {...field}
              id="outlined-password-input"
              label="Place"
              fullWidth
              required
          />}
            rules={{ required: true }}
            name="productPlace"
            control={control}
            defaultValue=""       
          />
          {/* 日時記入 */}
          <Controller
            render={
              ({ field }) => <TextField {...field}
              id="outlined-password-input"
              label="Date"
              fullWidth
              required
          />}
            rules={{ required: true }}
            name="productTradeDate"
            control={control}
            defaultValue=""       
          />
          {/* 商品説明記入 */}
          <Controller
            render={
              ({ field }) => <TextField {...field}
              id="outlined-password-input"
              label="Description"
              fullWidth
              required
              maxRows={8}
          />}
            rules={{ required: true }}
            name="productDescription"
            control={control}
            defaultValue=""       
          />

          {/* 送信ボタン       */}
          <input type="submit"/>
        </Stack>
      </form>
    </div>
  )
}