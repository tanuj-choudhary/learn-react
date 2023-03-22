import React, { useState } from 'react';
import styled from 'styled-components';
import SearchC from './SearchC';

const PDiv = styled.div`
  background-color: #97b708;
  color: white;
  padding: 12px;
  margin: 12px;
`;

const SearchP = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <PDiv>
        <h1>SearchP:{search}</h1>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </PDiv>
      <SearchC data={search} />
    </>
  );
};

export default SearchP;
