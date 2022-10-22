import { useCategoryStore, useUiStore } from "../../../hooks";
import { CategoryPage } from "../../pages";

import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";

import {
  CreateNewFolder, DeleteForever, AutoFixHigh, Print, Edit,
} from "@mui/icons-material";


export const SpeelCategory = () => {

  const { openDateModal } = useUiStore();
  const { categories, setActiveCategory, startActiveCreateCategory } = useCategoryStore();

  //FUNCION PERMITE ABRIR EL MODAL PARA CREAR UNA NUEVA CATEGORIA
  const handleClickNew = () => {
    setActiveCategory({
      name: "",
      description: "",
      user: {
        _id: "123",
        name: "Fernando",
      },
    });
    startActiveCreateCategory();
    openDateModal();
  };

  const actions = [
    {
      icon: (
        <CreateNewFolder
          onClick={handleClickNew}
          sx={{ color: "secondary.main" }}
        />
      ),
      name: "CREAR",
    },
    // { icon: <AutoFixHigh sx={{ color: "secondary.main" }} />, name: "EDITAR" },
    // { icon: <Print sx={{ color: "secondary.main" }} />, name: "IMPRIMIR" },
    // {
    //   icon: <DeleteForever sx={{ color: "secondary.main" }} />,
    //   name: "ELIMINAR",
    // },
  ];

  return (
    <Box sx={{ height: "100vh", transform: "translateZ(0px)", flexGrow: 1 }}>
      {/* PAGINA DE CATEGORIA */}
      <CategoryPage />

      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: 795, right: "30px" }}
        icon={<SpeedDialIcon openIcon={<Edit />} />}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
