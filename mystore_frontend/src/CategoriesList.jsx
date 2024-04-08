import React from 'react';

const CategoriesList = ({ categories }) => {
  return (
    <div>
      <h2>Categories</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesList;
