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
import { useParams } from "react-router-dom";
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
  const { id } = useParams();

  useEffect(() => {
    loadProducts();
  }, [refreshKey]);

  useEffect(() => {
    if (id) getProductById(id);
  }, [id]);

  const handleOpenCreateProductModal = () => setOpenCreateProductModal(true);
  const handleCloseCreateProductModal = () => setOpenCreateProductModal(false);
  const handleOpenEditProductModal = () => setOpenEditProductModal(true);
  const handleCloseEditProductModal = () => setOpenEditProductModal(false);

  const loadProducts = async () => {
    await ProductService.getAll().then((response) => {
      setProducts(response.data);
    });
  };

  const getProductById = async (id) => {
    await ProductService.getProductById(id).then((response) => {
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

    const productData = { name: name, description: description, price: price };

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

    // const editData = {
    //   id: products.id,
    //   name: products.name,
    //   description: products.description,
    //   price: products.price,
    // };

    await ProductService.update(products.id, products);
    enqueueSnackbar("Updated Successfully", {
      autoHideDuration: 3000,
      variant: "success",
    });

    // setName("");
    // setDescription("");
    // setPrice("");
    setRefreshKey((oldKey) => oldKey + 1);
    setOpenCreateProductModal(false);
  };

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
                    onClick={handleOpenEditProductModal}
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

// function productProps({
//   open,
//   handleClose,
//   style,
//   name,
//   setName,
//   price,
//   setPrice,
//   description,
//   setDescription,
//   handleSubmit,
// }) {
//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box sx={style}>
//         <Typography
//           id="modal-modal-title"
//           variant="h5"
//           component="h2"
//           sx={{
//             marginBottom: "20px",
//             textAlign: "center",
//           }}
//         >
//           PRODUCT DETAILS
//         </Typography>
//         <Box component="form" noValidate autoComplete="off">
//           <TextField
//             required
//             fullWidth
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             id="product-name"
//             label="Product Name"
//             sx={{
//               mb: "10px",
//             }}
//           />
//           <TextField
//             required
//             fullWidth
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             id="product-price"
//             label="Price"
//             type="number"
//           />
//           <TextareaAutosize
//             aria-label="minimum height"
//             minRows={4}
//             placeholder="Enter product description.."
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             style={{
//               width: "100%",
//               marginTop: "10px",
//               border: "1px solid grey",
//               borderRadius: "5px",
//               padding: "10px",
//               fontSize: "1.1em",
//             }}
//           />
//           <Button
//             variant="contained"
//             sx={{
//               mt: "10px",
//             }}
//             onClick={handleSubmit}
//           >
//             Submit
//           </Button>
//           <Button
//             variant="outlined"
//             sx={{
//               mt: "10px",
//               ml: "10px",
//             }}
//             onClick={handleClose}
//           >
//             Cancel
//           </Button>
//         </Box>
//       </Box>
//     </Modal>
//   );
// }
