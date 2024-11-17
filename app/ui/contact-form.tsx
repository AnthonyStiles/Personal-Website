"use client";

import { send, State } from "../lib/emailer";
import React from "react";
import { useFormState } from "react-dom";

export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useFormState(send, initialState);

  if (state.success) {
    return (
      <div className="content-wrapper">
        <p className="text">Thanks for getting in touch. I will get back to you as soon as possible.</p>
      </div>
    )
  }

  return (
    <div>
      <div className="content-wrapper">
        <p className="text">
          Please complete the form below and I will get back to you as soon as possible. Thank you.
        </p>
      </div>

      <form noValidate action={formAction}>

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
          <button className="text form-submit-button" type="submit">
            Send
          </button>
        </div>

      </form>
    </div>
  );
}