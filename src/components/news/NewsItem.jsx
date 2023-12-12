import PropTypes from "prop-types";

const NewsItem = (props) => {
  let { title, desc, imgUrl, newsUrl, publishedAt, author, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ zIndex: 1, left: "50%" }}
        >
          {source.name}
        </span>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on{" "}
              {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
            rel="noreferrer"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  imgUrl: PropTypes.string,
  newsUrl: PropTypes.string,
  publishedAt: PropTypes.string,
  author: PropTypes.string,
  source: PropTypes.object,
};

export default NewsItem;
