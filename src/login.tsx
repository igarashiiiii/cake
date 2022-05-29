import React from 'react';

//import MUI icon from here
import { Button, Container,Stack, TextField } from '@mui/material';
//import MUI icon to here


export const Login = ( ) => {
    return(
        <div
				>
							<Container maxWidth="sm" sx= {{pt: 5 }}>
									<Stack spacing={3}>
										<div>ログインパスワードをSMSで送ります<br />
										電話番号を入力してください</div>
										<TextField required label="電話番号" />
										<Button variant="outlined">確認コードを送信</Button>
									</Stack>
								</Container>
        </div>
    )
}


