import React from 'react';

const SearchIcon = (props) => {
  return (
    <svg className={props.className} width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3965 3.78941 12.4887 2.99921 10.4995 2.99921C8.51035 2.99921 6.60262 3.78941 5.19605 5.19599C3.78947 6.60256 2.99927 8.51029 2.99927 10.4995C2.99927 12.4887 3.78947 14.3964 5.19605 15.803C6.60262 17.2096 8.51035 17.9998 10.4995 17.9998C12.4887 17.9998 14.3965 17.2096 15.803 15.803Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default SearchIcon;