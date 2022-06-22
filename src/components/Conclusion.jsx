import React from "react";

const Conclusion = ({data, onClick} ) => {
  const {name, email, favorite, series, genre, watched, interested} = data;

  return (
    <>
    {watched? 
      <div className="conclusion">
        <div className="conclusion__wrapper">
          <h1 className="conclusion__title">Thanks {name} for completed survey</h1>
          <p className="conclusion__subtitle">{favorite} is not bad, but "Better call Saul" perfecto</p>
          <button className="btn-back" onClick={onClick}>Back</button>
        </div>
      </div> 
      :
      <div className="conclusion">
          <div className="conclusion__wrapper">
        <header className="header">
          <h1 className="header__title">You don't watch series?</h1>
        </header>
          <button className="btn-back" onClick={onClick}>Back</button>
        </div>
      </div> 
      }
    </>
  )
}

export default Conclusion;