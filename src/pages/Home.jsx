import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home block">
      <div>
        <h1>Test your knowledge</h1>
        <div>
          <h3>Here you can test your knowledge on the following topics:</h3>
          <div>
            <ul className="mainNav">
              <li>
                <button>
                  <Link to="/html">
                    <img src="img/html5.png" alt="html" />
                  </Link>
                </button>
              </li>
              <li>
                <button>
                  <Link to="/css">
                    <img src="img/css.png" alt="css" />
                  </Link>
                </button>
              </li>
              <li>
                <button>
                  <Link to="/js">
                    <img src="img/js.png" alt="js" />
                  </Link>
                </button>
              </li>
              <li>
                <button>
                  <Link to="/react">
                    <img src="img/react.png" alt="rect" />
                  </Link>
                </button>
              </li>
            </ul>
          </div>
          <p>
            The questions in the tests are suitable for the entry level. Good
            luck!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
