import { Component } from 'react';

import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
        profiles: [],
        searchField: '',
    };
    console.log('constructor');
  }

  
  componentDidMount(){
    //API request for array of user pofiles
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => 
            //convert response body into JSON
            response.json()
        )
        .then((users) => 
            // set state of profile array
            this.setState(() => {
                return { profiles: users }
            },
            // callback for when the set state is finished to make sure state has the correct value
            () => {
                console.log(this.state)
            }
        )
    );

  }

  /* filter out elements of the array based on input data
    * filter() creates a new array based on the returned includes boolean
    * if this profile name includes this searched string, keep it. else get rid of it.
    * searches the untouched/un-edited original list of profiles to generate the displayed list down in render()
  */
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    //change the state
        this.setState(() => {
            return{ searchField };
        });
    };

  render() {
    // destructuring, shorten the length of variable names
    const { profiles, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredProfiles = profiles.filter((profile) => {
        //includes() returns a boolean
        return profile.name.toLocaleLowerCase().includes(searchField);
    });

    return(
        <div className='App'>
            <h1 className='app-title'>Rolodex</h1>
            <SearchBox 
                className = 'profiles-search-box'
                placeholder = 'search profiles'
                onChangeHandler = {onSearchChange}  
            />
            <CardList profiles = {filteredProfiles}/>

        </div>
    );
    }
}

export default App;
