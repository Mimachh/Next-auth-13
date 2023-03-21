import UserLoggedOut from "@/components/home/UserLoggedOut";
import UserLoggedIn from "@/components/home/UserLoggedIn";

const Home = () => {
  return (
    <main className="main">
      <h1>Authentification</h1>
      <h2 className="h2-main">Next js 13 avec Next-auth.js</h2>

      {/* <UserLoggedOut /> */}
      <UserLoggedIn />
    </main>
  )
}

export default Home;
