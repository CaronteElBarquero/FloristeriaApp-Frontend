import React from "react"
import { formatter } from "../../helpers"




export default function Table({ list, totalDiscount, total }) {


  
  


  return (
    <>
      <table width="100%" className="mb-7">
        <thead>
          <tr className="bg-gray-100 p-">
            <td className="font-bold">Descripcion</td>
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
                <td>{discount}</td>
                <td>{  Math.round(amount) }</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-1xl font-bold">
          <p className="md:mr-5">Descuento:</p>
            { formatter.format(totalDiscount) }
        </h2>

        <h2 className="flex items-end justify-end text-gray-800 text-1xl font-bold">
          <p className="md:mr-5">ISV: </p>
            15%
        </h2>

        <h2 className="flex items-end justify-end text-gray-800 text-1xl font-bold">
          <p className="md:mr-5">Total:</p>
           { formatter.format(total) }
        </h2>
      </div>
    </>
  )
}
