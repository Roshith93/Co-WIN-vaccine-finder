import { createContext, useState, useEffect } from "react";

export const CowinContext = createContext();

export const CowinProvider = ({ children }) => {
  const [dosage, setDosage] = useState("Dosage1");
  useEffect(() => console.log("Hello"), []);
  return (
    <CowinContext.Provider value={{ dosage, setDosage }}>
      {children}
    </CowinContext.Provider>
  );
};
