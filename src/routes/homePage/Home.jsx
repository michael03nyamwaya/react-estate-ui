import "./home.scss"
import Search from "../../components/searchBar/Search"

export default function Home() {
  return (
<div className="home">
   
    <div className="textContainer">
    <div className="wrapper">
        <h1 className="title">
            Find Real Estate & Get Your Dream Place
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Provident, porro inventore consequatur
             et magnam omnis esse in reiciendis 
            cumque odio nobis. Facere odit maxime debitis.
        </p>
        <Search/>
        <div className="boxes">
        <div className="boxe">
            <h1>16</h1>
            <h2>Years of Experience</h2>
        </div>
        <div className="boxe">
            <h1>20</h1>
            <h2>Award Gained</h2>
        </div>
        <div className="boxe">
            <h1>1200+</h1>
            <h2>Property Ready</h2>
        </div>
        </div>
        </div>
    </div>
    <div className="imgContainer">
        <img src="bg.png" alt=""/>
    </div>
</div>
  )
}
