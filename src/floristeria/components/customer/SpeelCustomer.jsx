import {  useCustomerStore, useUiStore } from "../../../hooks";
import { CustomerPage } from "../../pages";

import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";


import {
  CreateNewFolder, DeleteForever, AutoFixHigh, Print, Edit,
} from "@mui/icons-material";


export const SpeelCustomer = () => {

  const { openDateModal } = useUiStore();
  const {  startActiveIdCustomer, startActiveCreateCustomer } = useCustomerStore();


  //FUNCION PERMITE ABRIR EL MODAL PARA CREAR UNA NUEVA CATEGORIA
  const handleClickNew = () => {

    startActiveIdCustomer({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      sonInLaw: "",
    });

    startActiveCreateCustomer();
    openDateModal();

  };

  const actions = [
    {
      icon: (
        <CreateNewFolder
          onClick={ handleClickNew }
          sx={{ color: "secondary.main" }}
        />
      ),
      name: "CREAR",
    },


  ];

  return (
    <Box sx={{ height: "100vh", transform: "translateZ(0px)", flexGrow: 1 }}>
      {/* PAGINA DE CATEGORIA */}
      <CustomerPage />

      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "relative", bottom: "880px", left: "560px" }}
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
