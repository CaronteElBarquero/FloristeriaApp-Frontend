export default function ClientDetails({ nroInvoice, clientName, clientAddress }) {
    return (
      <>
        <section className="mt-10">
          {/* <h2 className="text-1xl uppercase font-bold mb-1">Nombre: {clientName}</h2>
           */}
          <p>Nro Factura: <strong>{nroInvoice}</strong></p>
          <br />
          <p>Nombre: <strong>{clientName}</strong></p>
          <p>Direccion: <strong>{clientAddress}</strong></p>
        </section>
      </>
    )
  }
  