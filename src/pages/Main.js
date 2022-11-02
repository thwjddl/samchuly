import React, { useEffect, useState } from 'react';
import Nav from './Nav';

function Main({ children }) {
  return (
    <>
      <Nav />
      <div>
        {children}
      </div>
    </>
  )
}
export default Main;