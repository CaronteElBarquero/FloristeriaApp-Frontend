import React, { useState, useEffect } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useSelector } from "react-redux"
import { useProductStore } from "../../../hooks"

export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  discount,
  setDiscount,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
  isv,
  setIsv,
  totalDiscount,
  setTotalDiscount,
}) {

  const [isEditing, setIsEditing] = useState(false)

  const { products } = useSelector( state => state.product);
  const { startLoadingProduct } = useProductStore();


  //mapear los productos



  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description || !quantity || !price) {
      toast.error("Los campos son necesarios")
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        discount,
        price,
        isv,
        amount,

      }
      setDescription("")
      setQuantity("")
      setPrice("")
      setDiscount("")
      setIsv("")
      setAmount("")
      setList([...list, newItems])
      setIsEditing(false)
    }
  }


  useEffect(() => {
    startLoadingProduct();
  }, [])




  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      
      isv = 0.15
      let totalAmount = ( quantity * price )
      let calcIsv = ( totalAmount * isv )

      // let saleWithIsv = ( totalAmount + calcIsv - discount )
      
      setAmount( totalAmount + calcIsv - discount )
    
      // setAmount( (quantity * price ) - discount)
      
      console.log(calcIsv);

    }

    calculateAmount(amount)

  }, [amount, price, quantity, discount, setAmount])



  // Calculate total amount of items in table
  useEffect(() => {

    let rowDiscount = document.querySelectorAll(".discount")
    let sumDiscount = 0

    for ( let i = 0; i < rowDiscount.length; i++ ) {
      sumDiscount += parseInt(rowDiscount[i].innerHTML)
      setTotalDiscount(sumDiscount)
    }

    let rows = document.querySelectorAll(".amount")
    let sum = 0

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
  })




  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
    setDiscount(editingRow.discount)
  }

  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />

      <form onSubmit={handleSubmit}>


        {/* <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Productos</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Productos"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div> */}

        {/* mandar los productos en un select */}
        {/* <div className="flex flex-col md:mt-10">
          <label htmlFor="description">Productos</label>
          <select
          
            name="description"
            id="description"
            placeholder="Productos"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            <option value="">Seleccione un producto</option>
            {
              products.map( product => (
                <option key={product.id} value={product.name}>{product.name}</option>
              ))
            }
          </select>
        </div> */}


        <div className="flex flex-col md:mt-2">
          <label htmlFor="description">Productos</label>
          <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            <option value="">Seleccione un producto</option>
            {
              products.map( product => (
                <option key={product.id} value={product.name}>{product.name}</option>
              ))
            }
          </select>
        </div>
        <br />


        {/* mostrar la cantidad del producto seleccionado */}


      


        <div className="md:grid grid-cols-5 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Cantidad</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              // placeholder="Quantity"
              value={ quantity }
              onChange={(e) => setQuantity(e.target.value)}
            />

          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Precio</label>
            <input
              type="number"
              name="price"
              id="price"
              // placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="discount">Descuento</label>
            <input
              type="number"
              name="discount"
              id="discount"
              // placeholder="Discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="discount">ISV</label>
            <input
              type="number"
              name="isv"
              id="isv"
              // placeholder="Discount"
              value="0.15"
              onChange={(e) => setIsv(0.15)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Monto</label>
            <p>{ Math.round(amount) }</p>
          </div>




        </div>
        <button
          type="submit"
          className="mb-5 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          
          {isEditing ? "Editar producto" : "Agregar producto"}
          
        </button>
      </form>

      {/* Table items */}


      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Producto</td>
            <td className="font-bold">Cantidad</td>
            <td className="font-bold">Precio</td>
            <td className="font-bold">Descuento</td>
            <td className="font-bold">Monto</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, discount, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className="discount" >{discount}</td>
                <td className="amount">{ Math.round(amount) }</td>
                {/* <td className="discount">{discount}</td> */}
                <td>
                  <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          L {total.toLocaleString()}
        </h2>
      </div>
    </>
  )
}
