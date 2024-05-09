// ----------------------------------------RELATED TO  API KEY (STATE BASED) and PREV AND NEXT BUTTONS------------------------------------------------//
// in HANDLENXT nad HANDLEPREV we stored key like that u can mention 



// import React, { Component } from 'react'
// import NewsItems from './NewsItems'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'





// export default class NewsCompNew extends Component {
//     static defaultProps = {
//       country:'in',
//       pageSize:7,
//       category:'science'
//     }
//     static propTypes = {
//       country:PropTypes.string,
//       pageSize:PropTypes.number,
//       category:PropTypes.string,

//     }

// cpitalizefirstLetterfunc = (string)=>{
//   return string.charAt(0).toUpperCase() +string.slice(1);
// }
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1
//     }
//     document.title = `${this.cpitalizefirstLetterfunc(this.props.category)} - Channel37`
//   }


//   async updateNews(){
//     this.props.setProgress(10)
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c8381c87ebd47bdb88a72d1f96fd8b8&page=${this.state.page}&pageSize=${this.props.pageSize}`
//     this.setState({loading:true})
  
//     let data = await fetch(url);
//     this.props.setProgress(30)

//     let parsedData = await data.json()
//     this.props.setProgress(60)
//     this.setState({ articles: parsedData.articles,
//        totalResults: parsedData.totalResults,  
//       loading:false })
// this.props.setProgress(100)
//   }
//   async componentDidMount() {
//     console.log("cdm")
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parsedData = await data.json()

//     // this.setState({ articles: parsedData.articles,
//     //    totalResults: parsedData.totalResults,  
//     //   loading:false })
//     this.updateNews();

//   }


//   handleNextClick = async () => {
//     // Update current page when navigating to the next page

//     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
//     //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
//     //   this.setState({loading:true})
//     //   let data = await fetch(url);
//     //   let parsedData = await data.json()


//     //   this.setState({
//     //     page: this.state.page + 1,
//     //     articles: parsedData.articles,
//     //     loading:false
//     //   })
   
//     this.setState({page:this.state.page + 1})
//     this.updateNews()
//      }


//   handlePrevClick = async () => {
//     // Update current page when navigating to the previous page
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parsedData = await data.json()


//     // this.setState({
//     //   page: this.state.page - 1, 
//     //   articles: parsedData.articles,  
//     //   loading:false
//     // })

//     this.setState({page:this.state.page - 1})
//     this.updateNews()
//     };



//   render() {
//     console.log("render")
//     return (

//       <div className='container my-3'>
//         <h2 className='text-center pb-3'>Channel37 -- Top Headline's {this.cpitalizefirstLetterfunc(this.props.category)}</h2>
//         {this.state.loading && <Spinner />}
//         <div className='row'>
//           {!(this.state.loading) &&  this.state.articles.map((elem) => {
//             return <div className='col-md-4' key={elem.url}>
//               <NewsItems
//                 imageUrl={elem.urlToImage ? elem.urlToImage : "https://img.freepik.com/free-vector/no-multiply-font-vector-text-typography_53876-168227.jpg"}
//                 // title={elem.title.slice(0,40)}
//                 // descript= {elem.description.slice(0,80)}
//                 title={elem.title ? elem.title : ""}
//                 descript={elem.description ? elem.description : ''}
//                 newsUrl={elem.url}
//                 authorName={elem.author? elem.author: "unknown"}
//                 date={elem.publishedAt}
//                 source={elem.source.name}
//               />
//             </div>
//           })
//           }
//           <div className='container d-flex justify-content-between my-2'>
//             <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Prev </button>
//             <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>

//           </div>
//         </div>

//       </div>


//     )
//   }
// }










// ----------------------------------------RELATED TO (STATE BASED) and unlimited loading------------------------------------------------//
// in HANDLENXT nad HANDLEPREV are removed with apikey as well 



import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'



export default class NewsCompNew extends Component {
    static defaultProps = {
      country:'in',
      pageSize:7,
      category:'science'
    }
    static propTypes = {
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string,

    }

cpitalizefirstLetterfunc = (string)=>{
  return string.charAt(0).toUpperCase() +string.slice(1);
}
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    }
    document.title = `${this.cpitalizefirstLetterfunc(this.props.category)} - Channel37`
  }


  async updateNews(){
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c8381c87ebd47bdb88a72d1f96fd8b8&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
  
    let data = await fetch(url);
    this.props.setProgress(30)

    let parsedData = await data.json()
    this.props.setProgress(60)
    this.setState({ articles: parsedData.articles,
       totalResults: parsedData.totalResults,  
      loading:false })
this.props.setProgress(100)
  }
  async componentDidMount() {
    console.log("cdm")
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()

    // this.setState({ articles: parsedData.articles,
    //    totalResults: parsedData.totalResults,  
    //   loading:false })
    this.updateNews();

  }


  handleNextClick = async () => {
    // Update current page when navigating to the next page

    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    //   this.setState({loading:true})
    //   let data = await fetch(url);
    //   let parsedData = await data.json()


    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading:false
    //   })
   
    this.setState({page:this.state.page + 1})
    this.updateNews()
     }


  handlePrevClick = async () => {
    // Update current page when navigating to the previous page
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()


    // this.setState({
    //   page: this.state.page - 1, 
    //   articles: parsedData.articles,  
    //   loading:false
    // })

    this.setState({page:this.state.page - 1})
    this.updateNews()
    };


fetchMoreData=async()=>{

   this.setState({page:this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c8381c87ebd47bdb88a72d1f96fd8b8&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: this.state.articles.concat(parsedData.articles),
       totalResults: parsedData.totalResults,  
      loading:false })

  
  }

  render() {
    console.log("render")
    return (

      <>
         <h2 className='text-center pb-3'>Channel37 -- Top Headline's {this.cpitalizefirstLetterfunc(this.props.category)}</h2>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    hasMore={this.state.articles.length !== this.state.totalResults}
    loader={<Spinner />}
  >

<div className='container my-3'>
        <div className='row'>
          { this.state.articles.map((elem) => {
            return <div className='col-md-4' key={elem.url}>
              <NewsItems
                imageUrl={elem.urlToImage ? elem.urlToImage : "https://img.freepik.com/free-vector/no-multiply-font-vector-text-typography_53876-168227.jpg"}
                // title={elem.title.slice(0,40)}
                // descript= {elem.description.slice(0,80)}
                title={elem.title ? elem.title : ""}
                descript={elem.description ? elem.description : ''}
                newsUrl={elem.url}
                authorName={elem.author? elem.author: "unknown"}
                date={elem.publishedAt}
                source={elem.source.name}
              />
            </div>
          })
          }
  
        </div>
</div>


        </InfiniteScroll>
      </>
       



    )
  }
}