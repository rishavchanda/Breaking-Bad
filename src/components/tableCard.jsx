import React from 'react'

const TableCard = ({ item }) => {
    return (
        <div className="tableCard">
            <div className="divider" />
            <div className="tableCard-body">
                <div className="tableCard-content">
                    <p className="name margin-right"><span>{item.char_id}.</span>{item.name}</p>
                    <p className="occupation margin-right">{item.occupation}</p>
                    <p className="birthday margin-right">{item.birthday}</p>
                    <p className="status margin-right">{item.status}</p>
                </div>
            </div>
        </div>
    )
}

export default TableCard;
