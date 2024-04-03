import "./lists.scss";
import Card from '../card/Card'
import{listData} from '../../lib/dummydata'

export default function Lists() {
  return (
    <div className="lists">
        {
            listData.map(item=>{
            <Card key={item.id} item={item}/>
        })
        }
    </div>
  )
}
