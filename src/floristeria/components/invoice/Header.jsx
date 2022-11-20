export default function Header({ handlePrint }) {
    return (
      <>
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            
            {/* LOGO */} 
            <center>
              {/* <h5 className="font-bold tracking-wide text-2xl mb-3">
                Floristeria NolyGifts
              </h5> */}
              <img src="http://localhost:3000/src/ui/data/NolyLogo.png" alt="logo" className="w-14 h-12 md: mt-2 " />
              {/* <b class="text-center"></b> */}
              <small className="font-bold text-uppercase" > noligifts honduras s.a de c.v</small><br />
              <small className="" >Colonia Campo cielo, Avenida Roble</small><br />
              <small className="" >Juticalpa, Olancho</small><br />
              <small>Direccion: Primera Calle Juticalpa</small><br />
              <small>R.T.N. No 02178946741</small><br />
              <small>Tel. (504) 9999-9999</small><br />
            </center>

          </div>
        </header>
      </>
    )
  }
  