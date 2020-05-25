import React from 'react';

export function NavBarDiv(props) {
  return (
    <nav className="navbar m-3 p-0 navbar-expand-lg navbar-light bg-light">
      {props.children}
    </nav>
  );
}

export function NavBarUl(props) {
  return <ul className="navbar-nav mr-auto">{props.children}</ul>;
}

export function NavBarLi(props) {
  return (
    <li className="nav-item active" {...props}>
      {props.children}
    </li>
  );
}

export function NavInput(props) {
  return <input className="form-control mr-sm-2" type="text" {...props} />;
}

export function NavBarSearch(props) {
  return <div className="form-inline my-2 my-lg-0">{props.children}</div>;
}

export function NavBarBtn(props) {
  return (
    <button class="btn btn-outline-info my-2 my-sm-0" {...props}>
      {props.label}
    </button>
  );
}
