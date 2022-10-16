import { ProductPage } from '../../pages';

import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'
import { CreateNewFolder,  DeleteForever, FileCopy, AutoFixHigh, Save, Print, Share, Edit  } from '@mui/icons-material';
import { useUiStore } from '../../../hooks';





export const SpeelProduct = () => {
  
  
  const { openDateModal } = useUiStore();
  
  
  const handleClickProduct = () => {
    openDateModal();
  };
  
  const actions = [
    { icon: <CreateNewFolder onClick={ handleClickProduct } sx={{ color: 'secondary.main' }}  />, name: 'CREAR' },
    { icon: <AutoFixHigh sx={{ color: 'secondary.main' }} />, name: 'EDITAR' },
    { icon: <Print sx={{ color: 'secondary.main' }} />, name: 'IMPRIMIR' },
    { icon: < DeleteForever sx={{ color: 'secondary.main' }} />, name: 'ELIMINAR' },
  ];

  return (

    <Box sx={{ height: '100vh', transform: 'translateZ(0px)', flexGrow: 1 }}>
      
      {/* PAGINA DE PRODUCTOS */}
      <ProductPage />
      
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 410, right: '15px' }}
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
    </Box>

  );
}
