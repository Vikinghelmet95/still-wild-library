import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Still & Wild Library</h1>
      <p>Digital Story Cards for curious young learners.</p>

      <Link to="/library">Explore Library</Link>
    </main>
  );
}

export default Home;