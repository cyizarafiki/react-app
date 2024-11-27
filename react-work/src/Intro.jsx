import React from 'react'

export default function Intro() {
  return (
    <div>
      <u style={{color:'brown'}}>INTRODUCTION OF REACT HOOKS</u>
      <p style={{fontSize:'30px'}}>In React, a hook is a special JavaScript function that lets you "hook into" React features, such as state and lifecycle methods, from function components. <br />
        Hooks allow you to manage state, perform side effects (like fetching data), access context, and more, all without having to use class components.<br/>

Hooks were introduced in React 16.8 to provide a simpler and more reusable way to write components. <br />
Before hooks, class components were required to use state and lifecycle methods. 
Hooks allow function components to achieve the same functionality.</p>
    </div>
  )
}
