import React from 'react';
import 'components/Section/section.css';
import {
  NavLink
} from 'react-router-dom';

export default function NavigationBar({ pages }) {
  return (
    <nav>
      <ul>
        {pages.map((name, key) => {
          return (
            <li>
              <NavLink to={name.replace(/ /g, "")} key={key}>
                {name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
