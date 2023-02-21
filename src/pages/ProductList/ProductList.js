import { CreateProductModal } from "./CreateProductModal";
import React, { useState, useEffect } from "react";
import ProductService from "../../Services/ProductService";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { EditProductModal } from "./EditProductModal";

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
  const [openCreateProductModal, setOpenCreateProductModal] = useState(false);
  const [openEditProductModal, setOpenEditProductModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const [selectedId, setSelectedId] = useState(0);

  const productData = {
    selectedId,
    name,
    price,
    description,
  };

  useEffect(() => {
    loadProducts();
  }, [refreshKey]);

  // useEffect(() => {
  //   if (selectedId) getProductById(selectedId);
  // }, []);

  // const getProductById = async (id) => {
  //   const result = await ProductService.getProductById(id);
  //   setProducts(result.data);
  //   console.log("getProductById", result.data);
  // };

  const loadProducts = async () => {
    await ProductService.getAll().then((response) => {
      setProducts(response.data);
    });
  };

  const deleteProduct = async (id) => {
    await ProductService.remove(id);
    setRefreshKey((oldKey) => oldKey + 1);
    enqueueSnackbar("Deleted Successfully", {
      autoHideDuration: 3000,
      variant: "info",
    });
  };

  const handleCreateSubmit = async (event) => {
    event.preventDefault();

    await ProductService.create(productData);
    enqueueSnackbar("Added Successfully", {
      autoHideDuration: 3000,
      variant: "success",
    });

    setName("");
    setDescription("");
    setPrice("");
    setRefreshKey((oldKey) => oldKey + 1);
    setOpenCreateProductModal(false);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    await ProductService.update(selectedId, productData);
    enqueueSnackbar("Updated Successfully", {
      autoHideDuration: 3000,
      variant: "success",
    });

    setRefreshKey((oldKey) => oldKey + 1);
    setOpenEditProductModal(false);
  };

  const handleOpenCreateProductModal = () => setOpenCreateProductModal(true);
  const handleCloseCreateProductModal = () => setOpenCreateProductModal(false);
  const handleOpenEditProductModal = (id) => {
    setOpenEditProductModal(true);
    setSelectedId(id);
  };

  const handleCloseEditProductModal = () => setOpenEditProductModal(false);

  return (
    <>
      <Button
        variant="contained"
        sx={{ mb: "10px" }}
        onClick={handleOpenCreateProductModal}
      >
        Add Product
      </Button>

      <CreateProductModal
        open={openCreateProductModal}
        handleClose={handleCloseCreateProductModal}
        style={style}
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        description={description}
        setDescription={setDescription}
        handleSubmit={handleCreateSubmit}
      />

      <EditProductModal
        open={openEditProductModal}
        handleClose={handleCloseEditProductModal}
        style={style}
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        description={description}
        setDescription={setDescription}
        handleSubmit={handleEditSubmit}
      />

      <TableContainer component={Paper}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell></TableCell>
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
                <TableCell>
                  <Button
                    variant="outlined"
                    sx={{ mr: "5px" }}
                    onClick={() => handleOpenEditProductModal(product.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductList;
