import { Link } from "react-router-dom";
import "./Card.css";

interface CardProps {
  title?: string;
  img?: string;
  description?: string;
  url?: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ img, title, description, url, link }) => {
  return (
    <div className="card-body">
      {img ? (
        <div className="card-body-left">
          <img src={img} />
        </div>
      ) : null}
      <div className="card-body-right">
        <div className="title">
          {url ? (
            <Link className="card-link" to={url}>
              <h3>{title}</h3>
            </Link>
          ) : (
            <h3>{title}</h3>
          )}
        </div>
        <div className="card-description">
          <p>
            {description}
            {link ? <Link to="/contact">{link}</Link> : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
