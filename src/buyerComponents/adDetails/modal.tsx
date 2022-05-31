
import { Box, Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import React from "react";
import { Link } from 'react-router-dom';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export  const ShowModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">Order</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style, width: '70%' }}>
          <h2 id="parent-modal-title">オーダー完了</h2>
          <p id="parent-modal-description">
            商品の注文が完了しました。
          </p>
          <Button variant="outlined">
            <Link to="/">Topへ戻る</Link>
          </Button>
        </Box>
      </Modal>
    </div>
  );
}