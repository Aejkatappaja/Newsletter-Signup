import React from "react";
import Poster from "../assets/img/illustration-sign-up-desktop.svg";
import List from "../assets/icons/icon-list.svg";

export const Home = () => {
  const inputMailRef = React.useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const validEmail = /\S+@\S+\.\S+/;
  const [subscribed, setIsSubscribed] = React.useState<boolean>(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputMailRef.current?.value) {
      setErrorMessage("You must fill input!");
      return;
    } else if (!validEmail.test(inputMailRef.current.value)) {
      setErrorMessage("Please enter a valid email!");
      return;
    }
    setIsSubscribed(true);
    setErrorMessage("");
    inputMailRef.current.value = "";
  };

  return (
    <main className="main-container">
      {!subscribed ? (
        <>
          <section className="signup-card">
            <div className="left-side">
              <h1>Stay updated!</h1>
              <span className="span">
                Join 60,000+ product managers receiving monthly updates on:
              </span>
              <ul>
                <li>
                  <img src={List} alt="" /> Product discovery and building what
                  matters
                </li>
                <li>
                  <img src={List} alt="" /> Measuring to ensure updates are a
                  success
                </li>
                <li>
                  <img src={List} alt="" /> And much more!
                </li>
              </ul>
              <form onSubmit={onSubmit}>
                <label htmlFor="email">
                  <p>
                    <h2>Email address</h2>
                    <span>{errorMessage}</span>
                  </p>
                  <input
                    id="email"
                    ref={inputMailRef}
                    type="text"
                    placeholder="email@company.com"
                    className={!errorMessage ? "input" : "input-error"}
                  />
                </label>
                <button>Subscribe to monthly newsletter</button>
              </form>
            </div>
            <div className="right-side">
              <img
                src={Poster}
                alt="poster-orange-red-pink"
                className="poster"
              />
            </div>
          </section>
        </>
      ) : (
        "lol"
      )}
    </main>
  );
};
