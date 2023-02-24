export const Table = ({ data }) => {
  console.log(data);
  return (
    <>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Sku</th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Quantity</th>
            <th scope="col" class="px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((prod, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td>{prod.sku}</td>
              <td>{prod.name}</td>
              <td>{prod.quantity}</td>
              <td>{prod.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
