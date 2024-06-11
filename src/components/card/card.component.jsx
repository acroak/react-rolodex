import './card.styles.css';

const Card = ( {profile} ) => {

    
    const {name, email, id} = profile;

    return (
        <div className="card-container" key={id}>
            <img 
                className="card-img"
                alt={ `profile img of ${name}`} 
                src={`https://robohash.org/${id}?set=set5&size=180x180`} 
            />
            <h2>{ name }</h2>
            <p>{ email }</p>
        </div>

    );
    
}

export default Card;