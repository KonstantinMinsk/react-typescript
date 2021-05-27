import React, { FC } from 'react';
import './App.css';

interface AppProps {
  sendSearchQuery?: (arg: string) => string;
}

const App: FC<AppProps> = ({sendSearchQuery = () => undefined}) => {

  const [searchValue, SetSearchValue] = React.useState<string>("");

  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => SetSearchValue(e.target.value);

  const onSearch = () => sendSearchQuery(searchValue)

  return (
    <>
      <input name="search" type="text" onChange={onSearchInput} value={searchValue} />
      <button onClick={onSearch}>Search</button>
    </>
  );
}

export default App;
