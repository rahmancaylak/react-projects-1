import React, { useState } from 'react'
import data from '../../data'
import Content from './Content'
import Categories from './Categories'


function Menu() {
  const [menuData, setMenuData] = useState(data)
  const categories = ['all', ...new Set(menuData.map(cat => cat.category))];
  //const [menuCategories, setMenuCategories] = useState(categories)
  const [filterCategory, setFilterCategory] = useState('all');

  const filtered = menuData.filter((menu) => filterCategory === 'all' ? menu : menu.category === filterCategory)

  return (
    <>
      <div className='btn-container'>
        {
          categories.map((menuCategory) =>
            <Categories key={menuCategory} menuCategory={menuCategory} setFilterCategory={setFilterCategory} />)
        }
      </div>
      <div className='section-center'>
        {
          filtered.map((data) => <Content key={data.id} {...data} />)
        }
      </div>
    </>
  )
}

export default Menu