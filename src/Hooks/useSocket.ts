import { useEffect, useState } from "react";
import * as SocketIOClient from "socket.io-client";
import io from "socket.io-client";

export const useSocket = () => {
  const [socket, setSocket] = useState<SocketIOClient.Socket>();

  useEffect(() => {
    const socketIo = io(`${process.env.NEXT_PUBLIC_WS_URL}`);

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;

    // should only run once and not on every re-render,
    // so pass an empty array
  }, []);

  return socket;
};
