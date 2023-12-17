// "use client";

// import { useEffect, useState } from "react";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor } from "./store";
// import { REHYDRATE } from "redux-persist";

// const PersistProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//     persistor.dispatch({ key: REHYDRATE, type: REHYDRATE });
//   }, []);
  
//   if (!isMounted) return null;

//   return (
//     <PersistGate loading={ <p>Loading</p> } persistor={ persistor }>
//       { children }
//     </PersistGate>
//   );
// }

// export default PersistProvider;