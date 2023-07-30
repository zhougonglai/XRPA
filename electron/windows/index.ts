import WinPage from "./home";

export default class WindowManager {
  wins: Map<string, WinPage> = new Map();

  createHomePage() {
    const HomePage = new WinPage('Home');
    this.wins.set(HomePage.name, HomePage)
  }
}
