import { AppStore } from "./store";
import { createContext, useContext } from "react";

export const appStore = new AppStore();

interface AppStoreContextValue {
    appStore: AppStore;
}

export const AppStoreContext = createContext({ appStore: new AppStore() });

export const useAppStore = (): AppStoreContextValue => {
    return useContext(AppStoreContext);
}
