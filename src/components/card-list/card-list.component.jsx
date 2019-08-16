import React from "react";

import Card from '../card/card.component';

import "./card-list.styles.css";

const CardList = props => {
  return (
    <div className="card-list">
      {
        props.schools.map(school => ( <Card key={school.id} school={ school } /> ))
      }
    </div>
  );
};

export default CardList;
