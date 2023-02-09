import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  
  //static proptypes !
  static defaultProps ={
    country:'in',
    pageSize:8,
    category:'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number ,
    category: PropTypes.string,

  }



  // Making an array of all artickles we took from the api
  articles= [
    
  ]




  constructor(props){
    super(props);

    // making a state 
    this.state = {
      // defining like a dictionary 
      articles : this.articles,
      // same loading as imported 
      loading : true ,
      pageNo : 1 ,
      totalResults : 0
    }

    document.title=  "News Mania -" + this.props.category ;

  }

  async updateNews(){
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b82398541b054a9b9eea2a0b0c006425&page=${this.state.pageNo}&pageSize=${this.props.pageSize}`;
    // this.setState(
    //   {loading:true}
    // )
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // // this would show data in a json like format 
    // // articles as a state was defined earlier ! 
    // this.setState({ articles: parsedData.articles , loading:false , parsedData: parsedData.articles})
  }

  async componentDidMount (){
    // for progress bar using the setPRogress props function 
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState(
      {Loading:true}
    )
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(70);
    // this would show data in a json like format 
    // articles as a state was defined earlier ! 
    this.setState({ articles: parsedData.articles , loading:false})
    // this.updateNews();
    
    this.props.setProgress(100);
  }
  

  // handlePreviousClick = async ()=>{
    
    

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b82398541b054a9b9eea2a0b0c006425&page=${this.state.pageNo - 1}&pageSize=${this.props.pageSize}`;
    // this.setState(
    //   {loading:true}
    // )
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // // this would show data in a json like format 
    // // articles as a state was defined earlier ! 
    
    // this.setState({
    //   pageNo: this.state.pageNo-1,
    //   loading:false
    // })

  //   this.setState({pageNo: this.state.pageNo-1});
  //   this.updateNews();
  // }
  

  // handleNextClick= async ()=>{
    

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b82398541b054a9b9eea2a0b0c006425&page=${this.state.pageNo + 1}&pageSize=${this.props.pageSize}`;

    // this.setState(
    //   {loading:true}
    // )
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState(
    //   {loading:false}
    // )
    // // this would show data in a json like format 
    // // articles as a state was defined earlier ! 
    // this.setState({ articles: parsedData.articles });
    
    // this.setState({
    //   pageNo:this.state.pageNo + 1 
    // })

  //   this.setState({pageNo: this.state.pageNo+1});
  //   this.updateNews();

  // }


  //implicating the fetchMoreData function => 
  fetchMoreData= async ()=>{

    //  page ek agay barh gayi he and data ko ab append krna he nechay 
    this.setState({pageNo: this.state.pageNo+1  });

    // update news part
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.pageNo}&pageSize=${this.props.pageSize}`;
  
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
    // this would show data in a json like format 
    // articles as a state was defined earlier ! 
    this.setState({ articles: this.state.articles.concat(parsedData.articles)  , totalResults: parsedData.articles})
  
  }
  
  render() {
    return (
      <>

        <h2 className='text-center' style={{ marginTop:'90px'}} > NewsMania - Top Headlines  </h2>
        {/* {this.state.loading && <Loading></Loading>} */}

        {/* Placing the news item component inside the news component where you can view multiple styories ! and its 
        relate to the structure we designed   */}
        

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader= {<Loading></Loading>}
        >
        
        <div className="container">
        <div className="row">

          {/* Adding javascript to .map()  (array funciton ! ) -- a fucniton  */}
          { 
            // it would map the elements present in the articles array ! and we can also iterate ,, the number of portions in the array would hence trell u how many times this loop would run 
             this.state.articles.map( (element)=>{

              return <div className="col-md-4" key={element.url }>
                
                <NewsItem title={element?element.title:""}  description={element?element.description:""}  imgUrl={element?element.urlToImage:""} uniqueNewUrl= {element? element.url:""}
                publishDate= {element.publishedAt} authorName = {element.author} sourceName = {element.source.name}>

                </NewsItem>
              
              </div>

            })   
        
          }


            

          
        </div></div>
        </InfiniteScroll>

          {/*  the next buttons and previous one !   */}
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.pageNo <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous </button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>

      </>
    )
  }
}

export default News
