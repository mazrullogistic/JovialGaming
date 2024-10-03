import socketIOClient from "socket.io-client";
import sailsIOClient from "sails.io.js";
import { EmitterKey, SocketKEY } from "@/constants/keywords";
import { getData } from "@/utils/storage";
import EventEmitter from "@/components/EventEmitter";

const axiosDefaults = require("axios");

axiosDefaults.baseURL = SocketKEY.baseURL;
axiosDefaults.headers = SocketKEY.headers;
axiosDefaults.timeout = SocketKEY.timeOut;

let socketIO = null;
let socket = null;
const user = getData("user");

const start = () => {
  console.log("SocketKEY.socketConnect", SocketKEY.socketConnect);
  if (SocketKEY.socketConnect === null) {
    console.log("user.token", user);
    const headers = {
      Authorization: `bearer ${user.token}`,
    };
    if (!socketIO) {
      socketIO = sailsIOClient(socketIOClient);
      socketIO.sails.url = SocketKEY.socketUrl;
      socketIO.sails.transports = ["websocket"];
      socketIO.sails.headers = headers;
      socketIO.sails.autoConnect = true;
      socketIO.sails.reconnection = true;
      socketIO.sails.reconnectionDelay = 1000;
      socketIO.sails.reconnectionAttempts = Infinity;
      socket = socketIO.socket;
    } else {
      socketIO.sails.url = SocketKEY.socketUrl;
      socketIO.sails.headers = headers;
      socketIO.sails.autoConnect = true;
      socketIO.sails.transports = ["websocket"];
      socketIO.sails.reconnection = true;
      socketIO.sails.reconnectionDelay = 1000;
      socketIO.sails.reconnectionAttempts = Infinity;
      socket = socketIO.sails.connect();
    }
  }

  socket.on("connect", () => {
    console.log("socket connect success");
    SocketKEY.socketConnect = socketIO;
  });

  socket.on("user", (message) => {
    console.log("Received user event", message);
    if (message.action === "match_request_success") {
      EventEmitter.emit(EmitterKey.FoundMatch, message);
    } else if (message.action === "match_request_decline") {
      console.log("match_request_decline");
      EventEmitter.emit(EmitterKey.DeclineMatch, message.action);
    }
    //  else if (message.action === "match_created_success") {
    //   console.log("match_request_decline");
    //   EventEmitter.emit(EmitterKey.DeclineMatch, message.action);
    // }
    else if (message.action === "ready_timer_success") {
      console.log("ready_timer_success");
      EventEmitter.emit(EmitterKey.TimerStart, message);
    } else if (message.action === "ready_success") {
      EventEmitter.emit(EmitterKey.ReadySuccess, message);
    } else if (message.action === "scoreWaitingTimer") {
      EventEmitter.emit(EmitterKey.ScoreWaitingTimer, message);
    } else if (message.action === "ready_timer_stop") {
      EventEmitter.emit(EmitterKey.ReadyTimerStop, message);
    } else if (message.action === "afterSubmit") {
      EventEmitter.emit(EmitterKey.AfterSubmit, message);
    } else if (message.action === "roomGroupchatMessage") {
      EventEmitter.emit(EmitterKey.RoomGroupchatMessage, message);
    } else if (message.action === "ride_request_process_cancelled") {
      EventEmitter.emit(EmitterKey.ChatReceive, message);
    }
  });

  socket.on("disconnect", () => {
    console.log("socket disConnect success");
  });
};

const stop = () => {
  console.log("stop socket");
  if (SocketKEY.socketConnect) {
    SocketKEY.socketConnect = null;
    socket.disconnect();
  }
};

const subscribeUser = async () => {
  await socket.get(
    "/api/v1/chat/subscribeuser1",
    { id: user.data.id },
    (body, JWR) => {
      console.log("Subscribed user:", body, JWR);
    }
  );
};

async function updateReadyMatchRequest(param) {
  await socket.post("/api/v1/updateReadyMatchRequest", param, (body, JWR) => {
    console.log("updateReadyMatchRequest response:", body, JWR);
  });
}

async function multiUpdateReadyMatchRequest(param) {
  await socket.post(
    "/api/v1/multiUpdateReadyMatchRequest",
    param,
    (body, JWR) => {
      console.log("multiUpdateReadyMatchRequest response:", body, JWR);
    }
  );
}

async function avaliableMatchJoin(param) {
  await socket.post("/api/v1/avaliableMatchJoin", param, (body, JWR) => {
    console.log("avaliableMatchJoin response:", body, JWR);
  });
}

async function createMultiPlayerMatchRequest(param) {
  await socket.post(
    "/api/v1/createMultiPlayerMatchRequest",
    param,
    (body, JWR) => {
      console.log("createMultiPlayerMatchRequest response:", body, JWR);
    }
  );
}

async function matchRequest(param) {
  await socket.post("/api/v1/matchRequest", param, (body, JWR) => {
    console.log("matchRequest response:", body, JWR);
  });
}

async function submitScore() {
  return socket;
}

async function FpCreateMultiPlayerMatchRequest(param) {
  await socket.post(
    "/api/v1/FpCreateMultiPlayerMatchRequest",
    param,
    (body, JWR) => {
      console.log("FpCreateMultiPlayerMatchRequest response:", body, JWR);
    }
  );
}

async function FpmatchRequest(param) {
  await socket.post("/api/v1/FpMatchRequest", param, (body, JWR) => {
    console.log("FpMatchRequest response:", body, JWR);
  });
}

export default {
  start,
  stop,
  subscribeUser,
  matchRequest,
  FpmatchRequest,
  FpCreateMultiPlayerMatchRequest,
  createMultiPlayerMatchRequest,
  avaliableMatchJoin,
  submitScore,
  updateReadyMatchRequest,
  multiUpdateReadyMatchRequest,
};
