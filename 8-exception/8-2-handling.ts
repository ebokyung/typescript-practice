{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError('no network!');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // login .....
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) { // any 타입임
        // show dialog to use

        // if(error instanceof OfflineError){} // error는 이미 any 타입이라서 불가능
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
//   service.login();  //error
  const app = new App(service);
  app.run(); //error
}
