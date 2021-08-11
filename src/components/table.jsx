import React, { useState } from 'react'
import TableCard from './TableCard'
import Paginator from './Paginator'

const Table = ({ items, isLoading }) => {
    const [showPerPage, setShowPerPage] = useState(10);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end })
    };
    return isLoading ? (
        <div className="spinner">
            <div className="loader"/>
        </div>
    ) : (
        <div>
            <div className="cardBackground">
                <div className="tableCard-heading">
                    <div className="tableCard-body">
                        <div className="tableCard-content">
                            <p className="name">Name</p>
                            <p>Occupation</p>
                            <p>Birthday</p>
                            <p>Status</p>
                        </div>
                    </div>
                </div>
                {items.slice(pagination.start, pagination.end).map(item => (
                    <TableCard
                        key={item.char_id}
                        item={item}
                    />
                ))}

            </div>
            <Paginator total={items.length} showPerPage={showPerPage} onPaginationChange={onPaginationChange} />
        </div>

    )
}

export default Table;
