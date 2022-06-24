import React, { createContext, useState } from "react";

const AppContext = createContext(null);

function AppContextProvider() {
  return <div>AppContext</div>;
}

export { AppContext, AppContextProvider };
