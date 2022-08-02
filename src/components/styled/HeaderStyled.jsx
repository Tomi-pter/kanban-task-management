import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: var(--white);
  position: sticky;
  top: -1px;
  left: 0;
  width: 100vw;
  z-index: 10;

  .container {
    max-width: 90%;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .logoNav,
  .add,
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logoNav > :first-child,
  .add > :first-child {
    margin-right: 1rem;
  }

  nav img {
    max-width: 10px;
    max-height: 10px;
    padding-top: 0.25rem;
  }

  .logo {
    max-width: 24px;
    max-height: 25px;
  }

  h1 {
    font-size: 1.3rem;
    margin: 0;
    margin-right: 0.5rem;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: var(--main-purple);
  border-radius: 1.5rem;
  padding: 0.5rem 1.125rem;
`;
