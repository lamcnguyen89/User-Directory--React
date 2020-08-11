import React, { Component } from 'react';
import Table from "./Table";
import NavBar from "./NavBar";
import API from "../utils/API";


class Data extends Component {

    // The constructor is a method that’s automatically called during the creation of an object from a class. 
    // It can handle your initial setup stuff like defaulting some properties of the object, or sanity checking the arguments that were passed in. 
    // Simply put, the constructor aids in constructing things.
    // Source: https://www.digitalocean.com/community/tutorials/react-constructors-with-react-components
    constructor() {
        // super() will calls the constructor of its parent class. This is required when you need to access some variables from the parent class.
        super();
        this.state = {
            users: [{}],
            filteredUsers: [{}],
            headings: [
                {columnName: "Image", columnWidth: "20%"},
                {columnName: "Name", columnWidth: "20%"},
                {columnName: "Phone", columnWidth: "20%"},
                {columnName: "Email", columnWidth: "20%"},
                {columnName: "Birth Day", columnWidth: "20%"}
            ],

            searchEmployees: event => {
                const filter = event.target.value;
                const filteredList = this.state.users.filter(person => {
                    // merge data together, then see if user input is anywhere inside
                    let values = Object.values(person)
                      .join("")
                      .toLowerCase();
                    return values.indexOf(filter.toLowerCase()) !== -1;
                });
                this.setState({ filteredUsers: filteredList });
            }
            
        }
    }

    // Takes Data called from the RandomUser API and pushes it to an Array of Objects to be displayed.
    // This process of creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.
    // Note that normally you'd only call ReactDOM.render() to mount the root component(s). You don't need to manually "mount" the child components. Every time a parent component calls setState(), and its render method says a particular child should be rendered for the first time, React will automatically "mount" this child into its parent.
    // Source: https://stackoverflow.com/questions/31556450/what-is-mounting-in-react-js
    componentDidMount() {
        API.callUsers()
            .then(randomUsers => {
                this.setState({
                    users: randomUsers.data.results,
                    filteredUsers: randomUsers.data.results
                })
            })
    };

    // Renders the components into a JSX Element
    render() { 
        return (  
            
            <div>
                <NavBar 
                    searchEmployees={this.state.searchEmployees} 
                />
                <Table
                    headings={this.state.headings}
                    filteredUsers={this.state.filteredUsers}
                />
            </div>
            
        );
    }
}
 
export default Data;