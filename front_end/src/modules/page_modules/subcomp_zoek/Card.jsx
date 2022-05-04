export default function CountryCard({ country: { lanId, lanNaam, lanVlag } }) {
  return (
    <>
      <div className="card">
        <div className="card__imgholder">
          <img
            className="card__imgholder__img"
            alt="land foto"
            src=".\src\images\new_york.jpg"
          />
          <img
            className="card__imgholder__flag"
            alt="vlag land"
            src=".\src\images\america.png"
          />
        </div>
        <div className="card__text">
          <h3 className="card__text__title">{lanNaam}</h3>
        </div>
      </div>
    </>
  );
}
