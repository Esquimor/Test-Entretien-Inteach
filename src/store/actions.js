import uuidv4 from "uuid/v4";
import * as types from "./types";

export const addModule = ({ owner, name }) => ({
  type: types.ADD_MODULE,
  payload: {
    id: uuidv4(),
    owner,
    name
  }
});

export const deleteModule = id => ({
  type: types.DELETE_MODULE,
  payload: {
    id
  }
});

export const editNameModule = ({ id, name }) => ({
  type: types.EDIT_NAME_MODULE,
  payload: {
    id,
    name
  }
});

export const editNameLesson = ({ id, num, name }) => ({
  type: types.EDIT_NAME_LESSON,
  payload: {
    id,
    num,
    name
  }
});

export const editTypeLesson = ({ id, num, type }) => ({
  type: types.EDIT_TYPE_LESSON,
  payload: {
    id,
    num,
    type
  }
});

export const addLesson = ({ id }) => ({
  type: types.ADD_LESSON,
  payload: {
    id,
    num: uuidv4()
  }
});

export const deleteLesson = ({ id, num }) => ({
  type: types.DELETE_LESSON,
  payload: {
    id,
    num
  }
});

export const addCard = ({ id, numLesson }) => ({
  type: types.ADD_CARD,
  payload: {
    id,
    numLesson,
    numCard: uuidv4()
  }
});

export const deleteCard = ({ id, numLesson, numCard }) => ({
  type: types.DELETE_CARD,
  payload: {
    id,
    numLesson,
    numCard
  }
});

export const login = ({ email, password }) => ({
  type: types.LOGIN,
  payload: {
    email,
    password
  }
});

export const logout = () => ({
  type: types.LOGOUT,
  payload: {}
});
