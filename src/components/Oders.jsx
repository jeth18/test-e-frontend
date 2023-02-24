export const Order = ({noOrder, date}) => {
  return <div className="m-2 p-2 rounded-md border-cyan-700 shadow-md shadow-black">
    <p>No. Orden: {noOrder} </p>
    <p>Date: {date.toLocaleDateString()}</p>
  </div>
};
