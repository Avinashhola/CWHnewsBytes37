import React, { useEffect,useState } from 'react'
import NewsItemFun from './NewsItemFun'
import SpinnerFun from './SpinnerFun';
import PropTypes from 'prop-types'





const NewsCompOldFun =(props)=> {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
// document.title = `${cpitalizefirstLetterfunc(props.category)} - Channel37`



const cpitalizefirstLetterfunc = (string)=>{
  return string.charAt(0).toUpperCase() +string.slice(1);
}



const updateNews = async ()=>{
    // props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6c8381c87ebd47bdb88a72d1f96fd8b8&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
  
    let data = await fetch(url);
    // props.setProgress(30)

    let parsedData = await data.json()
    // props.setProgress(60)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false) 
    // props.setProgress(100)
  }


  useEffect(()=>{
    document.title = `${cpitalizefirstLetterfunc(props.category)} - Channel37`

    updateNews();
        //eslint-disabled-next-line
  },[])


//   async componentDidMount() {
//     console.log("cdm")
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parsedData = await data.json()

//     // this.setState({ articles: parsedData.articles,
//     //    totalResults: parsedData.totalResults,  
//     //   loading:false })
//     this.updateNews();

//   }


  const handleNextClick = async () => {
    // Update current page when navigating to the next page

    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page + 1}&pageSize=${props.pageSize}`
    //   this.setState({loading:true})
    //   let data = await fetch(url);
    //   let parsedData = await data.json()


    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading:false
    //   })
   
        setPage(page - 1)
    updateNews()
         
        }
    



  const handlePrevClick = async () => {
    // Update current page when navigating to the previous page
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page - 1}&pageSize=${props.pageSize}`
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()


    // this.setState({
    //   page: this.state.page - 1, 
    //   articles: parsedData.articles,  
    //   loading:false
    // })


        setPage(page + 1)
    updateNews()
       
    }



    return (

      <div className='container my-3'>
        <h2 className='text-center pb-3'>Channel37 -- Top Headline's {cpitalizefirstLetterfunc(props.category)}</h2>
        {loading && <SpinnerFun />}
        <div className='row'>
          {!(loading) && articles.map((elem) => {
            return <div className='col-md-4' key={elem.url}>
              <NewsItemFun
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
          <div className='container d-flex justify-content-between my-2'>
            <button disabled={page <= 1} className="btn btn-dark" onClick={handlePrevClick} >&larr; Prev </button>
            <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-dark" onClick={handleNextClick} >Next &rarr;</button>

          </div>
        </div>

      </div>


    )
  }

NewsCompOldFun.defaultProps = {
    country:'in',
    pageSize:7,
    category:'science'
  }
  NewsCompOldFun.propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,

  }


export default NewsCompOldFun;