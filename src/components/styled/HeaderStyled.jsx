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

    @media screen and (min-width: 641px) {
      max-width: 100%;
      padding: 1rem 2rem;
    }
  }

  .logoNav,
  div.add,
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
  .desktop {
    display: none;
  }
  span.desktop {
    color: var(--white);
  }

  @media screen and (min-width: 641px) {
    .desktop {
      display: unset;
    }
    .mobile {
      display: none;
    }
    .logo.desktop {
      max-width: unset;
      max-height: unset;
      margin-right: 1rem;
      padding-right: 1rem;
    }
    .dark {
      display: none;
    }
    .desk {
      height: 100vh;
      width: 0;
      /* visibility: hidden; */
      position: fixed;
      top: 0;
      left: 0;
      background-color: var(--white);
      border-right: none;
      z-index: -1;
      transition: all 500ms;

      .sideLogo {
        opacity: 0;
        width: 0;
        transition: all 500ms;
      }

      .hide {
        position: absolute;
        top: 85vh;
        margin-left: 1rem;
        opacity: 0;
        z-index: -1;
        transition: all 500ms;

        button {
          display: none;
        }

        span {
          padding-left: 0.5rem;
        }
      }

      &.active {
        width: 300px;
        z-index: 1;
        border-right: 1px solid var(--light-purple);

        .hide {
          opacity: 1;
          z-index: 1;

          button {
            display: flex;
            align-items: center;
          }
        }
        .sideLogo {
          opacity: 1;
          width: 100%;
        }
      }
    }
    .show {
      position: absolute;
      left: 0;
      top: 85vh;
      background-color: var(--main-purple);
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
      z-index: -1;
      opacity: 0;
      transition: all 1s;

      &.active {
        opacity: 1;
        z-index: 100;
      }

      button {
        padding: 0.75rem;
      }
    }
    .sideLogo {
      margin: 1rem 1.5rem;
    }
    .logoNav.active .logoContainer {
      display: none;
    }
    .logoNav nav {
      transform: translateX(0);
      transition: all 500ms;

      img {
        display: none;
      }
    }
    .logoNav.active nav {
      transform: translateX(300px);
    }
  }
`;

export const Button = styled.button`
  border: none;
  background-color: var(--main-purple);
  border-radius: 1.5rem;
  padding: 0.5rem 1.125rem;
`;
