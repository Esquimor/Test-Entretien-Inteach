import * as types from "./types";

let initState = [
  {
    id: 1,
    owner: 2,
    name: "Module 1",
    lessons: [
      {
        id: 1,
        type: "classical",
        name: "Lesson 1",
        cards: [
          {
            id: 1,
            name: "Card 1"
          },
          {
            id: 2,
            name: "Card 2"
          },
          {
            id: 3,
            name: "Car 3"
          }
        ]
      },
      {
        id: 2,
        type: "evaluation",
        name: "Lesson 2",
        cards: [
          {
            id: 1,
            name: "Card 1"
          },
          {
            id: 2,
            name: "Card 2"
          },
          {
            id: 3,
            name: "Car 3"
          },
          {
            id: 4,
            name: "Card 4"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    owner: 1,
    name: "Module 2",
    lessons: [
      {
        id: 1,
        type: "classical",
        name: "Lesson 1",
        cards: [
          {
            id: 1,
            name: "Card 1"
          },
          {
            id: 2,
            name: "Card 2"
          }
        ]
      }
    ]
  }
];

export default function reducer(state = initState, action) {
  const userType = localStorage.getItem("userType");
  const userId = localStorage.getItem("userId");
  switch (action.type) {
    case types.ADD_MODULE:
      if (userType >= 2) {
        const newModule = Object.assign({ owner: userId, lessons: [] }, action.payload);
        return [...state, newModule];
      }
      return state;
    case types.DELETE_MODULE:
      if (userType == 3 || userId == module.owner) {
        return state.filter(module => module.id !== action.payload.id);
      }
      return state;
    case types.EDIT_NAME_MODULE:
      if (userType == 3 || userId == module.owner) {
        const editModules = state.map(module => {
          if (module.id === action.payload.id) {
            module.name = action.payload.name;
            return module;
          }
          return module;
        });
        return editModules;
      }
      return state;
    case types.EDIT_NAME_LESSON:
      if (userType == 3 || userId == module.owner) {
        const editLessonsName = state.map(module => {
          if (module.id === action.payload.id) {
            module.lessons.map(lesson => {
              if (lesson.id === action.payload.num) {
                lesson.name = action.payload.name;
                return lesson;
              }
              return lesson;
            });
          }
          return module;
        });
        return editLessonsName;
      }
      return state;
    case types.EDIT_TYPE_LESSON:
      if (userType == 3 || userId == module.owner) {
        const editLessonsType = state.map(module => {
          if (module.id === action.payload.id) {
            module.lessons.map(lesson => {
              if (lesson.id === action.payload.num) {
                lesson.type = action.payload.type;
                return lesson;
              }
              return lesson;
            });
          }
          return module;
        });
        return editLessonsType;
      }
      return state;
    case types.ADD_LESSON:
      if (userType == 3 || userId == module.owner) {
        const moduleAddLesson = state.map(module => {
          if (module.id === action.payload.id) {
            module.lessons.push({
              id: action.payload.num,
              type: "classical",
              name: `Lesson ${module.lessons.length + 1}`,
              cards: []
            });
            return module;
          }
          return module;
        });
        return moduleAddLesson;
      }
      return state;
    case types.DELETE_LESSON:
      if (userType == 3 || userId == module.owner) {
        const moduleDeleteLesson = state.map(module => {
          if (module.id === action.payload.id) {
            module.lessons = module.lessons.filter(
              e => e.id !== action.payload.num
            );
            return module;
          }
          return module;
        });
        return moduleDeleteLesson;
      }
      return state;
    case types.ADD_CARD:
      if (userType == 3 || userId == module.owner) {
        const moduleAddCard = state.map(module => {
          if (module.id === action.payload.id) {
            module.lessons = module.lessons.map(lesson => {
              if (lesson.id === action.payload.numLesson) {
                lesson.cards.push({
                  id: action.payload.numCard,
                  name: `Card ${lesson.cards.length + 1}`
                });
                return lesson;
              }
              return lesson;
            });
            return module;
          }
          return module;
        });
        return moduleAddCard;
      }
      return state;
    case types.DELETE_CARD:
      if (userType == 3 || userId == module.owner) {
        const moduleDeleteCard = state.map(module => {
          if (module.id === action.payload.id) {
            module.lessons = module.lessons.map(lesson => {
              if (lesson.id === action.payload.numLesson) {
                lesson.cards = lesson.cards.filter(
                  e => e.id !== action.payload.numCard
                );
                return lesson;
              }
              return lesson;
            });
            return module;
          }
          return module;
        });
        return moduleDeleteCard;
      }
      return state;
    default:
      return state;
  }
}
