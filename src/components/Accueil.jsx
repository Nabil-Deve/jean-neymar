export default function Accueil(props) {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h1>Prochainement en librairie!</h1>
      <img
        style={{ textAlign: "center", marginTop: "150px" }}
        src="https://jean-neymar.netlify.app/static/media/cover2.55ab26d3.jpg"
        className="cover"
        onClick={() => (window.location = "/books/2")}
      />
      <p>Il me reste encore un oeil</p>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
        molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
        Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
        a, enim".
      </p>
    </div>
  );
}
