
import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Mobile", price: 20000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 1500, category: "Fashion" }
  ]);

  const [product, setProduct] = useState(null);

  function handleEdit(p) {
    setProduct({ ...p });
  }

  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  }

  function handleUpdate(e) {
    e.preventDefault();

    setProducts(
      products.map((p) =>
        p.id === product.id
          ? { ...product, price: Number(product.price) }
          : p
      )
    );

    setProduct(null);
    alert("Product updated successfully!");
  }

  return (
    <div>
      <h1>Product Management</h1>
      <h2>Product List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.category}</td>
              <td>
                <button onClick={() => handleEdit(p)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {product && (
        <div>
          <h2>Edit Product</h2>

          <form onSubmit={handleUpdate}>
            <label>Product Name: </label>
            <input
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
            <br /><br />

            <label>Price: </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              min="0"
              required
            />
            <br /><br />

            <label>Category: </label>
            <input
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            />
            <br /><br />

            <button type="submit">Update Product</button>
            <button
              type="button"
              onClick={() => setProduct(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
