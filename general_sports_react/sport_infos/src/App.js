import React, { Component } from 'react';
import SportList from './components/SportList';
import SearchSport from './components/SearchSport';
import Sport from './components/Sport';
import SportView from './components/SportView';
import Nav from './components/Nav';
import Search from './components/Search';
import axios from 'axios';
import MainLogin from "./components/Mainlogin";
import Footer from './components/Footer';


import './App.css';
import './animate.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      search: '',
      sports: [],
      term: null ,
      mode: false,
      current: false,
      results: [],
      url: 'http://localhost:8080/api/'
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

//trying to get sports, name, image, state .....

 componentDidMount(){
    this.getSports();
  }


  //calling the getsports functions

   getSports(){
    axios.get(this.state.url)
      .then(data => {
        this.setState({
          mode: 'sports',
          sports: data.data
        });
      })
  }


  //calling change mode 

   changeMode(mode, current = false){
    this.setState(prev => {
      prev.mode = mode;
      prev.current = current;
      return prev;
    });
  }




  //function for setting sport
   setSport(sport){
    this.setState(prev => {
      prev.current = sport;
      prev.mode = 'sport';
      return prev;
    });
  }

//following the jackie coding 
save(sport){
    axios.post(this.state.url, sport)
      .then(res => {
        this.setState(prev => {
          sport = {...sport, id: res.data.id}
          prev.sports.push(sport);
          prev.mode = 'sport';
          prev.current = sport;
          return prev;
        });
      })
      .catch(err => {
        console.log(err)
      })
  }

  delete(sport){
    console.log(sport);
    axios.delete(`${this.state.url}/${sport.id}`)
      .then(res => {
        this.setState(prev => {
          prev.sports = prev.sports.filter(s => s.id !== sport.id);
          prev.mode = 'sports';
          prev.current = false;
          return prev;
        });
      })
  }




  // tring to get data from restful api 

   search(e){
    this.setState({search: e.target.value}, this.searchSportsFromApi.bind(this));
  }

  searchSportsFromApi(){
    axios.get(`http://localhost:8080/api/`)
   
      .then(res => {
        console.log('we got some data back from sport radar --> ', res);
        this.setState({results: this.parseResults(res.data)});
      })
  }
  parseResults(data){
    console.log('in parseresults', data)
    return data.filter(sport => {
      return (
        <div>
        <h1>{sport.name}</h1>
        // <img src={sport.img} alt=""/>
        <p>{sport.state}</p>  
        </div>      
        )
    })
  }


  ///above is trying for get data for api 



  renderView(){
    console.log(this.state.mode)
    if(this.state.mode === "sports"){
      console.log('sports');
      return(
        <SportList
          setSport={this.setSport.bind(this)}
          button={{
            onClick: this.delete.bind(this),
            text: "Delete"
          }}
          sports={this.state.sports} />
      )
    } else if(this.state.mode === "sport"){
      return(<Sport sport={this.state.current} />)
    } else if(this.state.mode === "search"){
      return(<div>
      <Search search={this.search.bind(this)} q={this.state.search} />

        <SportList
          sports={this.state.results}
          setSport={this.setSport.bind(this)}
          button={{
            onClick: this.save.bind(this),
            text: "Save"
          }}
        sports={this.state.results}

        />
      </div>)
    } else {
      return(
        <p>loading...</p>
      )
    }
  }


//calling handle search by Gainor help
  handleSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.searchSports(term);
  }


  searchSports = (term) => {
      const endpoint = this.state.url + 'search/'
      if(this.state.term) {
        axios.post(endpoint, {search: this.state.term })
          .then(data => {
            console.log(data.data);
            if(data.data) {
              console.log('setting the state');
              this.setState({
                sports: data
              })
            }

           })
          .catch(function (error) {
            console.log(error);
        });
      }
    }


  renderViewtwo(){
    return(
      <div>
      <SearchSport handleSearch={this.handleSearch} />
    
      </div>
      )
  }

  renderSports() {
    if(this.state.sports.length > 0) {
      console.log('triggered render sports ')
      return(
        <div>
          <h1>Response from Search</h1>
          <h1> {this.state.handleSearch}</h1>
        </div>
        )
    } else return(<h1>no sports yet... </h1>)
  }


  render() {
    return (
      <div className="App">
      <SportView />
      <MainLogin />
      <Nav changeMode={this.changeMode.bind(this)} />

         {this.renderView()}
        {this.renderViewtwo()}
        {this.renderSports()}
        <Footer />
        </div>
    )
  }
}



export default App;
