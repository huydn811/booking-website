import React from 'react'
import socketio from "socket.io-client";
import * as config from '../constants/Configs';

export const socket = socketio.connect(config.API_URL);
export const SocketContext = React.createContext()
