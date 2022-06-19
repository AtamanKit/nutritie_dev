import React from 'react';

class ClassFetch extends React.Component {
    state = {
        categories: [],
    }

    componentDidMount() {
        fetch(apiUrl() + '/categories/', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(result => this.setState({categories: result}))
        .catch(error => console.log(error));
    }
    render() {
        // console.log(this.state.categories[0])
        return(
            // <h1>O MICA PROBA PENTRU CLASUL FETCH</h1>
                this.state.categories.map((category) => 
                    <p>{category.title}</p>
                )
        )
    }
}

export default ClassFetch