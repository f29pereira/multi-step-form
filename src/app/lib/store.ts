import { combineReducers, configureStore } from "@reduxjs/toolkit";
import localizationReducer from "../features/localization/localizationSlice";
import themeReducer from "../features/theme/themeSlice";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  localization: localizationReducer,
  theme: themeReducer,
});

/**
 * Redux store
 */
export const makeStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
