import styled from "styled-components";

export const MainStyle = styled.main`
  background-color: var(--bg-grey);
  min-height: 100vh;
  display: ${(props) => (props.empty ? "flex" : "block")};
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: auto;
  padding: 1.25rem;
`;

export const Empty = styled.section`
  margin: auto;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 1.125rem;
    line-height: 1.4rem;
    color: var(--medium-grey);
  }

  Button {
    font-size: 0.9rem;
    color: var(--white);
    padding-block: 1rem;
  }
`;

export const BoardStyle = styled.section`
  display: flex;
  overflow-x: scroll;
  gap: 1.5rem;
  position: absolute;
  width: auto;

  h2 {
    margin: 0;
  }

  .status {
    display: flex;
    flex-direction: column;
    width: 17.5rem;
    gap: 1.5rem;
  }

  .tasks {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    padding: 2rem 0 2rem 2rem;
  }
`;

export const AddBoardStyle = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  button {
    display: block;
  }

  .container {
    z-index: 30;

    label {
      display: block;
    }

    .columns {
      padding: 2rem 0;
    }

    .col_input {
      display: flex;
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
  &.headClicked {
    z-index: 7;
  }
`;
