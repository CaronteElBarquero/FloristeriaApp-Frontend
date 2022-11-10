export default function Notes({ notes }) {
    return (
      <>
        <section className="mt-10 mb-5">
          <h3 className="font-bold" >Nota adicional</h3>
          <p className="lg:w-1/2 text-justify">{notes}</p>
        </section>
      </>
    )
  }
  