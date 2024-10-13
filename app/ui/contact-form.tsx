"use client";

import { sendMessage, State } from "../lib/actions";
import React from "react";
import { useFormState } from "react-dom";

export default function Form(){
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useFormState(sendMessage, initialState);

    if(state.success){
      return (
        <>
          Thanks for getting in touch. I will get back to you as soon as possible.
        </>
      )
    }

    function getInputClass(isTextArea, showError){
      return `block ${isTextArea ? "w-1/2" : "w-1/3"} p-2 bg-gray-100 focus:outline-none ${showError ? "border-red-600 border" : ""} rounded`;
    }

    return (
      <>
        <p>Please complete the form below and I will get back to you as soon as possible. Thank you.</p>
        <form className="flex flex-col gap-5" action={formAction} noValidate>
          <div className="relative group">
            <label htmlFor="name">Name</label>
            <input className={getInputClass(false, state.errors?.name?.length > 0)} type="text" id="name" name="name"></input>
            {state.errors?.name && (
              <span className="invisible bg-red-500 text-white absolute bottom-full group-hover:visible p-1 rounded">{state.errors.name[0]}</span>
            )}
          </div>
          <div className="relative group">
            <label htmlFor="email">Email</label>
            <input className={getInputClass(false, state.errors?.email?.length > 0)} type="email" id="email" name="email"></input>
            {state.errors?.email && (
              <span className="invisible bg-red-500 text-white absolute bottom-full group-hover:visible p-1 rounded">{state.errors.email[0]}</span>
            )}
          </div>
          <div className="relative group">
            <label htmlFor="message">Message</label>
            <textarea rows={4} className={getInputClass(true, state.errors?.message?.length > 0)} id="message" name="message"></textarea>
            {state.errors?.message && (
              <span className="invisible bg-red-500 text-white absolute bottom-full group-hover:visible p-1 rounded">{state.errors.message[0]}</span>
            )}
          </div>
          <div>
            <button className="border border-black hover:bg-slate-500 rounded" type="submit">
              <span className="p-3">Send</span>
            </button>
          </div>
        </form>
      </>
    );
}