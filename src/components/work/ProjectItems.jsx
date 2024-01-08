import React from 'react'

function ProjectItems({item}) {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" />
    </div>
  )
}

export default ProjectItems