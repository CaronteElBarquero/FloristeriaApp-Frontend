import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useInvoiceStore, useProductStore } from "../../../hooks"

import ClientDetails from "./ClientDetails"
import Dates from "./Dates"
import Footer from "./Footer"
import Header from "./Header"
import MainDetails from "./MainDetails"
import Notes from "./Notes"
import Table from "./Table"
import TableForm from "./TableForm"
import ReactToPrint from "react-to-print"
import { DraweBar } from "../../../ui/components"
import { toast, ToastContainer } from "react-toastify"
import moment from "moment"

// import '../../../style/style_tail.css'








export const CreateInvoice = () => {

  const [nroInvoice, setNroInvoice] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [idProducto, setIdProduct] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [discount, setDiscount] = useState(0)
  const [amount, setAmount] = useState(0)
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [isv, setIsv] = useState(0.15)


  const { startSavingInvoice, startDeleteInvoice } = useInvoiceStore();
  const { activeInvoice, activeCreateInvoice } = useSelector((state) => state.invoice);

  const { products } = useSelector(state => state.product)
  const { startUpdateProduct, startUpdateInvoice, startLoadingProduct } = useProductStore();



  const [totalDiscount, setTotalDiscount] = useState(0)
  const [width] = useState(641)
  const navigate = useNavigate();


  const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }


  const toVentas = () => {
    navigate("/invoice")
  }


  // useEffect(() => {
  //   if (window.innerWidth < width) {
  //     // alert("Place your phone in landscape mode for the best experience")
  //   }
  // }, [width])




  const handleSave = () => {

    if (activeCreateInvoice && list.length > 0) {
      startSavingInvoice({
        //guardar el id del producto en la list

        product: [...list.map(item => item.id)],
        nroInvoice,
        invoiceDate,
        dueDate,
        discount: totalDiscount,
        notes,
        total

      })

      startLoadingProduct();

      //restar la cantidad de productos vendidos de la cantidad de productos en stock y split


      //actualizar la cantidad de los productos en stoc



      products.map(product => {

        const productInList = list.find(item => item.id === product.id)

        if (productInList) {

          startUpdateInvoice({ ...product, stock: product.stock - productInList.quantity });

        }
      })
      toast.success("Factura guardada con exito")

    } else {

      toast.error("Los campos son necesarios")

    }

    setNroInvoice("")
    setTotal(0);
    setTotalDiscount(0);
    setList([]);
    setClientName("");
    setClientAddress("");
    setInvoiceNumber("");
    setInvoiceDate("");
    setDueDate("");
    setNotes("");
    setIdProduct("");
    setQuantity("");
    setPrice("");
    setDiscount(0);
    setAmount(0);
    setIsv(0.15);

  }



  return (

    <>
      <main className="m-1 p-4 xl:grid grid-cols-2 gap-6 xl:items-start ">

        <section>

          <div className="bg-white p-5 rounded shadow ">

            <div className=" flex">

              <button className=" mr-5 relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600"
                onClick={toVentas}
              >
                <span className="relative text-sm text-white">Volver</span>
                <div className="flex items-center -space-x-3 translate-x-3">
                  <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke  -translate-x-2 transition duration-300 group-hover:translate-x-0" color="white" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                    <path strokeLinecap="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              <button className=" ml-5 relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600"
                onClick={handleSave}
              >
                <span className="relative text-sm text-white">Guardar</span>
                <svg className="w-6 h-6" fill="currentColor" color="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1H8a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1V9z" fillRule="evenodd" /></svg>
              </button>
            </div>


            <div className="flex flex-col justify-center">


              <article className="md:grid grid-cols-3 gap-10 md:mt-16">

                <div className="flex flex-col">
                  <label htmlFor="nroInvoice">Nro.  de factura</label>
                  <input
                    type="text"
                    name="nroInvoice"
                    id="nroInvoice"
                    placeholder="Nro."
                    autoComplete="off"
                    value={nroInvoice}
                    onChange={(e) => setNroInvoice(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientName">Nombre del cliente</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Nombre del cliente"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                    Direccion del cliente
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Direccion del cliente"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Telefono</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Telefono"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Fecha Venta</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Fecha Exp</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              {/* This is our table form */}
              <article>
                <TableForm
                  idProduct={idProducto}
                  setIdProduct={setIdProduct}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  discount={discount}
                  setDiscount={setDiscount}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  totalDiscount={totalDiscount}
                  setTotalDiscount={setTotalDiscount}
                  isv={isv}
                  setIsv={setIsv}
                  total={total}
                  setTotal={setTotal}
                />
              </article>

              <label htmlFor="notes">Nota adicional</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Agregar una nota adicional al cliente"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              {/* <button
              onClick={() => setShowInvoice(true)}
              className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Preview Invoice
            </button> */}
            </div>
          </div>
          <article className="mt-5">
          </article>
        </section>

        {/* Invoice Preview */}
        <div className="invoice__preview bg-white p-5 rounded">
          <ReactToPrint
            trigger={() => (
              <button className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600">
                <span className="relative text-sm text-white">Imprimir / Descargar</span>
                <svg className="w-6 h-6" color="white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>              </button>

            )}
            content={() => componentRef.current}
          />
          <div ref={componentRef} className="p-5">
            <Header handlePrint={handlePrint} />

            {/* <MainDetails name={name} address={address} /> */}

            <ClientDetails
              nroInvoice={nroInvoice}
              clientName={clientName}
              clientAddress={clientAddress}
            />

            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />

            <Table
              description={idProducto}
              quantity={quantity}
              price={price}
              amount={amount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
              totalDiscount={totalDiscount}
              setTotalDiscount={setTotalDiscount}
            />

            <Notes notes={notes} />

            <Footer
            // name={name}
            // address={address}
            // website={website}
            // email={email}
            // phone={phone}
            // bankAccount={bankAccount}
            // bankName={bankName}
            />
          </div>


          {/* <button
            onClick={() => setShowInvoice(false)}
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Edit Information
          </button> */}
        </div>
      </main>
    </>
  )
}

