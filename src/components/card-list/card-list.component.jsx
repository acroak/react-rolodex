import { Component } from "react";

class CardList extends Component {
    render(){
        // Whenever props are different, the component will re-render
        const { profiles } = this.props;

        return (
            <div>
            {/* map over the filtered list of profiles */}
                { profiles.map( profile => (
                    <div key={profile.id}>
                         <h2>{profile.name}</h2>     
                    </div>
                ))}
            </div>
        )
    }
}

export default CardList;