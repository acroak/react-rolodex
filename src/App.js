import { Component } from 'react';
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
    console.log('componentDidMount');
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

  // filter out elements of the array based on input data
  onSearchChange = (event) => {
    // console.log(event);
    // console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    //change the state
        this.setState(() => {
            return{ searchField };
        });
    };

  render() {
    console.log('render');

    // filter() creates a new array based on the returned includes boolean
    // if this profile name includes this searched string, keep it. else get rid of it.
    // searches the untouched/un-edited original list of profiles to generate the displayed list down in render()
    const filteredProfiles = this.state.profiles.filter((profile) => {
        //includes() returns a boolean
        return profile.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return(
        <div className='App'>
            <h1>Rolodex</h1>

            <input 
                className='search-box' 
                type='search' 
                placeholder='search profiles' 
                onChange={ this.onSearchChange }
            />
            {/* map over the filtered list of profiles */}
            { filteredProfiles.map((profile) => {
                return (
                    <div key={profile.id}>
                        <h2>{profile.name}</h2>
                        
                    </div>
                )
            })};
        </div>
    );
    }
}

export default App;
