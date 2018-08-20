import React from "react";
import { connect } from "react-redux";
import "./Module.css";

const Module = ({ module: { name, lessons } }) => {
  return (
    <div className="Module">
      <h2>{name}</h2>
      {lessons.map(lesson => {
        return (
          <div className="lesson" key={lesson.id}>
            <h2>{lesson.name}</h2>
            <h3>{lesson.type}</h3>
            {lesson.cards.map(card => {
              return <div className="card" key={card.id}>{card.name}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default connect(
  undefined,
  undefined
)(Module);
