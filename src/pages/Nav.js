import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <header>
        <div id="headerWrap">
          <h1>
            <Link to="/"><img src="./images/logo.png" alt="Tiffany &amp; Prisim" /></Link>
          </h1>
          <ul>
            <li><a href="#">sign up</a></li>
            <li><a href="#">sing in</a></li>
          </ul>
        </div>
      </header>
      <nav>
        <div id="navWrap">
          <h2 className="hide">메인내비게이션</h2>
          <ul>
            <li>
              <Link to="/list01">자전거</Link>
            </li>
            <li>
              <Link to="/list02">용품</Link>
            </li>
            <li>
              <Link to="/list03">대량구매</Link>
            </li>
            <li>
              <Link to="/list04">제품설명서</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav;