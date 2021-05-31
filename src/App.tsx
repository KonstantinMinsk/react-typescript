import React from 'react';
import { AppContainer } from "./styles"
import { AddNewItem } from "./AddNewItem"
import { Column } from "./Column"
import { useAppState } from "./state/AppStateContext"
import { addList } from './state/actions';

export const App = () => {
  const { lists, dispatch } = useAppState();
  const table = lists.map(list => <Column text={list.text} key={list.id} id={list.id} />);  

  return (
    <AppContainer>
      {table}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={(text) => dispatch(addList(text))}/>
    </AppContainer>
  );
}

export default App;
