import React from "react";

const ProductsList = () => {
  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">List of Products</h2>

      <table className="table is-stripped is-fullwidth">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Price</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
