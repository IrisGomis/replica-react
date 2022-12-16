import '../pages/styles/home.css';
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div className='contenedor'>
        <div className='items-cont'>
          <h1>Feel The Music</h1>
          <p>Stream over 20 thousand songs with one<br></br>click</p>
        </div>
      </div>
    </div>
  );
}
  
export default Home;