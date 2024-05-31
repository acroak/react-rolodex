import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

import './App.css';

const App = () => {

    const [searchField, setSearchField] = useState('');//[value, setValue], pass the intial value
    const[profiles, setProfiles] = useState([]);

    //filtered profiles will always be based off of initital profiles array
    const[filteredProfiles, setFilteredProfiles] = (useState(profiles));

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    // fetch our list of profiles from API
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        //convert response body into JSON
        .then((response) => response.json())
         // set state of profiles array
        .then((users) => setProfiles(users));
    },[]);

    //Only filter profiles if the searchFieldString or profiles array has changed
    useEffect(() => {
        const newFilteredProfiles = profiles.filter((profile) => {
            //includes() returns a boolean
            return profile.name.toLocaleLowerCase().includes(searchField);
        });

        setFilteredProfiles(newFilteredProfiles);

    },[searchField, profiles] )

    
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
    )
}


export default App;
