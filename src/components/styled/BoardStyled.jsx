import styled from "styled-components";

export const MainStyle = styled.main`
  background-color: var(--bg-grey);
  min-height: 100vh;
  min-width: 100vw;
  display: ${(props) => (props.empty ? "flex" : "block")};
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: auto;
  margin-top: -1px;

  &.dark {
    background-color: var(--bg-dark);

    h2 {
      color: var(--medium-grey);
    }

    .tasks {
      background-color: var(--bg-50dark);

      h3 {
        color: var(--white);
      }
      p {
        color: var(--medium-grey);
      }
    }

    .view,
    .viewOpt,
    .delPop,
    select,
    .edit,
    input,
    textarea,
    .switch,
    .addTask {
      background-color: var(--bg-dark);

      h2,
      button,
      select,
      input,
      textarea {
        color: var(--white);
      }

      ::placeholder {
        color: var(--bg-grey);
      }
    }

    .edit,
    .addTask {
      label {
        color: var(--medium-grey);
      }
      button {
        font-weight: 800;
      }
      .add {
        background-color: var(--white);
        color: var(--main-purple);

        &:hover {
          background-color: var(--white-hover);
        }
      }
    }

    .delPop {
      button {
        font-weight: 800;
      }
      .btns button:last-child {
        background-color: var(--white);

        &:hover {
          background-color: var(--white-hover);
        }
      }
    }
  }
`;

export const Empty = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &.emptyBoard {
    margin-left: 0;
    transition: all 500ms;
  }

  @media screen and (min-width: 641px) {
    &.emptyBoard.sidebar {
      margin-left: 150px;
    }
  }

  h2 {
    font-size: 1.125rem;
    line-height: 1.4rem;
    color: var(--medium-grey);
  }

  Button {
    font-size: 0.9rem;
    color: var(--white);
    padding-block: 1rem;
    margin-top: 1.5rem;
  }

  Button:hover {
    background-color: var(--main-50purple);
  }
`;

export const BoardStyle = styled.ul`
  display: flex;
  /* overflow-x: scroll; */
  gap: 1.5rem;
  position: absolute;
  width: auto;
  padding: 2rem;
  z-index: 2;
  margin-left: 0;
  margin: 0;
  list-style: none;
  transition: all 500ms;

  ul.status {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  @media screen and (min-width: 641px) {
    &.sideBar {
      margin-left: 300px;
    }
  }

  h2 {
    margin: 0;
    display: flex;
    font-size: 1rem;
    font-weight: 700;
  }

  .status {
    display: flex;
    flex-direction: column;
    width: 17.5rem;
    gap: 1.5rem;

    > h2 {
      text-transform: uppercase;
      letter-spacing: 2.4px;
    }
  }

  .tasks {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    padding: 1.5rem 1rem;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.125);

    &:hover {
      cursor: pointer;
      h3 {
        color: var(--main-purple);
      }
    }

    h3 {
      margin: 0.5rem 0;
    }
    p {
      margin: 0.5rem 0;
    }
  }

  .empty {
    width: 280px;
    height: 600px;
    background-color: var(--light-grey);
    border-radius: 0.5rem;
  }
  .addCol {
    margin-top: 2.75rem;
  }
  .addCol button {
    margin: auto;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--medium-grey);
    cursor: pointer;
  }
  .addCol button:hover {
    color: var(--main-purple);
  }

  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;

