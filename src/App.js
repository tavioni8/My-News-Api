import React, {Component} from 'react';
import Article from './Article';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './App.css';

var token = 'd9b133604d65d56932b9bf4f645c74c3'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      articles:[
        /* {
         description: "Oil held onto gains in Asia on signs that the U.S. may move forward with another economic stimulus deal that could bolster consumption, and as the growth in new coronavirus cases begins to ...",
          image: "https://images.gnews.io/1187a4641f9369ea387ab3a834af6720",
          publishedAt: "2020-08-10 15:42:00 UTC",
          source:{
            name: "YAHOO!",
            url: "https://finance.yahoo.com"
          },
          title: "Oil Holds Gains on U.S. Stimulus Optimism, Signs of Virus Easing",
          url: "https://finance.yahoo.com/news/oil-holds-gains-u-stimulus-220905450.html"
        },
        {
          description: "Oil held onto gains in Asia on signs that the U.S. may move forward with another economic stimulus deal that could bolster consumption, and as the growth in new coronavirus cases begins to ...",
          image: "https://images.gnews.io/1187a4641f9369ea387ab3a834af6720",
          publishedAt: "2020-08-10 15:42:00 UTC",
          source:{
            name: "YAHOO!",
            url: "https://finance.yahoo.com"
          },
          title: "Oil Holds Gains on U.S. Stimulus Optimism, Signs of Virus Easing",
          url: "https://finance.yahoo.com/news/oil-holds-gains-u-stimulus-220905450.html"
        },
        {
          description: "Oil held onto gains in Asia on signs that the U.S. may move forward with another economic stimulus deal that could bolster consumption, and as the growth in new coronavirus cases begins to ...",
          image: "https://images.gnews.io/1187a4641f9369ea387ab3a834af6720",
          publishedAt: "2020-08-10 15:42:00 UTC",
          source:{
            name: "YAHOO!",
            url: "https://finance.yahoo.com"
          },
          title: "Oil Holds Gains on U.S. Stimulus Optimism, Signs of Virus Easing",
          url: "https://finance.yahoo.com/news/oil-holds-gains-u-stimulus-220905450.html"
        },*/
      ],
      latestArticles:[]
    }
  }

  openLink = ()=>{

  }

  loadArticlesByTerm = (term)=>{

    var url = 'https://gnews.io/api/v3/search?q='+term+'&image=required&token='+token
  
    fetch(url)
      .then( res=>res.json())
      .then((data)=>{
        var articles = data.articles
        this.setState({
          articles:articles
        })
      })
  }

  loadlatestArticles = ()=>{

    var url = 'https://gnews.io/api/v3/search?q=latest&image=required&token='+token
  
    fetch(url)
      .then( res=>res.json())
      .then((data)=>{
        var articles = data.articles
        this.setState({
          latestArticles:articles
        })
      })
  }

  componentDidMount(){
    this.loadlatestArticles()
    //this.loadArticlesByTerm('covid')/////
  }

  handleTabSelect = (tab,e) =>{

  }
  render(){
    return (
      <div className="wrap">
        <div className="container">
            
          <div className="tittle">
            <h1><i className="fas fa-globe-europe"></i>World News</h1>
          </div>

          <Tabs defaultActiveKey="latest" id="uncontrolled-tab-example">

            <Tab eventKey="home" title="Home">

            </Tab>

            <Tab eventKey="latest" title="Latest">
              <div className="latest-articles">
                {
                  this.state.articles.map((item)=>{
                    var articleProps = {
                      ...item
                    }
                    return(
                      <Article {...articleProps}/>
                    )
                  })
                }
              </div>  
            </Tab>  

            <Tab eventKey="business" title="Business">

            </Tab>
            <Tab eventKey="world" title="World">

            </Tab>
            <Tab eventKey="entertainment" title="Entertainment">

            </Tab>
          </Tabs>
    
        </div>
      </div>
    );
  }  
}

export default App;
