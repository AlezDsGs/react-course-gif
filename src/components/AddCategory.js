import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (e) => {
        {
            e.preventDefault()
            if (inputValue.trim().length > 2) {
                setCategories(arr => [inputValue, ...arr])
                setInputValue('')
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={(val) => setInputValue(val.target.value)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
