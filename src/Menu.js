import React, { Component } from 'react';
import Searchkit from 'searchkit';
import './Menu.css';

const host = "http://demo.searchkit.co/api/movies"
const sk = new Searchkit.SearchkitManager(host, {

})
const Hits = Searchkit.Hits

class MovieHit extends Component {
  
  render() {
    const result = this.props.result;
        let url = "http://www.imdb.com/title/" + result._source.imdbId
        return (
            <div className={this.props.bemBlocks.item().mix(this.props.bemBlocks.container("item"))} key={result._id}>
                <a href={url} target="_blank">
                    <img className={this.props.bemBlocks.item("poster")} src={result._source.poster} width="100" height="140"/>
                    <div className={this.props.bemBlocks.item("title")}>{result._source.title}</div>
                </a>
            </div>
        )
    }
  
}

class Menu extends Component {
  render() {
    const SearchkitProvider = Searchkit.SearchkitProvider;
    const Searchbox = Searchkit.SearchBox;
    return (<div>
      
      <SearchkitProvider searchkit={sk}>
         <div className="search">
            <div className="search__query">
            <Searchbox searchOnChange={true} prefixQueryFields={["actors^1","type^2","languages","title^10"]} />
            </div>
            <div className="search__results">
            <Hits hitsPerPage={6} itemComponent={MovieHit}/>
            </div>
         </div>
      </SearchkitProvider>

    </div>);
  }
}

export default Menu