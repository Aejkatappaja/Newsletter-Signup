import React from "react";
import Poster from "../assets/img/illustration-sign-up-desktop.svg";
import List from "../assets/icons/icon-list.svg";
import Success from "../assets/icons/icon-success.svg";

export const Home = () => {
  const inputMailRef = React.useRef<HTMLInputElement>(null);

  const email = inputMailRef.current?.value;

  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [subscribed, setIsSubscribed] = React.useState<boolean>(false);

  const validEmail = /\S+@\S+\.\S+/;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setErrorMessage("");
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
  };

  const onClick = () => {
    setIsSubscribed(false);
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
                    placeholder={errorMessage ? "" : "email@company.com"}
                    className={!errorMessage ? "input" : "input-error"}
                  />
                </label>
                <button>Subscribe to monthly newsletter</button>
              </form>
            </div>
            <div className="right-side">
              <img src={Poster} alt="poster-desktop" className="poster" />
            </div>
          </section>
        </>
      ) : (
        <section className="subscribed-card">
          <img src={Success} alt="" />
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to{" "}
            <span className="mail-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription.
          </p>
          <button onClick={onClick}>Dissmiss message</button>
        </section>
      )}
    </main>
  );
};
