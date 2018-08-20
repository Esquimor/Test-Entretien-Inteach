import * as types from "./types";

let initState = [
  {
    id: 1,
    type: 3,
    email: "admin@admin.com",
    password: "admin"
  },
  {
    id: 2,
    type: 2,
    email: "teacher@teacher.com",
    password: "teacher"
  },
  {
    id: 3,
    type: "student",
    email: "student@student.com",
    password: "student"
  }
];

export default function reducer(state = initState, action) {
  switch (action.type) {
    case types.LOGIN:
      state.map(user => {
        if (
          user.email === action.payload.email &&
          user.password === action.payload.password
        ) {
          localStorage.setItem("userType", user.type);
          localStorage.setItem("userId", user.id);
        }
      });
      return state;
    case types.LOGOUT:
      localStorage.clear();
      return state;
    default:
      return state;
  }
}
