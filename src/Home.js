import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/nodes">Nodes List</Link>
        <br/>
        <br/>
        <br/>
        <br/>
        <Link to="/node/article/create">Create Article</Link>
        <br/>
        <br/>
        <br/>
        <br/>
        <Link to="/node/final-form/create">Create Final Form Subrequests</Link>
        <br/>
        <br/>
        <br/>
        <br/>
        <Link to="/nodes-subrequests">Node Subrequests</Link>
      </nav>
    </>
  );
}

export default Home;