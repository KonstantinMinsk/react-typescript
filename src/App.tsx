import React, { useContext } from 'react';
import { AppContainer } from "./styles"
import { AddNewItem } from "./AddNewItem"
import { Column } from "./Column"
import { AppStoreContext, useAppStore } from './store/useAppStore';
import { observer } from "mobx-react";
import { appStore as store } from "./store/useAppStore"

const App = () => {
  const { appStore } = useAppStore();
  const { addList, store: { lists } } = appStore;
  const table = lists.map(list => <Column text={list.text} key={list.id} id={list.id} />);  

  return (
      <AppContainer>
        {table}
        <AddNewItem toggleButtonText="+ Add another list" onAdd={(text) => addList(text)}/>
      </AppContainer>

  // if use useContext 
  // <AppStoreContext.Provider value={{ store }}>
  // </AppStoreContext.Provider>
  );
}

export default observer(App);
