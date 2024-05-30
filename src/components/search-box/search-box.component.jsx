import { Component } from "react";

{/* search through profiles */}
class SearchBox extends Component {

    render(){
        return (
            <input 
                className={ this.props.className } 
                type='search' 
                placeholder={ this.props.placeholder } 
                onChange={ this.props.onChangeHandler }
            />
        )
    }
}

export default SearchBox;