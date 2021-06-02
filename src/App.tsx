import React, { useContext } from 'react';
import { AppContainer } from "./styles"
import { AddNewItem } from "./AddNewItem"
import { Column } from "./Column"
import { AppStoreContext, useAppStore } from './store/useAppStore';
import { observer } from "mobx-react";

const App = () => {
  const { appStore } = useAppStore();
  // const { appStore } = useContext(AppStoreContext);
  const { addList, store: { lists } } = appStore;
  const table = lists.map(list => <Column text={list.text} key={list.id} id={list.id} />);  

  return (
    // <AppStoreContext.Provider value={{ appStore }}>
      <AppContainer>
        {table}
        <AddNewItem toggleButtonText="+ Add another list" onAdd={(text) => addList(text)}/>
      </AppContainer>
    // </AppStoreContext.Provider>
  );
}

export default observer(App);
