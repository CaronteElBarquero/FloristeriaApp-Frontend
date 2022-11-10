export default function ClientDetails({ clientName, clientAddress }) {
    return (
      <>
        <section className="mt-10">
          {/* <h2 className="text-1xl uppercase font-bold mb-1">Nombre: {clientName}</h2>
           */}
          <p>Nombre: <strong>{clientName}</strong></p>
          <p>Direccion: <strong>{clientAddress}</strong></p>
        </section>
      </>
    )
  }
  