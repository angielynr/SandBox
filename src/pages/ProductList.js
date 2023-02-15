import React, { useState, useEffect } from "react";
import ProductService from "../Services/ProductService";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  TextareaAutosize,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    getProducts();
  }, [refreshKey]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getProducts = () => {
    ProductService.getAll().then((response) => {
      setProducts(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const productData = { name: name, description: description, price: price };
    ProductService.create(productData);

    setName("");
    setDescription("");
    setPrice("");
    setRefreshKey((oldKey) => oldKey + 1);
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" sx={{ mb: "10px" }} onClick={handleOpen}>
        Add Product
      </Button>

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
            sx={{ marginBottom: "20px", textAlign: "center" }}
          >
            PRODUCT DETAILS
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              required
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="product-name"
              label="Product Name"
              sx={{ mb: "10px" }}
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
              sx={{ mt: "10px" }}
              onClick={handleSubmit}
            >
              ADD PRODUCT
            </Button>
          </Box>
        </Box>
      </Modal>

      <TableContainer component={Paper} style={{ maxHeight: 600 }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductList;
