import React from 'react'

const NewsItemFun = (props) => {
    let {title,descript, imageUrl,newsUrl,authorName, date,source} = props

    return (
        <>
  
  <div className="card my-2" style={{width: "18rem"}}>
   <span className='position-absolute top-0   badge rounded-pill bg-danger m-1'  style={{right:"0.2%", zIndex:'1'}}>{source}</span>
    <img src={!imageUrl? "https://img.freepik.com/free-vector/no-multiply-font-vector-text-typography_53876-168227.jpg" : imageUrl} className="card-img-top" alt="channel--37"/>
    <div className="card-body">
      <h5 className="card-title"> {title}...</h5>
      <p className="card-text">{descript}...</p>
      <div>
        
      
        <p className="card-text  text-end my-2"><small className="text-body-secondary">{date} </small></p>
        <p className="card-text  text-end "><small className="text-body-secondary">{authorName}</small></p>
        <a href={newsUrl} target='_blank' className="btn btn-dark">Go somewhere &rarr;</a>
        {/* <p
    className="card-text text-end mt-2"
    style={{ cursor: 'pointer', transition: 'color 0.3s', color: 'black' }}
    onMouseOver={(e) => e.target.style.color = 'yellow'}
    onMouseOut={(e) => e.target.style.color = 'black'}
  >
    <small className="text-body-secondary">. . . . Last updated 3 mins ago</small>
  </p> */}
  
  
      
      </div>
    </div>
  </div>
        </>
      )
}

export default NewsItemFun