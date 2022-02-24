import React from 'react'

function MenuCategories({menuCategory, setFilterCategory}) {

  const filterCategory = (data) => setFilterCategory(data);
  return (
    <>
    <button className='filter-btn' onClick={() => filterCategory(menuCategory)}>{menuCategory}</button>
    </>
  )
}

export default MenuCategories