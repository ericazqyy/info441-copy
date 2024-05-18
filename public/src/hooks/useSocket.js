import { useEffect } from 'react';
import io from 'socket.io-client';

export const useSocket = () => {
  const socket = io.connect('http://localhost:3000'); // Adjust the URL if needed

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return { socket };
};
