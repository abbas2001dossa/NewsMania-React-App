import React from 'react'

const NewsItem = (props)=>{
  

    let {title , description  , imgUrl  , uniqueNewUrl ,publishDate , authorName , sourceName} = props;        


    return (

        
      <div className="my-3">

        <div className="card my-3" style={{ width: "18rem" }}>
        <span class="badge bg-success" style={{width:"7rem"}}>  {sourceName} </span>
          <img src= {imgUrl} alt="" className="card-image-top" />

          <div className="card-body">
              <h5 className="card-title">  {title} ... </h5>
              <p className="card-text"> {description} ...</p>
              {/* <span class="badge bg-success">  {sourceName} </span> */}
              <p className="card-text"><small className="text-muted"> By {!authorName?"Unknown":authorName}  ,Published on : {publishDate}</small></p>
              <a href={uniqueNewUrl}  target="_blank" rel="noreferrer" className="btn btn-sm btn-dark"> Read More </a>
          </div>
        </div>


      </div>
    )
  }


export default NewsItem
