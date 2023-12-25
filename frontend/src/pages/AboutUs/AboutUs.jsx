import "./AboutUs.scss";

const aboutUsArray = [
  {
    name: "Florence",
    lastname: "Buchelet",
    gitHub: "https://github.com/FlorenceBuchelet",
    linkedIn: "https://www.linkedin.com/in/florence-buchelet-928a7a228/",
    img: "./src/assets/florence.png",
  },
  {
    name: "Thomas",
    lastname: "Nigon",
    gitHub: "https://github.com/Thomas-Nigon",
    linkedIn: "https://www.linkedin.com/in/thomas-nigon/",
    img: "./src/assets/thomas.jpeg",
  },
  {
    name: "Hélène",
    lastname: "Rampelberg",
    gitHub: "https://github.com/HeleneRamp",
    linkedIn:
      "https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-rampelberg-117056292/",
    img: "./src/assets/helene.jpeg",
  },
  {
    name: "Frédéric",
    lastname: "Ticon",
    gitHub: "https://github.com/TICONFRED27",
    linkedIn: "https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-ticon-149a2357/",
    img: "./src/assets/fred.jpeg",
  },
];

function AboutUs() {
  return (
    <section
      className="aboutUs"
      style={{ overflow: "scroll", overflowX: "clip" }}
    >
      {aboutUsArray.map((me) => (
        <article className="aboutUs__card">
          <img
            className="aboutUs__img"
            src={me.img}
            alt={`Avatar de ${me.name}`}
          />
          <span className="aboutUs__description">
            <h2 className="aboutUs__name fancy">{me.name}</h2>
            <h2 className="aboutUs__name fancy">{me.lastname}</h2>
            <a target="_blank" rel="noreferrer" href={me.gitHub}>
              <img
                className="aboutUs__logos"
                src="./src/assets/signe-github.png"
                alt="GitHub logo"
              />
            </a>
            <a target="_blank" rel="noreferrer" href={me.linkedIn}>
              <img
                className="aboutUs__logos"
                src="./src/assets/logo-linkedin.png"
                alt="LinkedIn logo"
              />
            </a>
          </span>
        </article>
      ))}
    </section>
  );
}

export default AboutUs;
