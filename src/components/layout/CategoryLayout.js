import React from 'react'

function CategoryLayout(props) {
  return (
    <div className=' col-span-2 bg-white m-2 rounded-lg'>{props.children}</div>
  )
}

export default CategoryLayout;