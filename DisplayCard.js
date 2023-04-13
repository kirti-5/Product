import React from 'react'
export default function Card(props) {
    return (
        <div className="col-sm-12 md-12 col-lg-3 mt-3">
            <div className="card" style={{ width: "20rem" }}>
                <div className="card-body">
                    <p className="card-text">Product Name: {props.productName}</p>
                    <p className="card-text">Quantity: {props.quantity}</p>
                    <p className="card-text">Category: {props.category}</p>
                </div>
            </div>
        </div>
    )
}
