import { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
    render() {
        const { profiles } = this.props;
        
        return (
            <div className='card-list'>
            
                { profiles.map( (profile) => {
                
                    return(
                       <Card profile = {profile} />
                    );
                })}
            </div>
        )
    }
}

export default CardList;