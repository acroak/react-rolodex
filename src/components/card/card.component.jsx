import { Component } from "react";
import './card.styles.css';

class Card extends Component {

    render() {
        const {name, email, id} = this.props.profile;

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
}

export default Card;