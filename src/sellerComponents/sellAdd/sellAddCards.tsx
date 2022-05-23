import { Button, Input, Paper, TextField } from "@mui/material"
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

//画像アップロードのinput要素を非表示にする
let upload = {
  display: 'none',
}

export const SellAddCards = () => {
  return(
    <div>
      <label htmlFor="image">
        <Paper elevation={3}
          sx={{
          }}
        >
          <AddPhotoAlternateOutlinedIcon fontSize="large"/>
        </Paper>
      </label>
      <input
          style={upload}
          accept="image/*"
          type="file"
          id='image'
      />
      <TextField
        id="outlined-password-input"
        label="Title"
        autoComplete="current-password"
        fullWidth
      />
      <TextField
        id="outlined-password-input"
        label="Price"
        autoComplete="current-password"
        fullWidth
      />
      <TextField
        id="outlined-password-input"
        label="Place"
        autoComplete="current-password"
        fullWidth
      />
      <TextField
        id="outlined-password-input"
        label="date"
        autoComplete="current-password"
        fullWidth
      />
      <TextField
        id="outlined-password-input"
        label="description"
        autoComplete="current-password"
        maxRows={8}
        fullWidth
        multiline
      />
      <Button>
        出品
      </Button>
    </div>
  )
}