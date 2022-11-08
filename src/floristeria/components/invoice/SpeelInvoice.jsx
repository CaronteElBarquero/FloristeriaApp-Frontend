import {  useCustomerStore, useUiStore } from "../../../hooks";
// import { CustomerPage } from "../../pages";

import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";


import {
  CreateNewFolder, DeleteForever, AutoFixHigh, Print, Edit,
} from "@mui/icons-material";

import { InvoicePage } from "../../pages";


export const SpeelInvoice = () => {

  const { openDateModal } = useUiStore();
  const {  startActiveIdCustomer, startActiveCreateCustomer } = useCustomerStore();


  //FUNCION PERMITE ABRIR EL MODAL PARA CREAR UNA NUEVA CATEGORIA
  const handleClickNew = () => {

    // startActiveIdCustomer({
    //   name: "",
    //   lastName: "",
    //   email: "",
    //   phone: "",
    //   sonInLaw: "",
    // });

    // startActiveCreateCustomer();
    openDateModal();
    // console.log("hola");

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
      <InvoicePage />

      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: 700, right: "30px" }}
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
