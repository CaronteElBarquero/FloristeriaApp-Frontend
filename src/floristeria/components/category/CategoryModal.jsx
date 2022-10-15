import { useState, useEffect } from "react";
import { useCategoryStore, useUiStore } from "../../../hooks";
import Modal from "react-modal";

import {
  Divider,
  OutlinedInput,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Typography,
  TextareaAutosize,
  TextField,
} from "@mui/material";

import { Save } from "@mui/icons-material";
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

export const CategoryModal = () => {
  const { isDateModalOpen, closeDateModal } = useUiStore();

  const { activeCategory, startSavingCategory, startActiveCreateCategory, startActiveUpdateCategory } = useCategoryStore();

  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (activeCategory !== null) {
      setFormValues({ ...activeCategory });
    }
  }, [activeCategory]);

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (formValues.name.length <= 0) {
      Swal.fire("Nombre Incorrecto", "El nombre es obligatorio", "error");
      return;
    }
    // console.log(formValues);
    // TODO:
    if (startActiveCreateCategory) {
      await startSavingCategory(formValues);
    }
    if (startActiveUpdateCategory) {
      // await startUpdateCategory(formValues);
      console.log('Se edito exitosamente');
    }

    closeDateModal();
  };

  const onCloseModal = () => {
    closeDateModal();
  };

  return (
    <Modal
      className="modal"
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
          Nueva Categoria
        </Typography>
      </Box>

      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid sx={{ mt: 2 }}>
            <Typography variant="h7" sx={{ ml: 2, mt: 1 }}>
              Nombre Categoria
            </Typography>
            <FormControl
              sx={{ m: 2, mt: 2.5, width: "95%" }}
              variant="outlined"
            >
              <TextField
                sx={{ width: 410 }}
                label="Categoria"
                type="text"
                placeholder="categoria"
                name="name"
                value={formValues.name}
                onChange={onInputChanged}
              />
            </FormControl>
          </Grid>

          <Grid sx={{ mt: 1.5 }}>
            <Typography variant="h7" sx={{ ml: 2 }}>
              Descripcion Categoria
            </Typography>
            <FormControl
              sx={{ m: 2, mt: 2.5, width: "95%" }}
              variant="outlined"
            >
              <TextField
                sx={{ width: 410 }}
                label="Descripcion"
                multiline
                name="description"
                value={formValues.description}
                onChange={onInputChanged}
              />
            </FormControl>
          </Grid>
        </Grid>

        <IconButton
          sx={{ mt: 1.5, ml: 1, color: "primary.main" }}
          type="submit"
        >
          <Save fontSize="large" />
        </IconButton>
      </form>
    </Modal>
  );
};
