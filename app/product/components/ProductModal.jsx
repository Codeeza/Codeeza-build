// components/ProductModal.js
const ProductModal = ({ product, setShowModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg w-3/4 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{product.name} - Stock Details</h2>
          <button onClick={() => setShowModal(false)} className="text-gray-500">
            &times;
          </button>
        </div>
        <div className="mt-4">
          <div className="flex space-x-4">
            {product.colors.map((color) => (
              <div key={color.name} className="w-1/2">
                <h3 className="font-bold">{color.name}</h3>
                <table className="table-auto w-full mt-2 text-sm text-left">
                  <thead>
                    <tr>
                      <th className="px-2 py-1 border-b">Size</th>
                      <th className="px-2 py-1 border-b">Stock on Hand</th>
                      <th className="px-2 py-1 border-b">Reserved</th>
                      <th className="px-2 py-1 border-b">Incoming</th>
                      <th className="px-2 py-1 border-b">ETA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.sizes.map((size) => (
                      <tr key={size}>
                        <td className="px-2 py-1 border-b">{size}</td>
                        <td className="px-2 py-1 border-b">1234</td>{" "}
                        {/* Replace with real data */}
                        <td className="px-2 py-1 border-b">567</td>{" "}
                        {/* Replace with real data */}
                        <td className="px-2 py-1 border-b">890</td>{" "}
                        {/* Replace with real data */}
                        <td className="px-2 py-1 border-b">21 Aug 2024</td>{" "}
                        {/* Replace with real data */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
