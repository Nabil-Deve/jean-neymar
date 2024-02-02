export default function Sidebar(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#3f3628",
        paddingTop: "70px",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center", color: "white" }}>Jean Neymar</h1>
        <div className="link" style={{ marginTop: "50px" }}>
          <a href="/">Accueil</a>
        </div>
        <div className="link">
          <a href="/about">A propos</a>
        </div>
        <div className="link">
          <a href="/books">Oeuvres</a>
        </div>
      </div>
    </div>
  );
}
