import React from 'react'

const Users = ({products, find}) => {
  const filter = find.trim().toLowerCase();

  const filteredProducts = products.filter(products => {
    const name = products.name.toLowerCase();
    const cusine = products.cuisine.toLowerCase()

    if (!filter) return true;

    return name.includes(filter) || cusine.includes(filter)
  })

  return (
    <div>
      <h2>
        Users: {filteredProducts.length}
      </h2>

    <div style={{
      display: "grid",
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: "20px"
    }} className="wrapper">
      {
        filteredProducts.map(products => (
          <div style={{
            width: "300px",
            border: "1px solid gray",
            borderRadius: "8px"
          }} className="wrapper2" key={products.id}>
            <img style={{
              width: "300px",
              borderRadius: "8px 8px"
            }} src={products.image} alt="" />
            <h3>{products.name}</h3>
            <b>Cuisine: {products.cuisine}</b>
          </div>
        ))
      }
    </div>

    </div>
  )
}

export default Users
