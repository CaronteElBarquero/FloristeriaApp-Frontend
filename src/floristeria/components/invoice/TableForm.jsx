import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { formatter } from "../../helpers"
import { useInvoiceStore, useProductStore } from "../../../hooks"

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
// import { v4 as uuidv4 } from "uuid"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



export default function TableForm({
  setIdProduct,
  idProduct,
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
  const [counterProduct, setCounterProducto] = useState(0);



  const { products } = useSelector(state => state.product);
  const { startLoadingProduct } = useProductStore();

  

  

  // Submit form function
  const handleSubmit = async( event ) => {
    event.preventDefault();



    if (!idProduct || !quantity || !price) {
      toast.error("El producto es necesario")

    } else {

      const nameProducto = products.find(product => product.id === idProduct);

      const newItems = {
        id: nameProducto ? nameProducto.id : 'Sin id',
        description: nameProducto ? nameProducto.name : 'Sin nombre',
        quantity,
        discount,
        price,
        isv,
        amount,
      }

      
      setIdProduct("")
      setQuantity("")
      setPrice("")
      setDiscount(0)
      setIsv("")
      setAmount("")
      setList([...list, newItems])
      setIsEditing(false)

      
    
    }
  }



  useEffect(() => {
    startLoadingProduct();
  }, [])


  useEffect(() => {
    const activeProduct = products.find(product => product.id === idProduct);
    if (activeProduct) {
      setQuantity(activeProduct.stock);
      setPrice(activeProduct.price);
    }
  }, [idProduct])


  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      isv = 0.15
      let totalAmount = (quantity * price)
      let calcIsv = (totalAmount * isv)
      setAmount(totalAmount + calcIsv - discount)
    }
    calculateAmount(amount)
  }, [amount, price, quantity, discount, setAmount])



  // Calculate total amount of items in table
  useEffect(() => {

    let rowDiscount = document.querySelectorAll(".discount")
    let sumDiscount = 0
    for (let i = 0; i < rowDiscount.length; i++) {
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







  // const onInputChanged = ({ target }) => {
  //   setFormValues({
  //     ...formValues,
  //     [target.name]: target.value,
  //   });
  // };

  
  




  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setIdProduct(editingRow.id)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
    setDiscount(editingRow.discount)
    // setTotal(editingRow.amount)
  }

  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))

  return (
    <>
      <ToastContainer position="top-right" theme="colored" />

      <form onSubmit={handleSubmit}>

        <div className="flex flex-col md:mt-2">
          <label htmlFor="description">Productos</label>
          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="description"
            name="description"
            value={idProduct}
            onChange={(e) => setIdProduct(e.target.value)}
          >
            <option value="">Seleccione un producto</option>
            {
              products.map(product => {
                return <option key={product.id} value={product.id}>{product.name}</option>
              })
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
              value={quantity}
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
              value={ discount  }
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
            <p>{ formatter.format(Math.round(amount)) }</p>
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
          { formatter.format(total) }
        </h2>
      </div>
    </>
  )
}
