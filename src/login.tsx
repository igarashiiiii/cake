import React from 'react';

//import MUI icon from here
import InputUnstyled from '@mui/base/InputUnstyled';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Box from '@mui/material/Box/Box';
//import MUI icon to here


export const Login = ( ) => {
    return(
        <div>
            <Box
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItmes:'center'
                }}
            >
                <p>SMSを受信できる</p>
                <p>電話番号を入力してください</p>
                <InputUnstyled
                ></InputUnstyled>
                <ButtonUnstyled>確認コードを送信</ButtonUnstyled>
            </Box>
        </div>
    )
}


