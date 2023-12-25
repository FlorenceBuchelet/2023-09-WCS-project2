import "./Form.scss";

function Form() {
  return (
    <main className="form">
      <aside>
        <img
          alt="papier déchiré"
          className="form__img--top"
          src="./src/assets/02.png"
        />
        <article className="form__explanation">
          <p>Ici on explique à quoi sert cette page</p>
        </article>
        <img
          alt="papier déchiré"
          className="form__img--bottom"
          src="./src/assets/01.png"
        />
      </aside>
      <form className="form__form fancy" method="post">
        <h2>Formulaire</h2>
        <label htmlFor="photo">Photo *</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/png, image/jpeg"
          required
        />
        <label htmlFor="photograph">Photographe</label>
        <input id="photograph" type="text" />
        <label htmlFor="contact">Email de contact</label>
        <input id="email" name="contact" type="email" />
        <label htmlFor="artist">Artiste.s</label>
        <select id="artist">
          <option>liste des artistes</option>
          <option>Plusieurs possibles</option>
        </select>
        <label htmlFor="adress">Adresse *</label>
        <label htmlFor="city">Ville *</label>
        <label htmlFor="description">Description</label>
        <textarea id="description" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default Form;
