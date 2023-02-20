import React from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";

export function EditProductModal({
  open,
  handleClose,
  style,
  name,
  e,
  setName,
  price,
  setPrice,
  description,
  setDescription,
  handleSubmit,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          sx={{
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          EDIT PRODUCT DETAILS
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            required
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="product-name"
            label="Product Name"
            sx={{
              mb: "10px",
            }}
          />
          <TextField
            required
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="product-price"
            label="Price"
            type="number"
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={4}
            placeholder="Enter product description.."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: "100%",
              marginTop: "10px",
              border: "1px solid grey",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "1.1em",
            }}
          />
          <Button
            variant="contained"
            sx={{
              mt: "10px",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            sx={{
              mt: "10px",
              ml: "10px",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
