// ----------------------------------------RELATED TO EN LOCAL API KEY (STATE BASED)-------------------------------------------------//


// import React, { Component } from 'react'
// import Navbar from './Components/Navbar'
// import NewsComp from './Components/NewsComp'
// import NewsCompNew from './Components/NewsCompNew'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// import LoadingBar from 'react-top-loading-bar'



// export default class App extends Component {
//   pageSize = 5
//   country = 'in'
//   apiKey = process.env.REACT_API_FOR_NEWS_CHANNEL37


//   state = {
//     progress: 0
//   }

//   setProgress = (progress) => {
//     this.setState({
//       progress: progress
//     })
//   }
//   render() {
//     return (
//       <>
//         <Router>
//           <div><Navbar /></div>
//           <LoadingBar
//             height={1}
//             color='#f11946'
//             progress={this.state.progress}
//           // onLoaderFinished={() => setProgress(0)}
//           />
//           {/* <NewsComp/> */}
//           <Routes>
//             <Route exact path="/" element={<NewsCompNew setProgress={this.setProgress} apiKey ={this.apiKey}  key="general" pageSize={this.pageSize} country={this.country} category="general" />} />
//             <Route exact path="/business" element={<NewsCompNew setProgress={this.setProgress} apiKey ={this.apiKey}  key="business" pageSize={this.pageSize} country={this.country} category="business" />} />
//             <Route exact path="/entertainment" element={<NewsCompNew setProgress={this.setProgress} apiKey ={this.apiKey}  key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment" />} />
//             <Route exact path="/general" element={<NewsCompNew setProgress={this.setProgress} apiKey ={this.apiKey}  key="general" pageSize={this.pageSize} country={this.country} category="general" />} />
//             <Route exact path="/health" element={<NewsCompNew setProgress={this.setProgress} apiKey ={this.apiKey}  key="health" pageSize={this.pageSize} country={this.country} category="health" />} />
//             <Route exact path="/science" element={<NewsCompNew setProgress={this.setProgress} apiKey ={this.apiKey}  key="science" pageSize={this.pageSize} country={this.country} category="science" />} />
//             <Route exact path="/sports" element={<NewsCompNew setProgress={this.setProgress} apiKey ={this.apiKey}  key="sports" pageSize={this.pageSize} country={this.country} category="sports" />} />
//             <Route exact path="/technology" element={<NewsCompNew setProgress={this.setProgress}  apiKey ={this.apiKey} key="technology" pageSize={this.pageSize} country={this.country} category="technology" />} />
//           </Routes>
//         </Router>

//       </>

//     )
//   }
// }



// // ----------------------------------------(STATE BASED)-----------------------------------------------------------//

import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import NewsComp from './Components/NewsComp'
import NewsCompNew from './Components/NewsCompNew'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'
import NewsCompOld from './Components/NewsCompOld';



export default class App extends Component {
  pageSize = 5
  country = 'in'
  // apiKey = process.env.REACT_API_FOR_NEWS_CHANNEL37


  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <>
        <Router>
          <div><Navbar /></div>
          <LoadingBar
            height={1}
            color='#f11946'
            progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          {/* <NewsComp/> */}
          <Routes>
            <Route exact path="/" element={<NewsCompNew setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country={this.country} category="general" />} />
            <Route exact path="/business" element={<NewsCompNew setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country={this.country} category="business" />} />
            <Route exact path="/entertainment" element={<NewsCompNew setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment" />} />
            <Route exact path="/general" element={<NewsCompNew setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country={this.country} category="general" />} />
            <Route exact path="/health" element={<NewsCompNew setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country={this.country} category="health" />} />
            {/* <Route exact path="/science" element={<NewsCompNew setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country={this.country} category="science" />} />
            <Route exact path="/sports" element={<NewsCompNew setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country={this.country} category="sports" />} />
            <Route exact path="/technology" element={<NewsCompNew setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country={this.country} category="technology" />} /> */}
          
            <Route exact path="/science" element={<NewsCompOld setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country={this.country} category="science" />} />
            <Route exact path="/sports" element={<NewsCompOld setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country={this.country} category="sports" />} />
            <Route exact path="/technology" element={<NewsCompOld setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country={this.country} category="technology" />} />
   
          </Routes>
        </Router>

      </>

    )
  }
}




// ----------------------------------------(FUNCTION  BASED)-----------------------------------------------------------//

// import React, {useEffect,useState} from 'react'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// // import LoadingBar from 'react-top-loading-bar'
// import NavbarFun from './ComponentsFunc/NavbarFun';
// import NewsCompNewFun from './ComponentsFunc/NewsCompNewFun';
// import NewsCompOldFun from './ComponentsFunc/NewsCompOldFun';




// const App =()=> {
//  const  pageSize = 5
//  const  country = 'in'
//   // apiKey = process.env.REACT_API_FOR_NEWS_CHANNEL37

// // const [progress, setProgress] = useState(0)






//     return (
//       <>
//         <Router>
//           <div><NavbarFun/></div>
//           {/* <LoadingBar
//             height={1}
//             color='#f11946' 
//             progress={progress}
//           /> */}

//           <Routes>
    
//             <Route exact path="/" element={<NewsCompNewFun    key="general" pageSize={pageSize} country={country} category="general" />} />
//             <Route exact path="/business" element={<NewsCompNewFun   key="business" pageSize={pageSize} country={country} category="business" />} />
//             <Route exact path="/entertainment" element={<NewsCompNewFun   key="entertainment" pageSize={pageSize} country={country} category="entertainment" />} />
//             <Route exact path="/general" element={<NewsCompNewFun   key="general" pageSize={pageSize} country={country} category="general" />} />
//             <Route exact path="/health" element={<NewsCompNewFun   key="health" pageSize={pageSize} country={country} category="health" />} />
//             {/* <Route exact path="/science" element={<NewsCompNewFun setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country={this.country} category="science" />} />
//             <Route exact path="/sports" element={<NewsCompNew setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country={this.country} category="sports" />} />
//             <Route exact path="/technology" element={<NewsCompNew setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country={this.country} category="technology" />} /> */}
          
          
//             <Route exact path="/science" element={<NewsCompOldFun   key="science" pageSize={pageSize} country={country} category="science" />} />
//             <Route exact path="/sports" element={<NewsCompOldFun   key="sports" pageSize={pageSize} country={country} category="sports" />} />
//             <Route exact path="/technology" element={<NewsCompOldFun   key="technology" pageSize={pageSize} country={country} category="technology" />} />
   
//           </Routes>
//         </Router>

//       </>

//     )
//   }


// export default App();