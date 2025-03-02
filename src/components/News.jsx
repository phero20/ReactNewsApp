import Newsitem from "./Newsitem";
import Spinner from "./spinner";
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";

const News = (props) => {
  // static propTypes={
  //   category: this.propTypes.string
  // }
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    document.title = `NEWS - ${props.category.toUpperCase()}`;
    updatepage();
  }, []);

  const updatepage = async () => {
    props.setProgress(25);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.api}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    console.log(data);
    let parsedata = await data.json();
    console.log(parsedata);
    setArticles(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.api}&page=${page}`;
    setLoading(true);
    let data = await fetch(url);
    console.log(data);
    let parsedata = await data.json();
    console.log(parsedata);
    setArticles(articles.concat(parsedata.articles));
    setTotalResults(parsedata.totalResults);
    setLoading(false);
  };

  return (
    <div>
      <h1
        className="text-center text-3xl font-extrabold text-blue-600 mt-16 p-9"
        style={{ paddingBottom: "10px"}}
      >
        NEWS - {props.category.toUpperCase()}
      </h1>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        {loading && <Spinner />}
        <div className="flex p-5 gap-14 flex-wrap justify-center">
          {articles.map((element, index) => {
            return (
              <Newsitem
                title={element.title ? element.title : " "}
                discription={element.description ? element.description : " "}
                url={element.url ? element.url : " "}
                urlimage={element.urlToImage}
                key={element.url ? `${element.url}-${index}` : index}
                author={element.author ? element.author : "Unknown"}
                date={element.publishedAt ? element.publishedAt : "None"}
                source={element.source.name}
              />
            );
          })}
        </div>
      </InfiniteScroll>
      {/* <div className="btn flex justify-between p-10">
<button disabled={this.state.page<=1} type="button" onClick={this.handlePrev} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">&larr; Previous</button>
<button disabled={this.state.page+1>Math.ceil(this.state.totalresults/12)} type="button" onClick={this.handleNext} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next &rarr;</button>
</div> */}
    </div>
  );
};

News.defaultProps = {
  category: "general",
};
export default News;
