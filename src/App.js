import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        profiles:[],
    };
  }

  //code to run whenever the component mounts
  componentDidMount(){
    //API request for array of user pofiles
    fetch('https://jsonplaceholder.typicode.com/users')
    // fetch creates a promise, which is asynchronous in JS. Promises to eventually have a value. once you have a response you .then
        .then(response => 
            //convert response body into JSON
            response.json()
        )
        //you can append more statements, in this case the users parameter comes from the resolved value of the promise returned by response.json()
        .then((users) => 
            // set as state
            this.setState(() => {
                return {profiles: users}
            },
            // callback for when the set state is finished to make sure state has the correct value
            () => {
                console.log(this.state)
            }
        )
        )

  }

  render() {
    return(
        <div className='App'>
            <h1>Rolodex</h1>
            {this.state.profiles.map((profile) => {
                return (
                    <div key={profile.id}>
                        <h2>{profile.name}</h2>
                        
                    </div>
                )
            })}
        </div>
    );
    }
}

export default App;
