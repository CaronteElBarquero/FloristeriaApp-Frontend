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

    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      //calcule la posicion del boton con calc(100% - 56px)

      sx={{ position: 'absolute', bottom: `calc(536-240)`, right: 16, }}
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

  );
};
