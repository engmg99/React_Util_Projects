import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "../layouts/Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [newsData, setNewsData] = useState({});
  const [loading, setLoading] = useState(false);
  const [newsPage, setNewsPage] = useState(1);

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsPage]);

  const handlePreviousClick = () => {
    setNewsPage(newsPage - 1);
    // updateNews(); // This was not working with the latest state update therfore need to use newsPage state in useEffect hook
  };

  const handleNextClick = () => {
    setNewsPage(newsPage + 1);
  };

  const updateNews = async () => {
    let url = `http://localhost:5000/getNews/${props.category}/${newsPage}/${props.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${newsPage}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setNewsData(parsedData);
    setLoading(false);
  };

  return (
    <div
      className="container my-3"
      style={{ color: props.appMode === "light" ? "#042743" : "white" }}
    >
      <h1 className="text-center">
        Top Headlines -{" "}
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
      </h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          newsData?.articles?.map((ele) => (
            <div className="col-md-3" key={ele.url}>
              <NewsItem
                title={ele?.title}
                desc={ele?.description}
                imgUrl={ele?.urlToImage}
                newsUrl={ele?.url}
                publishedAt={ele?.publishedAt}
                author={ele?.author}
                source={ele?.source}
              />
            </div>
          ))}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlePreviousClick}
          disabled={newsPage <= 1}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
          disabled={
            newsPage + 1 > Math.ceil(newsData?.totalResults / props.pageSize)
          }
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.propTypes = {
  appMode: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
};

export default News;
