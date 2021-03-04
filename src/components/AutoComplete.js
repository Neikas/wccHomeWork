import React from 'react';
import axios from 'axios';
import Spinner from './spinners';
import  _  from 'lodash';
class AutoComplete extends React.Component {
    constructor(){
        super();
        this.makeApiCall = _.debounce(this.makeApiCall, 1000);        
    }
    state ={
        movies:[],
        api_key:'d1d8e84202033bc9d98507ad172d5096',
        inputValue:'',
        loading:false,
        showSuggestion: true,

    }
    getSuggestions(value){
        this.setState({inputValue: value, showSuggestion:true}, function(){
            this.setState({  loading:true})
                if(this.state.inputValue.length > 2) {
                    this.makeApiCall();
                }else {
                    this.setState({  loading:false})
                    this.setState({showSuggestion:false});
                }

        });
    }
    makeApiCall(){
        try {
            if(this.state.inputValue){
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.api_key}&language=en-US&query=${this.state.inputValue}`)
                .then(res => {
                    const movies = res.data.results;
                    this.setState({movies , loading:false});
                }).catch((e) => {
                    alert(e);
                });
            }
        } catch (e) {
            alert('There was an error!');
        }
    }
    changeInputValue(title ){
        this.setState({showSuggestion:false, inputValue: title})
    }
    render(){
        return ( 
        <div className="px-5 text-2xl py-4 w-1/2 bg-gray-100 h-full rounded-r-lg">
        <input onChange={ (e) => this.getSuggestions(e.target.value)}  value={this.state.inputValue} className="w-full h-full outline-none bg-gray-100 text-black font-normal opacity-75" placeholder="Enter movie name"></input>
        <div className="absolute rounded mt-4 bg-white text-black z-10 w-2/5  shadsow-lg">
            {
                this.state.loading ? (<Spinner > </Spinner> ) : (
                    this.state.movies.slice(0,8).map((index) => {
                        if(this.state.showSuggestion){
                            return (           
                                <div key={index.id} onClick={() => {this.changeInputValue(index.original_title)}} className="hover:bg-gray-100" >
                                    <h2 className="ml-4">{index.original_title}</h2>
                                    <p className="text-sm ml-4">{index.vote_average} Rating, { (index.release_date) ? index.release_date.slice(0,4):""}</p>
                                </div>
                            )
                        }
                        return ( null);
                    })
                )
            }
        </div>
      </div>);
    }
}
export default AutoComplete;