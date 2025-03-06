import Newsitem from "./Newsitem";
import Spinner from "./spinner";
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import Error from "./Error";
import dark from "./../assets/dark-mode.png"









const News = (props) => {
  // static propTypes={
  //   category: this.propTypes.string
  // }


 

  const [results, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = `NEWS - ${props.category.toUpperCase()}`;
    updatepage();
  }, []);

  const updatepage = async () => {
    props.setProgress(25);
    const url = `https://newsdata.io/api/1/latest?apikey=${props.api}&country=in&category=${props.category}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    if (parsedata.status === "error") {
      console.log("error occurred");
      setError(true);
    } else {
      setArticles(parsedata.results);
      setTotalResults(parsedata.totalResults);
      setLoading(false);
      props.setProgress(100);
      setNextPage(parsedata.nextPage);
      setError(false);
    }
  };

  const fetchMoreData = async () => {
    const url = `https://newsdata.io/api/1/latest?apikey=${props.api}&country=in&category=${props.category}&page=${nextPage}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    if (parsedata.status === "error") {
      console.log("error occurred");
      setError(true);
    } else {
      setArticles(results.concat(parsedata.results));
      setTotalResults(parsedata.totalResults);
      setLoading(false);
      setNextPage(parsedata.nextPage);
      setError(false);
    }
  };

  if (error) {
    return(<>
    <Error toggle={props.toggle}/>
    </>) ;
  }

  return (
    <div>
      <h1
        className={`text-center text-3xl font-extrabold text-blue-600 mt-16 p-9`}
        style={{ paddingBottom: "10px" }}
      >
        NEWS - {props.category.toUpperCase()}
      </h1>
      
      <InfiniteScroll
        dataLength={results.length}
        next={fetchMoreData}
        hasMore={results.length < totalResults}
        loader={<Spinner />}
      >
        {loading && <Spinner />}
        <div className="flex p-5 gap-14 flex-wrap justify-center">
          {results.map((element, index) => {
            return (
              <Newsitem
                title={element.title ? element.title : " "}
                discription={element.description ? element.description : element.content}
                url={element.source_url ? element.source_url : " "}
                urlimage={element.image_url}
                key={element.source_url ? `${element.source_url}-${index}` : index}
                author={element.creator ? element.creator : "Unknown"}
                date={element.pubDate ? element.pubDate : "None"}
                source={element.source_name}
                isdark={props.dark1}
              />
            );
          })}
        </div>
      </InfiniteScroll>
      <button type="button" onClick={props.toggle} className="right-0 m-3 mb-10 fixed bottom-0 inline-flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-full ">
           <img src={dark} className="w-12" alt="" />
</button>
    </div>
  );
};

News.defaultProps = {
  category: "general",
};

export default News;