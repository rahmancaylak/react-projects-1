import React from 'react'

function Content({data}) {
  return (
    <article>
        {
            data.map((data, index) => <p key={index}>{data}</p>)
        }
    </article>
  )
}

export default Content