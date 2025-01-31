import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
  articles =  [
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Wildfire tears through homes in Texas",
        "description": "At least 20 properties have been destroyed by the fire in Balch Springs, as the US battles extreme heat.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-62303581",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8DC6/production/_126049263_p0cp2w7v.jpg",
        "publishedAt": "2022-07-26T09:52:22.7391301Z",
        "content": "At least 20 homes have been destroyed in Texas after a wildfire spread to a residential area.\r\nThe fire started in a field in Balch Springs and engulfed nearby houses, forcing residents to evacuate w… [+100 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Tory leadership: Tories have 'absolutely lost the plot' - Starmer",
        "description": "The Labour leader Sir Keir Starmer says the government has its \"head in the sand, paralysed by this leadership contest\".",
        "url": "http://www.bbc.co.uk/news/live/uk-politics-62273292",
        "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
        "publishedAt": "2022-07-26T08:37:22.9883266Z",
        "content": "We reported earlier on the opinions of some of our voter panel. They told us what they thought of Rishi Sunak and Liz Truss before the rivals went head to head - so let's hear where they're at now.\r\n… [+1262 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Amazon Prime subscription price raised by £1 a month",
        "description": "The £1-a-month rise comes after years in which the streaming service paid millions for football rights.",
        "url": "http://www.bbc.co.uk/news/business-62297014",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17E3E/production/_126045879_mediaitem126045878.jpg",
        "publishedAt": "2022-07-26T07:07:23.3317798Z",
        "content": "Amazon is to raise the price of its Prime service for UK customers.\r\nFrom September, monthly subscriptions will go up £1 to £8.99 and annual membership will increase from £79 to £95.\r\nAmazon said the… [+1942 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Tory leadership: Rishi Sunak and Liz Truss in fiercest clash yet over tax",
        "description": "The economy dominated as Rishi Sunak and Liz Truss took part in their first head-to-head TV debate.",
        "url": "http://www.bbc.co.uk/news/uk-politics-62299111",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10954/production/_126042976_gettyimages-1242112978.jpg",
        "publishedAt": "2022-07-26T04:52:18.4098897Z",
        "content": "By Kate WhannelPolitical reporter, BBC News\r\nMedia caption, WATCH: Our Next Prime Minister - BBC debate highlights\r\nRishi Sunak and Liz Truss tore into each other over their rival visions for the fut… [+4540 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Myanmar executions: US urges China to condemn Myanmar",
        "description": "However China's foreign ministry says it does not interfere in other nations' internal affairs.",
        "url": "http://www.bbc.co.uk/news/world-asia-62301385",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1434C/production/_126046728_gettyimages-142571481.jpg",
        "publishedAt": "2022-07-26T04:37:22.8493335Z",
        "content": "By Melissa ZhuBBC News\r\nThe US has urged China to increase pressure on Myanmar following the military junta's execution of four democracy activists. \r\nState Department spokesperson Ned Price said Chi… [+2149 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Ukraine war: Russia waging gas war with Nord Stream 1 cuts - Zelensky",
        "description": "Ukraine's president accuses Moscow of using gas restrictions to inflict misery on ordinary Europeans.",
        "url": "http://www.bbc.co.uk/news/world-europe-62300684",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6F94/production/_126046582_ee3a235e8915357dfe626058f01ee10a8407e90f.jpg",
        "publishedAt": "2022-07-26T03:37:21.1457871Z",
        "content": "By Leo SandsBBC News\r\nUkraine has accused Moscow of waging a \"gas war\" against Europe and cutting supplies to inflict \"terror\" on people.\r\nRussian energy firm Gazprom announced it is reducing gas flo… [+2608 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Historic gay pride jersey sparks player boycott in Australia",
        "description": "Seven National Rugby League players say jerseys promoting LGBT inclusivity contradict their beliefs.",
        "url": "http://www.bbc.co.uk/news/world-australia-62301091",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17358/production/_126046059_manlyjersey.jpg",
        "publishedAt": "2022-07-26T03:07:23.2857986Z",
        "content": "By Tiffanie TurnbullBBC News, Sydney\r\nSeven players in Australia's National Rugby League (NRL) will boycott a key match over their team's decision to wear a gay pride jersey.\r\nThe Manly Warringah Sea… [+2302 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Tomohiro Kato: Japan executes Akihabara mass murderer, say reports",
        "description": "Tomohiro Kato was 25 when he killed seven people in a busy Tokyo shopping district in 2008.",
        "url": "http://www.bbc.co.uk/news/world-asia-62301427",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11728/production/_126046417_gettyimages-96223090.jpg",
        "publishedAt": "2022-07-26T03:07:21.3487806Z",
        "content": "By Frances MaoBBC News\r\nJapan has executed a 39-year-old man who killed seven people in Tokyo in 2008 during a stabbing rampage, local media outlets have reported. \r\nTomohiro Kato committed one of th… [+1325 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Pope Francis: Pontiff says he is 'deeply sorry' to Canadian residential school survivors",
        "description": "In Canada, Pope Francis expressed sorrow for the Catholic Church's role in the residential school system.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-62296834",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11C78/production/_126042827_f570dd511225583564d80b1d1b30b7ce68a187fc.jpg",
        "publishedAt": "2022-07-25T18:22:25.5193966Z",
        "content": "In his first public remarks in Canada, Pope Francis has asked indigenous residential school survivors for forgiveness.\r\n\"I am deeply sorry,\" the Pope said on the grounds of a former residential schoo… [+2381 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Police confirm multiple victims in British Columbia shootings",
        "description": "Police say the victims were homeless and a lone suspect has been taken into custody.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-62296874",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/44D8/production/_126042671_gettyimages-1237324023.jpg",
        "publishedAt": "2022-07-25T15:37:22.6445358Z",
        "content": "Police have confirmed multiple victims in an early morning shooting spree in the Canadian province of British Columbia.\r\nEmergency alerts issued shortly after 06:00 local time (11:00 GMT) warned of \"… [+494 chars]"
        }
        ]
        

constructor () {
    super()

    this.state = {
        articles : this.articles,
        loding : false
    }
}

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlings</h2>
        <div className="row">
    
{this.state.articles.map((element) => {

return <div className="col-md-3" key = {element.url}>
       <NewsItems title = {element.title} description = {element.description}  imageUrl = {element.urlToImage} newsUrl = {element.url} />
       
      </div> 
 } ) }
       
        </div>
      </div>
    )
  }
}
