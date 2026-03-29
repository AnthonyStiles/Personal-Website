"use client";

import { send, State } from "../lib/emailer";
import React, {useEffect, useActionState, useRef} from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(send, initialState);

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  useEffect(() => {
    if(state.message){
      recaptchaRef.current?.reset();
    }
  }, [state]);

  const [captchaToken, setCaptchaToken] = React.useState<string>("");
  const [isFormValid, setIsFormValid] = React.useState<boolean>(false);

  useEffect(() => {
    handleChange();
  }, [ captchaToken ]);
  
  if (state.success) {
    return (
      <div className="content-wrapper">
        <p className="text">Thanks for getting in touch. I will get back to you as soon as possible.</p>
      </div>
    )
  }

  function handleChange() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const token = document.getElementById("token");
    
    const isFormValid = name.value != "" && email.value != "" && message.value != "" && token.value != "";
    setIsFormValid(isFormValid);
  }
  
  return (
    <div>
      <div className="content-wrapper">
        <p className="text">
          Please complete the form below and I will get back to you as soon as possible. Thank you.
        </p>
      </div>

      {state.message && (
          <div className="content-wrapper">
            <p className="text form-control-error-message">
              {state.message}
            </p>
          </div>
      )}

      <form noValidate action={formAction} onChange={handleChange}>

        <div className="content-wrapper">
          <label htmlFor="name">
            <div className="text">
              Name
            </div>
          </label>
          <div className="form-control-container">
            <input className={`form-control ${state.errors?.name?.length > 0 && "form-control-error"}`} type="text" id="name" name="name"></input>
          </div>
          {state.errors?.name && (
            <span className="form-control-error-message">{state.errors.name[0]}</span>
          )}
        </div>

        <div className="content-wrapper">
          <label htmlFor="email">
            <div className="text">
              Email
            </div>
          </label>
          <div className="form-control-container">
            <input className={`form-control ${state.errors?.email?.length > 0 && "form-control-error"}`} type="text" id="email" name="email"></input>
          </div>
          {state.errors?.email && (
            <span className="form-control-error-message">{state.errors.email[0]}</span>
          )}
        </div>

        <div className="content-wrapper">
          <label htmlFor="message">
            <div className="text">
              Message
            </div>
          </label>
          <div className="form-control-container">
            <textarea rows={4} className={`form-control ${state.errors?.message?.length > 0 && "form-control-error"}`} id="message" name="message"></textarea>
          </div>
          {state.errors?.message && (
            <span className="form-control-error-message">{state.errors.message[0]}</span>
          )}
        </div>

        <div className="content-wrapper">
          <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
              onChange={(token) => { setCaptchaToken(token ?? ""); handleChange();}}
              ref={recaptchaRef}
          />
        </div>

        <div className="content-wrapper">
          <button className="text form-submit-button" type="submit" disabled={ !isFormValid }>
            Send
          </button>
        </div>

        <input type="hidden" name="token" id="token" value={captchaToken} />

      </form>
    </div>
  );
}