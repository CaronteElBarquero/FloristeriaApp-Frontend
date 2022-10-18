import { useState, useEffect } from "react";

import { useCategoryStore, useProductStore, useUiStore } from "../../../hooks";
import { useSelector } from 'react-redux';

import Modal from "react-modal";

import {
  FormControl, Grid, IconButton, Typography, TextField, Button, InputAdornment, MenuItem,
} from "@mui/material";

import { Save, Close, HighlightOff, PhotoCamera } from "@mui/icons-material";
import { Box } from "@mui/system";



import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";



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

    const { isDateModalOpen, closeDateModal } = useUiStore();
    const { categories } = useSelector(state => state.category);
    const { startLoadingCategory} = useCategoryStore();
    const { activeCreateProduct, activeUpdateProduct, activeProduct } = useSelector(state => state.product)
    const {startUpdateProduct, startSavingProduct  } = useProductStore();


    // const [categoryId, setCategoryId] = useState(null);

    // const handleCategoryChange = (event) => {
    //     setCategory(event.target.value);
    // };

    useEffect(() => {
      startLoadingCategory();
    }, [])

    // useEffect(() => {
    //   startLoadingCategory();
    //   setCategoryId(categories[0].id);
    // }, [categories])

  const [formValues, setFormValues] = useState({
    code: '',
    name: "",
    description: "",
    price: '',
    stock: '',
    category: '',
    image: "",
  });


  useEffect(() => {
      if(activeCreateProduct && !activeUpdateProduct){
        setFormValues({
        code: '',
        name: '',
        description: '',
        price: '',
        stock: '',
        category: 'default',
        image: '',
      });
    
    }
  }, [ activeProduct]);



  useEffect(() => {
    if(activeUpdateProduct && !activeCreateProduct) {
      setFormValues({
        code: activeProduct.code,
        name: activeProduct.name,
        description: activeProduct.description,
        price: activeProduct.price,
        stock: activeProduct.stock,
        category: activeProduct.category._id +  ' ' + activeProduct.category.name,
        image: activeProduct.image,
      });
    }
  }, [activeProduct])
  


  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    

    if ( formValues.name.length <= 0  ) {
      Swal.fire("Nombre Incorrecto", "El nombre es obligatorio", "error");
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
          sx={{ m: 1 }}
        >
          {
            activeCreateProduct ? 'Crear Producto' : 'Editar Producto'
          }
        </Typography>
      </Box>

      <form onSubmit={ onSubmit }>


    <Grid container spacing={0.5}>

        <Grid item xs={12} sm={5.5} sx={{ mt: 2, ml: 3, display: 'flex', flexDirection: 'row'}} >
            <Typography variant="h7" sx={{ ml: 1, mt: 4, mr: 0.5 }}>
              Codigo
            </Typography>
            <FormControl
              sx={{ m: 2, mt: 2.5, width: "90%" }}
              variant="outlined"
            >
              <TextField
                sx={{ width: 180 }}
                label="Codigo"
                type="text"
                // placeholder="categoria"
                name="code"
                value={formValues.code}
                onChange={onInputChanged}
              />
            </FormControl>
        </Grid>


        <Grid item xs={12} sm={5} sx={{ mt: 2, display: 'flex', flexDirection: 'row'}}  >
    
            <Typography variant="h7" sx={{ ml: 1, mt: 4, mr: 0.5 }}  >
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
                // placeholder="categoria"
                name="name"
                value={formValues.name}
                onChange={onInputChanged}
              />
            </FormControl>

        </Grid>


        <Grid item xs={12} sm={5.5} sx={{ mt: 2, ml: 3, display: 'flex', flexDirection: 'row'}} >
            <Typography variant="h7" sx={{ ml: 1, mt: 4, mr: 1 }}>
              Precio
            </Typography>
            <FormControl
              sx={{ m: 2, mt: 2.5, width: "90%" }}
              variant="outlined"
            >
              <TextField
                sx={{ width: 195 }}
                label="L 0.00"
                type="number"
                // placeholder="categoria"
                name="price"
                value={formValues.price}
                onChange={onInputChanged}
              />
            </FormControl>
        </Grid>


        <Grid item xs={12} sm={5} sx={{ mt: 2, display: 'flex', flexDirection: 'row'}}  >
    
            <Typography variant="h7" sx={{ ml: 2, mt: 4, mr: 1.5 }}  >
              Stock
            </Typography>
            <FormControl
              sx={{ m: 1, mt: 2.5, width: "90%" }}
              variant="outlined"
            >
              <TextField
                sx={{ width: 195 }}
                label="Stock"
                type="number"
                // placeholder="categoria"
                name="stock"
                value={formValues.stock}
                onChange={onInputChanged}
              />
            </FormControl>

        </Grid>

        <Grid item xs={12} sm={6} sx={{ mt: 0, display: 'flex', flexDirection: 'row'}}  >
    
            <Typography variant="h7" sx={{ ml: 2, mt: 4 }}  >
            Descripcion
            </Typography>
            <FormControl
                sx={{ m: 1, mt: 2.5, width: "%" }}
                variant="outlined"
            >
                <TextField
                    sx={{ width: 460 }}
                    label="Descripcion"
                    type="text"
                    // placeholder="categoria"
                    name="description"
                    value={formValues.description}
                    onChange={onInputChanged}
                />
            </FormControl>

        </Grid>

        <Grid item xs={12} sm={6} sx={{ mr: 2,  display: 'flex', flexDirection: 'row'}}  >
    
            <Typography variant="h7" sx={{ ml: 4, mt: 6.5, mr: 2 }}  >
                Categoria
            </Typography>
            <FormControl
                sx={{ m: 0.5, mt: 4, width: "80%" }}
                variant="outlined"
            >
            <TextField
                // id="outlined-select-currency"
               label="Categoria" 
              //  placeholder="Seleccione"
              //  id="select"
                select
                value={formValues.category}
                onChange={ onInputChanged }
                name="category"
                // helperText="Seleccione una categoria"
            >
              <MenuItem disabled={true} value={'default'}>Seleccione</MenuItem>
                {
                    categories?.map((cat) => (
                        <MenuItem 
                        key={cat.id} 
                        value={cat.id +" "+ cat.name}
                        // value={activeUpdateProduct ? cat.id : activeCreateProduct ? cat.id +" "+ cat.name : 'default'}

                        
                        >
                            {cat.name}
                        </MenuItem>
                    ))
                }

            </TextField>

            </FormControl>

        </Grid>
        

    </Grid>
    

            <IconButton
                sx={{ mt: 4, ml: 5, color: "primary.main" }} aria-label="upload picture" component="label"
                size="large"
            >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
            </IconButton>
    
    
            <Button 
              sx={{ mt: 4, ml: 8, color: "white", background: "linear-gradient(111deg, #FE6B8B 45%, #FF8E53 85%)" }}
              type="submit"
              startIcon={ <Save /> } 
            //   size="large"
              variant="contained"
            >

              Guardar
            </Button>
    
    
            <Button 
              sx={{ mt: 4, ml: 8, color: "white", background: "linear-gradient(111deg, #FE6B8B 45%, #FF8E53 85%)" }}
              startIcon={ <HighlightOff /> } 
            //   size="large"
              variant="contained"
              onClick={ onCloseModal }
            >
              Cerrar
            </Button>

        </form>
    </Modal>



    //   </form>
    // </Modal>
  );
};
