import { useEffect, useState } from 'react'
import './App.css'
import { Order } from './components/Oders'
import { Table } from './components/Table'
import { getData } from './service'

function App() {
  const [data, setData] = useState({
    success : true,
    orders : [],
    page : { 
      next : null,
      previous : null
    }
  })
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState({
    open: false,
    data: null
  });
  const [order, setOrder] = useState({
    sku: 0,
    name: '',
    quantity: 0,
    price: 0 
  });

  useEffect(() => {
    const getOrders = async () => {
      const res = await getData()
      setData(res)
    }
    getOrders()

    setTimeout(() => { setData({
      ...data,
      orders : [{
        noOrder: 1,
        date: new Date(),
        products: [
          {
            sku: 1,
            name: "Pan",
            quantity: 13,
            price: 20
          }
        ]
      }]
    })}, 3000)
  }, [])

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="flex flex-col">
      <button onClick={() => setOpen(!open)}> Crear una orden </button>
      {open && (
        <form className="m-2 p-2 flex flex-col gap-2 w-auto rounded-md border-cyan-700 shadow-md shadow-black">
          <input
            type="number"
            name="sku"
            placeholder="sku"
            value={order.sku}
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="name"
            value={order.name}
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="quantity"
            value={order.quantity}
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="price"
            value={order.price}
            onChange={(e) => handleChange(e)}
            required
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setData({
                ...data,
                orders: [
                  ...data.orders,
                  {
                    noOrder: data.orders.length + 1,
                    date: new Date(),
                    products: [order],
                  },
                ],
              });
            }}
          >
            {" "}
              Agregar orden
            {" "}
          </button>
        </form>
      )}
      {!data.orders.length ? (
        <div>Not exist orders</div>
      ) : (
        <div className="flex flex-row gap-2 m-2">
          {data.orders.map((order, index) => {
            return (
              <div>
                <Order key={index} {...order} />
                {!show.open && <button onClick={() => setShow({open: true, data: order})}>Ver</button>}
              </div>
            );
          })}
        </div>
      )}
      {show.open && (
        <div className="m-2 p-2 rounded-md flex flex-col gap-2 border-cyan-700 shadow-md shadow-black">
          No.Orden: { show.data.noOrder }
          <Table data={show.data} />
          <button onClick={() => setShow({show: false, data: null})}>Cerrar</button>
          <button onClick={() => alert("Pagado")}>Pagar</button>
        </div>
      )}
    </div>
  );
}

export default App
