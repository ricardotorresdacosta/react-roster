import React, { Component } from 'react'
import Table from './Table'


class App extends Component {

    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ]
    }

    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((element, i) =>{
                return index !== i}
            )
        });


    }

    render() {
        return (
            <div className="App">
                <Table characterData={characters} />
            </div>
        )
    }
}

export default App;