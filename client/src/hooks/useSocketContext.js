import { useContext } from "react";

import { SocketContext } from "../contexts/SocketContext";

export const useSocketContext = () => {

    const context = useContext(SocketContext);

    if (!context) {
        throw Error('Context must be used inside the provider')
    }

  return context;

}
