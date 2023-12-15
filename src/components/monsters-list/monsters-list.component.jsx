import MonsterCard from "../monster-card/monster-card.component";

import './monsters-list.styles.css';

const MonstersList = ({monsters}) =>
{
        return(
            <div className="monsters-list"> 

                { monsters.map((monster)=>{return <MonsterCard key={monster.id} monster = {monster} />}) }

            </div>
        );
}
export default MonstersList;