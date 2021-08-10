import React from 'react'
import TableCard from './TableCard'

const Table = ({ items, isLoading }) => {
    return isLoading ? (
        <h1>Loading.....</h1>
    ) : (
        <div>
            {items.map(item => (
              <TableCard 
              key={item.char_id}
              item={item}
              />
            ))}
        </div>
    )
}

export default Table;
