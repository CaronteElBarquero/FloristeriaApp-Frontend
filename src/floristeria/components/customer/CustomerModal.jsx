import { useState, useEffect } from "react";

import { useCategoryStore, useCustomerStore, useProductStore, useUiStore } from "../../../hooks";
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

export const CustomerModal = () => {

  const dispatch = useDispatch();


  const { isDateModalOpen, closeDateModal } = useUiStore();

  const { activeCustomer, activeUpdateCustomer, customers, activeCreateCustomer } = useSelector( state => state.customer );

  const { startSavingCustomer, startUpdateCustomer } = useCustomerStore();

  const { openDateModal } = useUiStore();



  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    sonInlaw: "",

  });
  

  useEffect(() => {
    if ( activeCreateCustomer && !activeUpdateCustomer ) {
      setFormValues({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        sonInlaw: "",
        
      });
    }
  }, [activeCustomer]);


  // console.log( activeProduct );

  useEffect(() => {
    if ( activeUpdateCustomer && !activeCreateCustomer ) {
      setFormValues({
        name: activeCustomer.name,
        lastName: activeCustomer.lastName,
        email: activeCustomer.email,
        phone: activeCustomer.phone,
        sonInlaw: activeCustomer.sonInlaw,
      });
    }
  }, [activeCustomer]);
  

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };


  const onSubmit = async (event) => {
    event.preventDefault();

    if ( formValues.name.length <= 0 || formValues.lastName.length <= 0 || formValues.email.length <= 0 ) {
      Swal.fire("Campos Obligatorios", "Todos los campos son obligatorio", "error");
      return;
    }

    // TODO:
    if (activeCreateCustomer) {
      await startSavingCustomer(formValues);
    }

    if (activeUpdateCustomer) {
      await startUpdateCustomer(formValues);
    }

    

    closeDateModal();
  };


  const onCloseModal = () => {
    closeDateModal();
  };

  return (
    <Modal
      className="modal-customer"
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
          {activeCreateCustomer ? "Crear Cliente" : "Editar Cliente"}
        </Typography>
      </Box>

      <form onSubmit={onSubmit}>
        <Grid container spacing={0.5}>
          <Grid
            item
            xs={12}
            sm={5.5}
            sx={{ mt: 1.5, ml: 1.3, display: "flex", flexDirection: "row" }}
          >
            <Typography variant="h7" sx={{ ml: 1, mt: 4, mr: 0.5 }}>
              Nombre
            </Typography>
            <FormControl
              sx={{ m: 1, mt: 2, width: "90%" }}
              variant="outlined"
            >
              <TextField
                sx={{ mt: 1, width: 180 }}
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
            sm={5}
            sx={{ mt: 2, mr: 1, display: "flex", flexDirection: "row" }}
          >
            <Typography variant="h7" sx={{ ml: 2, mt: 4, mr: 0.5 }}>
              Apellido
            </Typography>
            <FormControl
              sx={{ m: 1, mt: 2, width: "90%" }}
              variant="outlined"
            >
              <TextField
                sx={{ width: 180 }}
                label="Apellido"
                type="text"
                name="lastName"
                value={formValues.lastName}
                onChange={onInputChanged}
              />
            </FormControl>
          </Grid>

          <Grid
            item
            xs={12}
            sm={5.5}
            sx={{ mt: 1.5, ml: 1.3, display: "flex", flexDirection: "row" }}
          >
            <Typography variant="h7" sx={{ ml: 1.5, mt: 4, mr: 1 }}>
              Correo
            </Typography>
            <FormControl
              sx={{ m: 1, mt: 2, width: "90%" }}
              variant="outlined"
            >
              <TextField
                sx={{ width: 180 }}
                label="@gmail.com"
                type="email"
                name="email"
                value={formValues.email}
                onChange={onInputChanged}
              />
            </FormControl>
          </Grid>

          <Grid
            item
            xs={12}
            sm={5}
            sx={{ mt: 2, mr: 1, display: "flex", flexDirection: "row" }}
          >
            <Typography variant="h7" sx={{ ml: 2, mt: 4, mr: 0.5 }}>
              Telefono
            </Typography>
            <FormControl
              sx={{ m: 1, mt: 2, width: "90%" }}
              variant="outlined"
            >
              <TextField
                sx={{ width: 180 }}
                label="9999-9999"
                type="text"
                name="phone"
                value={formValues.phone}
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
              Sexo
            </Typography>

            <FormControl
              sx={{ m: 0.5, mt: 2, width: "80%" }}
              variant="outlined"
            >
              <TextField
                label="Sexo"
                select
                value={formValues.sonInlaw}
                onChange={ onInputChanged }
                name="sonInlaw"
              >
                <MenuItem disabled={true} value={"default"}>Seleccione</MenuItem>
                <MenuItem value={"Masculino"}>Masculino</MenuItem>
                <MenuItem value={"Femenino"}>Femenino</MenuItem>

              </TextField>
            </FormControl>
          </Grid>
        </Grid>

        <Button
          sx={{
            mt: 6, ml: 15, color: "white",
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
