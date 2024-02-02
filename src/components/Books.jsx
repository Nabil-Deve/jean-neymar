export default function Books(props) {
  return (
    <div className="cover-books">
      <h1>Ma vie, mon oeuvre</h1>
      <div className="jean-books">
        <div>
          <img
            src="https://jean-neymar.netlify.app/static/media/cover0.240e1126.jpg"
            onClick={() => (window.location = "/books/2")}
          />
          <p>Après coup, Jean rigole</p>
        </div>
        <div>
          {" "}
          <img
            src="https://jean-neymar.netlify.app/static/media/cover1.9f367c22.jpg"
            onClick={() => (window.location = "/books/2")}
          />
          <p>Des vacances aux Bahamas</p>
        </div>
        <div>
          <img
            src="https://jean-neymar.netlify.app/static/media/cover2.55ab26d3.jpg"
            onClick={() => (window.location = "/books/2")}
          />
          <p>Il me reste encore un œil</p>
        </div>
      </div>
    </div>
  );
}
