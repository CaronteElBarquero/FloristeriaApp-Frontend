import { ProductPage } from '../../pages';

import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'
import { CreateNewFolder, DeleteForever, FileCopy, AutoFixHigh, Save, Print, Share, Edit } from '@mui/icons-material';
import { useProductStore, useUiStore } from '../../../hooks';





export const SpeelProduct = () => {


  const { openDateModal } = useUiStore();
  const { startActiveCreateProducto, setActiveProduct, startIdActiveProduct, startDataImageUpload } = useProductStore();

  const handleNewProduct = () => {
    startIdActiveProduct({
      code: '',
      name: "",
      description: "",
      price: '',
      stock: '',
      category: "default",
      image: {
        public_id: '',
        secure_url: '',
      },
    });
    startDataImageUpload({
      public_id: '',
      secure_url: '',
    })
    startActiveCreateProducto();
    openDateModal();

  };

  const actions = [
    { icon: <CreateNewFolder onClick={handleNewProduct} sx={{ color: 'secondary.main' }} />, name: 'CREAR' },
    // { icon: <AutoFixHigh sx={{ color: 'secondary.main' }} />, name: 'EDITAR' },
    // { icon: <Print sx={{ color: 'secondary.main' }} />, name: 'IMPRIMIR' },
    // { icon: < DeleteForever sx={{ color: 'secondary.main' }} />, name: 'ELIMINAR' },
  ];

  return (

    <SpeedDial
      ariaLabel="SpeedDial openIcon example"
      sx={{ position: 'absolute', bottom: `calc(536-240)`, right: 16, }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
      direction='down'
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
}
