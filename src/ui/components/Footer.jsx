


import { Facebook, Instagram, Mail,  Phone, Room,  WatchLaterSharp, WhatsApp } from '@mui/icons-material';
import { Button } from '@mui/material';
import styled from 'styled-components';
// import { Home, ProductionQuantityLimits, Wysiwyg  } from '@mui/icons-material';
import { mobile } from '../helpers/responsive';



const Container = styled.div`
  display: flex;
  background-color: #F2F2F2F2;
  width: 100%;
  margin-top: 60px;
  ${mobile({flexDirection: "column"})}
    
`;

const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  padding: 20px;
    
`;

const SocialContainer = styled.div`
  display:flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 45%;
  color:white;
  background-color: #${(props)=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor:pointer;

  a{
    color:inherit;
    text-decoration: none;
  };
`;


const Center = styled.div`
  flex:1;
  padding:20px;
  ${mobile({display: "none"})}  
`;

const Title = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: lighter;
  margin-bottom: 10px;

`;

const SimpleText = styled.a`
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  font-weight: lighter;
`;


const Right = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  ${mobile({backgroundColor: "white"})}

    
`;

const ContactItem = styled.div`
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  color: black;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const SubsItem = styled.input`
  display: flex;
  border-radius: 5px;
  padding: 5px;
  width: 250px;
  height: 25px;
  border-color: grey;

`;
  
const MailAlert = styled.a`
  color:red;
  font-family: 'Raleway', sans-serif;
  font-weight: lighter;
`


const PaymentMethods = styled.img`
  margin-right: 20px;
`;

const ButtonSubs = styled.button`
  border-radius: 5px;
  width: 100px;
  height: 40px;
  align-content: center;
  margin-top: 15px;
  cursor: pointer;
`





export const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>CONTACTO</Title>
        
          <ContactItem><Room/>
          &nbsp;&nbsp;Direccion: Campamento, Olancho, Honduras.
          </ContactItem>
          
          <ContactItem><Mail/>
          &nbsp;&nbsp;Correo: Nolygifts@gmail.com
          </ContactItem>  

          <ContactItem><Phone/>
          &nbsp;&nbsp;WhatsApp: +504 9999 9999
                    +504 3333 3333 
          </ContactItem>
          
          <ContactItem>
            <WatchLaterSharp />
            &nbsp;
                Horarios: Lunes a Viernes 9:00 AM a 6.00 PM 

          </ContactItem>
      </Left>
      <Center>
        <Title>
          PAGOS
        </Title>
        <PaymentMethods src="https://res.cloudinary.com/dwozn2lvh/image/upload/v1666755375/Logos/visa-logo_el6ylh.png" width={70} />
        <PaymentMethods src="https://res.cloudinary.com/dwozn2lvh/image/upload/v1666755375/Logos/mastercard-logo_tiyvdu.png" width={55}/>
        <PaymentMethods src="https://res.cloudinary.com/dwozn2lvh/image/upload/v1666755375/Logos/amex-logo_ljf86a.png" width={50} />

        <Title>REDES SOCIALES</Title>
        <SocialContainer>
          <SocialIcon color="4968AD">
          <a href='https://www.facebook.com/Nolygifts/' target="_blank" rel="nopener noreferrer">
            <Facebook></Facebook>
            </a>

          </SocialIcon>
          <SocialIcon color="E4406F">
          <a href='https://www.instagram.com/nolygifts/' target="_blank" rel="nopener noreferrer">
           
            <Instagram></Instagram>
            </a>
          </SocialIcon>
          
          <SocialIcon color="25D366">
            <a href="https://api.whatsapp.com/send/?phone=50499322558&text&type=phone_number&app_absent=0" target="_blank"
            rel="nopener noreferrer">
            <WhatsApp></WhatsApp>
            </a>
          </SocialIcon>
        </SocialContainer>
       
      </Center>
      <Right>
        <Title>SUSCRIPCIÓN</Title>
        <SimpleText>Suscribete para informarte sobre nuestros productos y promociones</SimpleText>
        <br></br>
        <MailAlert>Ingresa tu correo electrónico*</MailAlert>
        <br></br>
        <SubsItem></SubsItem>
        <Button
          variant='contained'
          sx={{ width: '64%', height: '30px', marginTop: '10px', backgroundColor: 'secondary', color: 'white', borderRadius: '5px' }}
        >
          Suscribirse
        </Button>
      </Right>


    </Container>
    
  )
};

