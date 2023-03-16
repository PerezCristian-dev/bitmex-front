import Websocket from "websocket";

export class BitmexSocket {

  isConnected = false;

  private socket: Websocket.w3cwebsocket;
  
  get status(){
    return this.socket._connection.connected
  }
  // private connection;

  //   private socket.onclose = this.onClose;
  //   private socket.onmessage = this.onMessage;
  //   private socket.onerror = this.onError;
  private url = "wss://ws.bitmex.com/realtime";

  constructor() {
    this.init();
  }

  init() {
    this.socket = new Websocket.w3cwebsocket(this.url);

  
  }

  onOpen(callback: () => void) {
    console.log("OPENED: " + this.url);
    this.socket.onopen = callback
  }

  onClose() {
    console.log("CLOSED: " + this.url);
  }

  onMessage(callback: (payload: Websocket.IMessageEvent) => void) {
    this.socket.onmessage = callback;
    
  }

  onError(event) {
    alert(event.data);
  }

  onSend(message) {
    this.socket.send(message);
  }
  
}
