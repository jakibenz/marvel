import React from 'react';

const MarvelPagination = ({ characterPerPage, totalCharacters, paginate }) => {

  const pageNumbers = [];
  const pageCount = Math.ceil(totalCharacters / characterPerPage);

  //Create a array of the total nuber of page based on total characters
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination flex justify-center ma4'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link red bg-light-gray bg-animate hover-bg-red hover-white'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MarvelPagination;