import React from 'react'       //rafce

const AddProductForm = () => {
    return (
        <form className="row g-3">
            <div className="col-auto">
                <label for="name" className="visually-hidden">Product Name</label>
                <input type="text" className="form-control" id="name" placeholder="Product Name" />
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Add Product</button>
            </div>
        </form>
    )
}

export default AddProductForm
