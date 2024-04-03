import "./single.scss"
import Sider from "../../components/sider/Sider"
import Map from "../../components/map/Map";
import {singlePostData, userData} from '../../lib/dummydata'
export default function Single() {
  return (
    <div className="single">
        <div className="details">
          <div className="wrapper">
            <Sider images ={singlePostData.images}/>
            <div className="info">
              <div className="top">
                <div className="post">
                  <h1>{singlePostData.title}</h1>
                  <div className="address">
                    <img src="/pin.png" alt=""/>
                    <span>{singlePostData.address}</span>
                  </div>
                  <div className="price">
                    ${singlePostData.price}
                  </div>
                </div>
                <div className="user">
                  <img src={userData.img} alt=""/>
                  <span>{userData.name}</span>
                </div>
              </div>
              <div className= "bottom">
                {singlePostData.description}
              </div>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="wrapper">
            <p className="title">General</p>
            <div className="listVertical">
              <div className="feature">
                <img src="/utility.png" alt=""/>
                <div className="featuredText">
                  <span>Utilities</span>
                  <p>rental is responsible</p>
                </div>
              </div>
              <div className="feature">
                <img src="/pet.png" alt=""/>
                <div className="featuredText">
                  <span>Pet Policy</span>
                  <p>No pets allowed</p>
                </div>
              </div>
              <div className="feature">
                <img src="/fee.png" alt=""/>
                <div className="featuredText">
                  <span>Utilities</span>
                  <p>Must have 3x the rent in total household income</p>
                </div>
              </div>
            </div>
            <p className="title">Room Sizes</p>
            <div className="sizes">
            <div className="size">
              <img src="/size.png" alt=""/>
              <span>80sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt=""/>
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt=""/>
              <span>1 bathroom</span>
            </div>
            </div>
            <p className="title">Neaby Places</p>
            <div className="listHorizotal">
            <div className="feature">
                <img src="/school.png" alt=""/>
                <div className="featuredText">
                  <span>School</span>
                  <p>250m away</p>
                </div>
              </div>
            <div className="feature">
                <img src="/pet.png" alt=""/>
                <div className="featuredText">
                  <span>Bus stop</span>
                  <p>100m away</p>
                </div>
              </div>
            <div className="feature">
                <img src="/fee.png" alt=""/>
                <div className="featuredText">
                  <span>Restaurant</span>
                  <p>200m away</p>
                </div>
              </div>
            </div>
            <p className="title"> Location</p>
            <div className="mapContainer">
              <Map items={[singlePostData]}/>
            </div>
            <div className="buttons">
            <button>
            <img src="/chat.png" alt=""/>
              Send a message
            </button>
            <button>
            <img src="/save.png" alt=""/>
             Save the place
            </button>
            </div>
            
          </div>
        </div>
    </div>
  )
}
