import React from 'react'

const List = (props) => (
  <div className="container__carrousel">
    <h2>
      { props.categoria }
    </h2>
    <div className="carrousel">
      { props.children }
    </div>
  </div>
)

export default List