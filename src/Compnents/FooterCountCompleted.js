import React from 'react'

function FooterCountCompleted(props) {
    const countCompletedHandler = () => {
        let i = 0;
        props.todos.map(item => {
            if(item.completed === false) {
                i++;
            }
        })
        return i;
    }
    
  return (
    <div>
        {countCompletedHandler()} Items Left
    </div>
  )
}

export default FooterCountCompleted