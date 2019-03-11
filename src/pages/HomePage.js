import React from "react";
import { API, graphqlOperation } from 'aws-amplify'
import { searchMarkets } from '../graphql/queries'
import NewMarket from '../components/NewMarket';
import MarketList from '../components/MarketList';

class HomePage extends React.Component {
  state = {
    searchTerm:"",
    searchResults:[],
    isSearching: false
  };
  handleSearchChange = searchTerm => this.setState({ searchTerm })

  handleClearSearch = () => this.setState({ searchTerm: "", searchResults: [] })

  handleSearch = async event =>{
    try {
      event.preventDefault()
      this.setState({isSearching: true})
      const result = await API.graphql(graphqlOperation(searchMarkets, {
        filter: {
          or: [
            {name:{ regexp: ".*"+ this.state.searchTerm + ".*"}},
            {owner:{ regexp: ".*"+ this.state.searchTerm + ".*"}},
            {tags:{ regexp: ".*"+ this.state.searchTerm + ".*"}}
          ]
        }
        ,
        sort: {
          field: "createdAt",
          direction: "desc"
        }
      }))
      this.setState({
        searchResults: result.data.searchMarkets.items,
        isSearching: false
      })
    }
    catch(err){
      console.log(err)
    }
      
      console.log(this.state.searchTerm)
  }
  render() {
    return (
      <>
        <NewMarket 
          searchTerm = {this.state.searchTerm}
          isSearching={this.state.isSearching}
          handleSearch = {this.handleSearch}
          handleSearchChange={this.handleSearchChange}
          handleClearSearch={this.handleClearSearch}
        />
        <MarketList 
          searchResults={this.state.searchResults}
          searchTerm={this.state.searchTerm}  
        />

      </>
    )
  }
}

export default HomePage;

