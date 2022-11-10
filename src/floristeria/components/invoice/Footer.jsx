export default function Footer({
    name,
    email,
    website,
    phone,
    bankAccount,
    bankName,
  }) {
    return (
      <>
        <footer className="footer border-t-2 border-gray-300 pt-5">
          {/* <ul className="flex flex-wrap items-center justify-center">
            <li>
              <span className="font-bold">Nombre:</span> {name}
            </li>
            <li>
              <span className="font-bold">Correo:</span> {email}
            </li>
            <li>
              <span className="font-bold">Telefono:</span> {phone}
            </li>
            <li>
              <span className="font-bold">Banco:</span> {bankName}
            </li>
            <li>
              <span className="font-bold">Cuenta de banco:</span> {name}
            </li>
            <li>
              <span className="font-bold">Numero de cuenta:</span> {bankAccount}
            </li>
            <li>
              <span className="font-bold">Sitio Web:</span>{" "}
              <a href={website} target="_blank" rel="noopenner noreferrer">
                {website}
              </a>
            </li>
          </ul> */}

          <div>
            <center>
              <small className="" > *** Codigo de Moneda = LEMPIRAS ***</small><br />
              <small> ¿Preguntas, comentarios y/o sugerencias</small><br />
              <small> Comuniquese con nosotros: </small><br />
              <small> nolygiftshn.com </small><br />
            </center>
          </div>
        </footer>
      </>
    )
  }
  