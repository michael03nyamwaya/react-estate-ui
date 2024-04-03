import "./list.scss"
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card";
import {listData} from "../../lib/dummydata";
import Map from "../../components/map/Map";

export default function List({items}) {
  const data =listData;
  return (
    <div className="list">
        <div className="listContainer">
          <div className="wrapper">
            <Filter/>
            {data.map(item=>(
              <Card key={item.id} item={item}/>
            ))}
          </div>
        </div>
        <div className="mapContainer">
          <Map  items={data}/>
        </div>
    </div>
  )
}
