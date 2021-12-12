import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, CardActions, TextField } from "@mui/material";
import swal from "sweetalert";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  hight: 100,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Popup = ({ open, handleClose }) => {
  const [name, setname] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [hobbies, sethobbies] = useState("");

  // handle button submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, phoneNumber, email, hobbies };

    // form data send to database
    axios
      .post("https://pacific-spire-20501.herokuapp.com/data", data)
      .then((response) => {
        if (response.data.insertedId) {
          handleClose();
          swal({
            icon: "success",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ width: "100%", pb: 2 }}
              id="standard-basic"
              label="NAME"
              variant="standard"
              required
              onBlur={(e) => setname(e.target.value)}
            />
            <TextField
              sx={{ width: "100%", pb: 2 }}
              id="standard-basic"
              label="PHONE NUMBER"
              variant="standard"
              required
              autoComplete="phone"
              onBlur={(e) => setphoneNumber(e.target.value)}
            />

            <TextField
              sx={{ width: "100%", pb: 2 }}
              id="standard-basic"
              label="EMAIL"
              variant="standard"
              required
              autoComplete="email"
              onBlur={(e) => setemail(e.target.value)}
            />
            <TextField
              sx={{ width: "100%", pb: 2 }}
              id="standard-basic"
              label="HOBBIES"
              variant="standard"
              required
              onBlur={(e) => sethobbies(e.target.value)}
            />

            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                type="submit"
                sx={{ px: 6, py: 1, mt: 8, mb: 8 }}
                variant="contained"
              >
                SAVE
              </Button>
            </CardActions>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default Popup;
