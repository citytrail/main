import Card from "./subcomp_zoek/Card";
import { useState, useReducer } from "react";
import {
  useGetAllLandenQuery,
  useAddOneLandMutation,
} from "../../data/landenApi";
import { Status } from "../hooks/main_functions";
import { useSelector } from "react-redux";

export default function AppZoek() {
  const { data: countryData, isError, isLoading } = useGetAllLandenQuery();
  const [postLand] = useAddOneLandMutation();
  const [addLand, setAddland] = useState("");

  const { admin } = useSelector((state) => state.adminState);

  function handleLandSubmit(e) {
    e.preventDefault();
    postLand(addLand);
    setAddland("");
  }
  return (
    <>
      <section className="search">
        <h2 className="search__title">Landen</h2>
        {admin && (
          <div className="admin">
            <form className="admin__form" onSubmit={handleLandSubmit}>
              <label className="admin__form__label">
                Land toevoegen
                <input
                  type="text"
                  value={addLand}
                  className="admin__form__label__input"
                  onInput={(e) => setAddland(e.target.value)}
                  minLength="2"
                  maxlength="20"
                  required
                />
              </label>
              <button type="submit" className="admin__form__button">
                Land toevoegen
              </button>
            </form>
          </div>
        )}
        <Status
          error={isError}
          loading={isLoading}
          loader={"../src/images/loading.gif"}
        />
        {countryData && countryData.length > 0 && (
          <ul className="search__list">
            {countryData.map(({ id, name, flag }) => {
              return (
                <li className="search__list__item" key={id}>
                  <Card country={name} id={id} flag={flag} />
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
}
