import './monster-card.styles.css';

const MonsterCard = ({monster}) =>
{
    return(
        <div className="monster-card"> 

            <img alt= {'Monster ' + monster.name} src= {'https://robohash.org/' + monster.id + '?set=set2&size=110x110'} />
            <h2> {monster.name}</h2>
            <p> {monster.email}</p>

        </div>
    );
}

export default MonsterCard;