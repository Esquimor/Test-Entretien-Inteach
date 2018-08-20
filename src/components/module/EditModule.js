import React, { Component } from "react";
import { connect } from "react-redux";
import {
  editNameLesson,
  editNameModule,
  editTypeLesson,
  addLesson,
  deleteLesson,
  addCard,
  deleteCard
} from "../../store/actions";
import { Link } from "react-router-dom";

const mapDispatchToProps = dispatch => {
  return {
    onEditNameModule: payload => {
      dispatch(editNameModule(payload));
    },
    onEditNameLesson: payload => {
      dispatch(editNameLesson(payload));
    },
    onEditTypeLesson: payload => {
      dispatch(editTypeLesson(payload));
    },
    onAddLesson: payload => {
      dispatch(addLesson(payload));
    },
    onDeleteLesson: payload => {
      dispatch(deleteLesson(payload));
    },
    onAddCard: payload => {
      dispatch(addCard(payload));
    },
    onDeleteCard: payload => {
      dispatch(deleteCard(payload));
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    module: state.modules.find(e => e.id == ownProps.match.params.id)
  };
};

class EditModule extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleEditNameModule = e => {
    this.props.onEditNameModule({
      id: this.props.module.id,
      name: e.target.value.trim()
    });
  };

  handleEditNameLessons = (e, num) => {
    this.props.onEditNameLesson({
      id: this.props.module.id,
      num,
      name: e.target.value.trim()
    });
  };

  handleEditTypeLessons = (e, num) => {
    this.props.onEditTypeLesson({
      id: this.props.module.id,
      num,
      type: e.target.value.trim()
    });
  };

  handleAddLesson = e => {
    e.preventDefault();
    this.props.onAddLesson({
      id: this.props.module.id
    });
    this.forceUpdate();
  };

  handleDeleteLesson = (e, num) => {
    e.preventDefault();
    this.props.onDeleteLesson({
      id: this.props.module.id,
      num
    });
    this.forceUpdate();
  };

  handleAddCard = (e, numLesson) => {
    e.preventDefault();
    this.props.onAddCard({
      id: this.props.module.id,
      numLesson
    });
    this.forceUpdate();
  };

  handleDeleteCard = (e, numLesson, numCard) => {
    e.preventDefault();
    this.props.onDeleteCard({
      id: this.props.module.id,
      numLesson,
      numCard
    });
    this.forceUpdate();
  };

  render() {
    return (
      <form className="Dashboard">
        <Link className="link back"  to="/dashboard">Back</Link>
        <h2>{this.props.module.name}</h2>
        <div>
          <label>Name</label>
          <input
           className="Input"
            ref={input => (this.getName = input)}
            type="text"
            placeholder="Name"
            name="name"
            defaultValue={this.props.module.name}
            onBlur={this.handleEditNameModule}
          />
        </div>
        <div>
          <h3>Lessons</h3>
          {this.props.module.lessons.map(lesson => {
            return (
              <div className="Lessons" key={lesson.id}>
                <label>Name</label>
                <input
           className="Input"
                  ref={input => (this.getName = input)}
                  type="text"
                  placeholder="Name"
                  name="name"
                  defaultValue={lesson.name}
                  onBlur={e => this.handleEditNameLessons(e, lesson.id)}
                />
                <select
                  onChange={e => this.handleEditTypeLessons(e, lesson.id)}
                  defaultValue={lesson.type}
                >
                  <option value="classical">classical</option>
                  <option value="evaluation">evaluation</option>
                </select>
                <h4>Cards</h4>
                {lesson.cards.map(card => {
                  return (
                    <div key={card.id}>
                      <span>{card.name}</span>
                      <button className="link"
                        onClick={e =>
                          this.handleDeleteCard(e, lesson.id, card.id)
                        }
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
                <button className="link" onClick={e => this.handleAddCard(e, lesson.id)}>
                  Add a card
                </button>
                <button className="link" onClick={e => this.handleDeleteLesson(e, lesson.id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <button className="link"  onClick={this.handleAddLesson}>Add a lesson</button>
      </form>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModule);
