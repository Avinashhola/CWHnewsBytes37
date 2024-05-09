// ----------------------------------------RELATED TO (STATE BASED) and with static data------------------------------------------------//



import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export default class NewsComp extends Component {


  articlesy = [
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "SAM MEDNICK, JACK JEFFERY",
      "title": "Cease-fire: Israel downplays chances of end to war with Hamas - The Associated Press",
      "description": "A Hamas delegation has arrived in Cairo and Egyptian state media say there has been “noticeable progress” in cease-fire talks with Israel. But an Israeli official downplays the prospects for a full end to the war. Egyptian state media say a consensus has been…",
      "url": "https://apnews.com/article/israel-hamas-war-news-05-04-2024-4eae8b7a75440d4dd9a201219d60bcd9",
      "urlToImage": "https://dims.apnews.com/dims4/default/c007609/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F58%2Fa02b7649933433dafa2c29cce61c%2F7c8c6e98ff0b4dd19d93d178e3af8cba",
      "publishedAt": "2024-05-04T14:27:00Z",
      "content": "TEL AVIV, Israel (AP) A delegation of the Palestinian militant group Hamas was in Cairo on Saturday as Egyptian state media reported noticeable progress in cease-fire talks with Israel, though an Isr… [+4574 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Mary Gilbert, Joe Sutton",
      "title": "Evacuations ordered, homes damaged in Texas as rivers surge to Hurricane Harvey levels. And more rain is on the way - CNN",
      "description": "Flooding is intensifying in Texas, where more rain is expected over the weekend in the wake of strong storms and downpours that swept away vehicles, damaged homes and triggered evacuations.",
      "url": "https://www.cnn.com/2024/05/03/weather/texas-houston-flooding-tornadoes/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2151176353.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-05-04T13:59:00Z",
      "content": "Flooding is intensifying in Texas, where more rain is expected over the weekend in the wake of strong storms and downpours that swept away vehicles, damaged homes and triggered evacuations.\r\nMost of … [+7579 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Rob Picheta",
      "title": "Sadiq Khan wins third term as London mayor, Labour sources say, capping strong showing for opposition in English elections - CNN",
      "description": "Sadiq Khan won a third term as London’s mayor on Saturday, capping a round of local elections across England that confirmed the political supremacy of the Labour party and caused misery for Rishi Sunak’s government.",
      "url": "https://www.cnn.com/2024/05/04/uk/sadiq-khan-london-mayor-election-gbr-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/4e40ce13-9937-4fe8-abb0-f29aacffd7dd.jpg?q=w_4997,h_2810,x_0,y_326,c_crop/w_800",
      "publishedAt": "2024-05-04T13:56:00Z",
      "content": "Sadiq Khan has won a third term as Londons mayor, Labour Party sources claimed on Saturday, capping a round of local elections across England that confirmed the political supremacy of the main opposi… [+3005 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Ashley Strickland",
      "title": "Look up for the dazzling Eta Aquariid meteor shower - CNN",
      "description": "Watch for the Eta Aquariid meteor shower in the early morning hours of May 5 and 6. Experts believe spectators may be in for a more dazzling show than usual.",
      "url": "https://www.cnn.com/2024/05/04/world/eta-aquariid-meteor-shower-scn/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/shutterstock-editorial-8088253a.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-05-04T13:45:00Z",
      "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nMay kicks off with the Eta Aquariid meteor shower, and… [+4222 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "USA TODAY",
      "title": "Orangutan seen healing face wound with medicinal plant for first time - USA TODAY",
      "description": null,
      "url": "https://www.usatoday.com/story/news/world/2024/05/02/orangutan-medicinal-plant-heals-face-wound/73547761007/",
      "urlToImage": null,
      "publishedAt": "2024-05-04T13:42:42Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": null,
      "title": "How to watch the 2024 Kentucky Derby today: Post positions, odds, where to stream and more - Yahoo Sports",
      "description": null,
      "url": "https://sports.yahoo.com/how-to-watch-the-2024-kentucky-derby-today-post-positions-odds-where-to-stream-and-more-103001375.html",
      "urlToImage": null,
      "publishedAt": "2024-05-04T13:35:46Z",
      "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "ERIK VERDUZCO, LEAH WILLINGHAM",
      "title": "Charlotte standoff: Livestreams show growing appetite for social media video - The Associated Press",
      "description": "A deadly shootout in Charlotte that left five dead illustrates how smartphone-wielding bystanders don’t always run for cover when bullets start to fly. Increasingly, they look to livestream their perspective of the attack. Experts say the reaction reflects th…",
      "url": "https://apnews.com/article/charlotte-north-carolina-law-enforcement-shooting-livestream-b30426adb611ce203addadb7c9750e3c",
      "urlToImage": "https://dims.apnews.com/dims4/default/23de0ea/2147483647/strip/true/crop/1200x675+0+63/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd2%2F19%2Fc0a069ef9e2cb9259ad44a694eea%2F6671ead9e1ca449b9fa3e66833731c60",
      "publishedAt": "2024-05-04T12:48:00Z",
      "content": "CHARLOTTE, N.C. (AP) Saing Chhoeun was locked out of his Charlotte, North Carolina, home on Monday as law enforcement with high-powered rifles descended into his yard and garage, using a car as a shi… [+5219 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Fred Imbert",
      "title": "Berkshire Hathaway operating earnings soar 39% as Buffett's cash hoard swells to record $188 billion - CNBC",
      "description": "Berkshire Hathaway reported a huge year-over-year increase in operating earnings in the first quarter, while its cash holdings bubbled to record levels.",
      "url": "https://www.cnbc.com/2024/05/04/berkshire-hathaway-brka-earnings-q1-2024.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107410285-1714759879586-untitled-184-643.jpg?v=1714826860&w=1920&h=1080",
      "publishedAt": "2024-05-04T12:47:22Z",
      "content": "Berkshire Hathaway reported Saturday a huge year-over-year increase in operating earnings in the first quarter, while its cash holdings bubbled to record levels.\r\nThe Warren Buffett-led conglomerate … [+2126 chars]"
    },
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Stephen Quillen",
      "title": "Israel’s war on Gaza live: ‘Progress’ in Cairo truce talks | Israel War on Gaza News - Al Jazeera English",
      "description": "Hamas says it is ‘determined to achieve an agreement’ as Gaza truce negotiations in Cairo come to a head.",
      "url": "https://www.aljazeera.com/news/liveblog/2024/5/4/israels-war-on-gaza-live-talks-in-egypt-set-to-steer-wars-direction",
      "urlToImage": "https://www.aljazeera.com/images/logo_aje_social.png",
      "publishedAt": "2024-05-04T12:25:05Z",
      "content": "blinking-dot\r\nLive updatesLive updates, \r\nHamas says it is determined to achieve an agreement as Gaza truce negotiations in Cairo come to a head with the CIA chief in attendance."
    },
    {
      "source": {
        "id": "axios",
        "name": "Axios"
      },
      "author": "Axios",
      "title": "First House Democrat calls on Henry Cuellar to resign over federal bribery charges - Axios",
      "description": null,
      "url": "https://www.axios.com/2024/05/04/henry-cuellar-resign-indictment-bribery",
      "urlToImage": null,
      "publishedAt": "2024-05-04T12:22:30Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "The Athletic"
      },
      "author": "Joe Vardon",
      "title": "Cavaliers must rely on experience after losing Game 6 despite Donovan Mitchell’s 50 points - The Athletic",
      "description": "As the Cavs enter a pivotal Game 7 on Sunday, experience is on their side.",
      "url": "https://theathletic.com/5470924/2024/05/04/cavaliers-must-rely-on-experience-after-losing-game-6-despite-donovan-mitchells-50-points/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/05/04010337/GettyImages-2150780407-scaled.jpg",
      "publishedAt": "2024-05-04T12:04:48Z",
      "content": "ORLANDO, Fla. Donovan Mitchell had scored 50 points in a playoff game and lost before he did it Friday in central Florida no less.\r\nFour years ago, about 20 miles west of downtown Orlando on I-4, in … [+5709 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Live Science"
      },
      "author": "Sascha Pare",
      "title": "Hammer-headed bat: The African megabat that looks like a gargoyle and holds honking pageants - Livescience.com",
      "description": "Hammer-headed bats are named after the males' oversized boxy heads, which evolved to amplify and project the honking sounds they produce to impress females during courtship displays.",
      "url": "https://www.livescience.com/animals/bats/hammer-headed-bat-the-african-megabat-that-looks-like-a-gargoyle-and-holds-honking-pageants",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/euvEvT9MiQyNLFqiSuVcMa-1200-80.jpg",
      "publishedAt": "2024-05-04T12:00:00Z",
      "content": "Name: Hammer-headed bat (Hypsignathus monstrosus)\r\nWhere it lives: Lowland forests of West and Central Africa\r\nWhat it eats: Fruit — including figs, bananas, guavas and mangoes — and flies\r\nWhy it's … [+2695 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Michael Dorgan",
      "title": "California Tuberculosis outbreak kills 1, infects 14 as officials declare health emergency - Fox News",
      "description": "A public health emergency has been announced in Long Beach, California after a deadly outbreak of tuberculosis (TB) resulted in one person dying and nine people being hospitalized.",
      "url": "https://www.foxnews.com/health/california-tuberculosis-outbreak-kills-1-infects-14-officials-declare-health-emergency",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/TB1.jpg",
      "publishedAt": "2024-05-04T11:35:00Z",
      "content": "A deadly outbreak of tuberculosis (TB) has occurred inside a California hotel housing homeless people, leading to the death of one person and forcing city health officials to declare a public health … [+2744 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "EVELYNE MUSAMBI",
      "title": "Power blackouts hit Tanzania as Cyclone Hidaya intensifies toward the country's coastline - The Associated Press",
      "description": "A major blackout has hit most of Tanzania as heavy rains and strong winds from Cyclone Hidaya lashed the country following weeks of flooding in the region. Ferry services between Tanzania’s commercial hub, Dar es Salaam, and Zanzibar were suspended as Cyclone…",
      "url": "https://apnews.com/article/tanzania-cyclone-hidaya-6507779acc4177cc132b63285a998c7d",
      "urlToImage": "https://dims.apnews.com/dims4/default/73bbe97/2147483647/strip/true/crop/5006x2816+0+275/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F25%2F6b%2F75c4e13664c6bac26094e6d892bc%2F86c74288d5234d21a44bd53808312b6d",
      "publishedAt": "2024-05-04T11:34:00Z",
      "content": "NAIROBI, Kenya (AP) A major blackout hit most of Tanzania on Saturday as heavy rains and strong winds from Cyclone Hidaya lashed the country following weeks of flooding in the region. \r\nFerry service… [+662 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Space.com"
      },
      "author": "Tariq Malik",
      "title": "What time is Boeing's 1st Starliner astronaut launch for NASA on May 6? - Space.com",
      "description": "Boeing's Starliner Crew Flight Test is scheduled to launch on Monday, but could fly on May 7, 10 or 11, weather permitting.",
      "url": "https://www.space.com/boeing-starliner-1st-astronaut-launch-what-time",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/dHtYiPbP2VRo7BJURc7J95-1200-80.jpg",
      "publishedAt": "2024-05-04T10:58:10Z",
      "content": "After years of delays, Boeing is finally ready to launch its first-ever Starliner astronaut mission for NASA on a test flight to the International Space Station on May 6, and if you're hoping to watc… [+5312 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Reuters",
      "title": "Drones above, police at the gates: Columbia protest camp's final moments - Reuters",
      "description": null,
      "url": "https://www.reuters.com/world/us/drones-above-police-gates-columbia-protest-camps-final-moments-2024-05-04/",
      "urlToImage": null,
      "publishedAt": "2024-05-04T10:26:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Kent State shootings: The 1970 student protests that shook the US - BBC.com",
      "description": null,
      "url": "https://www.bbc.com/culture/article/20240503-kent-state-university-1970-protests-that-shook-the-us",
      "urlToImage": null,
      "publishedAt": "2024-05-04T10:03:55Z",
      "content": null
    },
    {
      "source": {
        "id": "newsweek",
        "name": "Newsweek"
      },
      "author": "Pandora Dewan",
      "title": "Bird Flu in US: What We Know, What We Don't - Newsweek",
      "description": "After 1 in 5 commercial milk samples in the U.S. were found to contain traces of the virus, should we be concerned?",
      "url": "https://www.newsweek.com/bird-avian-flu-us-cows-cats-humans-latest-update-1897118",
      "urlToImage": "https://d.newsweek.com/en/full/2387967/bird-flu-test.jpg",
      "publishedAt": "2024-05-04T09:00:01Z",
      "content": "The U.S. is in the midst of a multistate outbreak of bird flu, with 1 in 5 commercial milk samples testing positive for genetic traces of the virus. But does the virus pose any threat to humans?\r\nHig… [+5120 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "MARK STEVENSON",
      "title": "Mexican officials say 3 bodies recovered in Baja California during search for 3 missing foreigners - The Associated Press",
      "description": "Mexican authorities say three bodies have been recovered in an area of Baja California near where two Australians and an American went missing last weekend. The state prosecutors office did not say Friday night whether the bodies were those of the foreigners,…",
      "url": "https://apnews.com/article/mexico-missing-foreigners-australian-american-baja-california-53eb2f306bd3bdc30e5b66ccf03d950f",
      "urlToImage": "https://dims.apnews.com/dims4/default/527f5f3/2147483647/strip/true/crop/2946x1657+0+153/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa3%2F19%2Ff48977f08b6057e2db4a9d2d6262%2F770e1cb561cd44e1a0485caebf38a4cf",
      "publishedAt": "2024-05-04T06:58:00Z",
      "content": "MEXICO CITY (AP) Mexican authorities said Friday that three bodies were recovered in an area of Baja California near where two Australians and an American went missing last weekend during an apparent… [+3326 chars]"
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: this.articlesy,
      loading: false,
      pageCount: 0, // Initialize page count
      currentPage: 1, // Initialize current page
      adsPerPage: 4 // Number of ads to display per page
    }
  }


  handleNextClick = () => {
    // Update current page when navigating to the next page
  
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,

    }));
  };

  handlePrevClick = () => {
    // Update current page when navigating to the previous page
  
    this.setState(prevState => ({
      currentPage: Math.max(prevState.currentPage - 1, 1),
      
    }));
  };



  render() {

    const { articles, currentPage, adsPerPage } = this.state;

    // Calculate index of the first and last ads to display on the current page
    const indexOfLastAd = currentPage * adsPerPage;
    const indexOfFirstAd = indexOfLastAd - adsPerPage;
    // Get ads for the current page
    const currentAds = articles.slice(indexOfFirstAd, indexOfLastAd);
    // Determine if Prev button should be disabled
    const isPrevDisabled = currentPage === 1;

    // Determine if Next button should be disabled
    const isNextDisabled = indexOfLastAd >= articles.length;


    return (

      <div className='container my-3'>
        <h2 className='text-center pb-3'>Channel37 -- FEATURED AD's</h2>

        <div className='row'>
          {/* {this.state.articles.map((elem)=>{ */}
          {currentAds.map((elem) => {

            return <div className='col-md-4' key={elem.url}>
              <NewsItems
                imageUrl={elem.urlToImage ? elem.urlToImage : "https://img.freepik.com/free-vector/no-multiply-font-vector-text-typography_53876-168227.jpg"}

                // title={elem.title.slice(0,40)}
                // descript= {elem.description.slice(0,80)}
                title={elem.title ? elem.title.slice(0, 40) : ""}
                descript={elem.description ? elem.description.slice(0, 80) : ''}
                newsUrl={elem.url}
              />
            </div>
          })
          }
          <div className='container d-flex justify-content-between my-2'>
            <button className="btn btn-dark" onClick={this.handlePrevClick} disabled={isPrevDisabled}>&larr; Prev </button>
            <button className="btn btn-dark" onClick={this.handleNextClick} disabled={isNextDisabled}>Next &rarr;</button>

          </div>
        </div>

      </div>


    )
  }
}
