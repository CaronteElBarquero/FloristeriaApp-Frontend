import { useState, useEffect } from "react";

import { useCategoryStore, useProductStore, useUiStore } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";

import Modal from "react-modal";

import {
  FormControl,
  Grid,
  IconButton,
  Typography,
  TextField,
  Button,
  InputAdornment,
  MenuItem,
  Input

} from "@mui/material";

import CircularProgress from '@mui/material/CircularProgress';

import { Save, Close, HighlightOff, PhotoCamera, UploadOutlined } from "@mui/icons-material";
import { Box } from "@mui/system";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useRef } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-25%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const ProductModal = () => {

  const dispatch = useDispatch();

  const [profile, setProfile] = useState();

  const { isDateModalOpen, closeDateModal } = useUiStore();

  const { categories } = useSelector(state => state.category);

  const { startLoadingCategory } = useCategoryStore();

  const { activeCreateProduct, activeUpdateProduct, activeProduct, activeUploadImage, activeImage } = useSelector((state) => state.product);

  const { startUpdateProduct, startSavingProduct, startUploadingFiles, startImageUpload } = useProductStore();

  //SIMULANDO EL CLICK PARA SUBIR ARCHIVOS
  const fileInputRef = useRef();

  useEffect(() => {
    startLoadingCategory();
  }, []);

  // useEffect(() => {
  //   startLoadingCategory();
  //   setCategoryId(categories[0].id);
  // }, [categories])

  const [formValues, setFormValues] = useState({
    code: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: {
      public_id: "",
      secure_url: "",
    },
  });

  useEffect(() => {
    if (activeCreateProduct && !activeUpdateProduct) {
      setFormValues({
        code: "",
        name: "",
        description: "",
        price: "",
        stock: "",
        category: "default",
        image: {
          public_id: "",
          secure_url: "",
        },

      });
    }
  }, [activeProduct]);


  // console.log( activeProduct );

  useEffect(() => {
    if (activeUpdateProduct && !activeCreateProduct) {
      setFormValues({
        code: activeProduct.code,
        name: activeProduct.name,
        description: activeProduct.description,
        price: activeProduct.price,
        stock: activeProduct.stock,
        category:
          activeProduct.category?._id + " " + activeProduct.category?.name,
        image: activeProduct.image,
      });
    }
  }, [activeProduct]);

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (formValues.code.length <= 0 || formValues.name.length <= 0 || formValues.description.length <= 0 || formValues.price.length <= 0 || formValues.stock.length <= 0) {
      Swal.fire("Campos Obligatorios", "Todos los campos son obligatorio", "error");
      return;
    }

    // TODO:
    if (activeCreateProduct) {
      await startSavingProduct(formValues);
    }

    if (activeUpdateProduct) {
      await startUpdateProduct(formValues);
    }

    closeDateModal();
  };

  const onFileInputChange = ({ target }) => {

    if (target.files > 0) return;

    // TODO: agregar una imagen
    dispatch(startUploadingFiles(target.files));
    startImageUpload(true);

    // console.log( 'subiendo archivos' );
  }


  const onCloseModal = () => {
    closeDateModal();
  };

  return (
    <Modal
      className="modal-product"
      isOpen={isDateModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <Box
        sx={{
          background: "linear-gradient(111deg, #FE6B8B 45%, #FF8E53 85%)",
          color: "white",
          height: 30,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          align="center"
          fontSize="large"
          sx={{ m: 1, color: "white" }}
        >
          {activeCreateProduct ? "Crear Producto" : "Editar Producto"}
        </Typography>
      </Box>

      <form onSubmit={onSubmit}>
        <Grid container spacing={0.5}>
          <Grid
            item
            xs={12}
            sm={5.5}
            sx={{ mt: 1.5, ml: 3, display: "flex", flexDirection: "row" }}
          >
            <Typography variant="h7" sx={{ ml: 1, mt: 4, mr: 0.5 }}>
              Codigo
            </Typography>
            <FormControl
              sx={{ m: 2, mt: 2, width: "90%" }}
              variant="outlined"
            >
              <TextField
                sx={{ mt: 1, width: 180 }}
                label="Codigo"
                type="text"
                name="code"
                value={formValues.code}
                onChange={onInputChanged}
              />
            </FormControl>
          </Grid>

          <Grid
            item
            xs={12}
            sm={5}
            sx={{ mt: 1.5, mr: 1, display: "flex", flexDirection: "row" }}
          >
            <Typography variant="h7" sx={{ ml: 1, mt: 4, mr: 0.5 }}>
              Nombre
            </Typography>
            <FormControl
              sx={{ m: 1, mt: 2.5, width: "90%" }}
              variant="outlined"
            >
              <TextField
                sx={{ width: 180 }}
                label="Nombre"
                type="text"
                name="name"
                value={formValues.name}
                onChange={onInputChanged}
              />
            </FormControl>
          </Grid>

          <Grid
            item
            xs={12}
            sm={5.5}
            sx={{ mt: 1, ml: 3, display: "flex", flexDirection: "row" }}
          >
            <Typography variant="h7" sx={{ ml: 1.5, mt: 4, mr: 1 }}>
              Precio
            </Typography>
            <FormControl
              sx={{ m: 2, mt: 2.5, width: "90%" }}
              variant="outlined"
            >
              <TextField
                sx={{ width: 180 }}
                label="L 0.00"
                type="number"
                name="price"
                value={formValues.price}
                onChange={onInputChanged}
              />
            </FormControl>
          </Grid>

          <Grid
            item
            xs={12}
            sm={5}
            sx={{ mt: 1, display: "flex", flexDirection: "row" }}
          >
            <Typography variant="h7" sx={{ ml: 2.5, mt: 4, mr: 1.5 }}>
              Stock
            </Typography>
            <FormControl
              sx={{ m: 1, mt: 2.5, width: "90%" }}
              variant="outlined"
            >
              <TextField
                sx={{ width: 180 }}
                label="Stock"
                type="number"
                name="stock"
                value={formValues.stock}
                onChange={onInputChanged}
              />
            </FormControl>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{ ml: 10, display: "flex", flexDirection: "column" }}
          >
            <Typography textAlign="center" variant="h7" sx={{ ml: 20, mt: 0.5 }}>
              Descripcion
            </Typography>
            <FormControl sx={{ m: 1, mt: 1, width: "100%" }} variant="outlined">
              <TextField
                sx={{ width: '160%' }}
                label="Descripcion"
                type="text"
                name="description"
                value={formValues.description}
                onChange={onInputChanged}
              />
            </FormControl>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{ mr: 2, display: "flex", flexDirection: "row", ml: 12 }}
          >
            <Typography variant="h7" sx={{ ml: 4, mt: 3.5, mr: 2 }}>
              Categoria
            </Typography>
            <FormControl
              sx={{ m: 0.5, mt: 2, width: "80%" }}
              variant="outlined"
            >
              <TextField
                label="Categoria"
                select
                value={formValues.category}
                onChange={onInputChanged}
                name="category"
              >
                <MenuItem disabled={true} value={"default"}>
                  Seleccione
                </MenuItem>
                {categories?.map((cat) => (
                  <MenuItem
                    key={cat.id}
                    value={cat.id + " " + cat.name}
                  // value={activeUpdateProduct ? cat.id : activeCreateProduct ? cat.id +" "+ cat.name : 'default'}
                  >
                    {cat.name}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>
        </Grid>



        <input
          type="file"
          multiple
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={onFileInputChange}

        />

        {
          activeUploadImage ? (

            <CircularProgress sx={{ mt: 6, ml: 7, color: "primary.main" }} size={20} />
          ) :
            (
              <IconButton
                sx={{ mt: 6, ml: 7, color: "primary.main" }}
                onClick={() => fileInputRef.current.click()}
              >
                <UploadOutlined />
              </IconButton>
            )

        }

        <Button
          disabled={activeUploadImage}
          sx={{
            mt: 6, ml: 7, color: "white",
            background: "linear-gradient(111deg, #FE6B8B 45%, #FF8E53 85%)",
          }}
          type="submit"
          startIcon={<Save />}
          variant="contained"
        // onClick={ onFileInputChange }

        >
          Guardar
        </Button>

        <Button
          sx={{
            mt: 6, ml: 10, color: "white",
            background: "linear-gradient(111deg, #FE6B8B 45%, #FF8E53 85%)",
          }}
          startIcon={<HighlightOff />}
          variant="contained"
          onClick={onCloseModal}
        >
          Cerrar
        </Button>
      </form>
    </Modal>
  );
};