export const AddBoardStyle = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  padding-right: 1rem;
  z-index: 100;
  background-color: var(--white);

  h2,
  button {
    color: var(--medium-grey);
    margin-top: 0;
  }

  &.switch {
    position: absolute;
    top: 120%;
    transform: translate(-50%, 0);
    max-width: 60%;
    padding: 0 1.5rem 1.5rem 0;

    h2 {
      margin: 0 0 1rem;
      padding: 1.5rem 0 0 1.5rem;
      font-size: 0.75rem;
      letter-spacing: 2.4px;
    }
    button {
      padding-block: 0.75rem;
      padding-inline: 1.5rem 0;
      width: 100%;
      text-align: left;
      font-weight: 700;
      font-size: 0.95rem;
      display: flex;
      align-items: center;

      img {
        max-width: 16px;
        max-height: 16px;
        padding-top: unset;
        /* filter: invert(0.5) sepia(1) hue-rotate(200deg); */
      }
    }
    button.active {
      background-color: var(--main-purple);
      color: var(--white);
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;

      img {
        filter: brightness(2.5);
      }
    }
    button :first-child {
      margin-right: 0.75rem;
    }
    .createNew * {
      color: var(--main-purple);
      fill: var(--main-purple);
    }
    .createNew img {
      filter: hue-rotate(32deg) saturate(8.5) brightness(0.6);
    }
    .brdNames {
      overflow: auto;
      max-height: 55vh;

      @media screen and (max-height: 800px) {
        max-height: 40vh;
      }

      button:hover {
        background-color: var(--light-purple);
        color: var(--main-purple);
        border-top-right-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
      }
    }
  }

  &.switch.sideBar {
    position: relative;
    top: unset;
    left: unset;
    transform: unset;
    max-width: 80%;
    padding: 0;
    margin: 1rem 0;

    h2 {
      margin: 0 0 1rem;
      padding: 1.5rem 0 0 1.5rem;
      font-size: 0.75rem;
      letter-spacing: 2.4px;
    }
    button {
      padding-block: 0.75rem;
      padding-inline: 1.5rem 0;
      width: 100%;
      text-align: left;
      font-weight: 700;
      font-size: 0.95rem;
      display: flex;
      align-items: center;

      img {
        max-width: 16px;
        max-height: 16px;
        padding-top: unset;
        /* filter: invert(0.5) sepia(1) hue-rotate(200deg); */
      }
    }
    button.active {
      background-color: var(--main-purple);
      color: var(--white);
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;

      img {
        filter: brightness(2.5);
      }
    }
    button :first-child {
      margin-right: 0.75rem;
    }
    .createNew * {
      color: var(--main-purple);
      fill: var(--main-purple);
    }
    .createNew img {
      filter: hue-rotate(32deg) saturate(8.5) brightness(0.6);
    }
  }

  @media screen and (min-width: 641px) {
    &.switch.hideBar * {
      display: none;
    }
  }

  &.edit {
    overflow: auto;
  }
  @media screen and (max-height: 800px) {
    &.edit {
      /* bottom: -30%; */
      bottom: -3rem;
      top: 55%;
    }
    /* &.edit.aNB {
    } */
    &.addTask {
      bottom: -40%;
    }
  }

  &.addTask {
    overflow: auto;

    h2 {
      margin: 0 0 1rem;
    }
  }

  &.view {
    display: flex;

    > :first-child {
      flex-basis: 99%;
    }
    > :nth-child(2) {
      align-self: flex-start;
      z-index: 30;
    }
  }

  &.viewOpt {
    position: absolute;
    left: 92.5%;
    top: 10vh;
    width: 18%;
    padding: 0.5rem 1.75rem 0.5rem 1.25rem;

    @media screen and (max-height: 800px) {
      top: 20vh;
    }

    button {
      background: transparent;
      border: none;
      padding: 0.5rem 0;
    }

    button:last-child {
      color: var(--red);

      &:hover {
        color: var(--red-hover);
      }
    }
  }
  &.viewOpt.header {
    position: absolute;
    top: 150%;
    left: unset;
    right: -12.5%;
    width: 22.5%;
  }

  &.delPop {
    h1 {
      color: var(--red);
      margin-top: 0;
    }

    .btns {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem 0 0;
    }

    button {
      border: none;
      appearance: none;
      cursor: pointer;
      padding: 1rem 0;
      margin: 0.5rem 0;
      width: 100%;
      border-radius: 1.75rem;
    }
    button:first-of-type {
      background-color: var(--red);
      color: var(--white);

      &:hover {
        background-color: var(--red-hover);
      }
    }
    button:last-child {
      background-color: var(--light-purple);
      color: var(--main-purple);
    }

    @media screen and (min-width: 641px) {
      .btns {
        flex-direction: row;
      }
      button {
        width: 47.5%;
        padding: 1.25rem 0;
      }
    }
  }

  button {
    display: block;
  }

  label {
    display: block;
    margin: 0.5rem 0;
    color: var(--medium-grey);
  }

  input,
  textarea,
  select {
    width: 92%;
    border: 1px solid var(--medium-grey);
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;

    &:not([type="checkbox"]):focus {
      border: 1px solid var(--main-purple);
      outline: 1px solid var(--main-purple);
    }
  }

  input.error {
    border: 1px red solid;
  }

  select {
    width: 100%;
  }

  .col_input {
    display: flex;
    align-items: center;

    button {
      margin-bottom: 0.5rem;
      background: transparent;
      border: none;
      appearance: none;
      cursor: pointer;
      padding: 0 0.5rem;
    }
  }

  .btn {
    width: 100%;
    padding-block: 0.75rem;
    border-radius: 1.25rem;
    border: none;
  }
  .add {
    color: var(--main-purple);
    background-color: var(--light-purple);
  }
  .create {
    color: var(--white);
    background-color: var(--main-purple);
    margin: 1rem 0;
  }
  .create:hover {
    background-color: var(--main-50purple);
  }

  .container {
    display: unset;
  }

  .subs {
    margin: 1rem 0;

    div {
      display: flex;
      align-items: center;
      background-color: var(--light-purple);
      padding: 0.5rem;
      border-radius: 0.25rem;
      margin: 0.25rem 0;
    }
    div.completed {
      label {
        text-decoration: line-through;
      }
    }
    input {
      width: unset;
      margin: unset;
    }
    label {
      margin: 0;
      margin-left: 1rem;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 15px;
    }
  }

  &.dark {
    background-color: var(--bg-dark);

    h2,
    button {
      color: var(--white);
    }
  }

  .darkToggle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: 1rem;
    background-color: var(--light-purple);
    border-radius: 0.25rem;

    img {
      max-width: unset;
      max-height: unset;
    }

    @media screen and (min-width: 641px) {
      padding: 0.25rem 1.5rem;
      position: absolute;
      top: 77.5vh;
    }

    @media screen and (max-height: 800px) {
      top: 65vh;
    }

    .toggleCheck {
      margin-inline: 2rem;
      position: relative;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: -70%;
      right: 0;
      bottom: 0;
      width: 50px;
      background: linear-gradient(
        to right,
        hsl(236, 72%, 79%),
        hsl(237, 63%, 64%)
      );
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 24px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }

    input:focus + .slider {
      box-shadow: 0.5px 0.5px 1px hsl(237, 63%, 64%);
      opacity: 0.6;
    }

    input.checked + .slider:before {
      transform: translateX(26px);
    }

    &.dark .darkToggle {
      background-color: var(--bg-dark);
    }
  }
`;

export const Dim = styled.div`
  background-color: var(--dim);
  position: fixed;
  visibility: hidden;
  top: 0;
  right: 0;
  width: 100vw;
  height: 0;
  transition: all 5ms cubic-bezier(0.59, 0, 0.49, 1);

  &.clicked {
    z-index: 20;
    visibility: visible;
    height: 100vh;
  }
  /* &.headClicked {
    z-index: 7;
  } */
  &.switchBrd {
    position: absolute;
    top: 100%;
  }
`;
