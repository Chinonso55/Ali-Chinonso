import React from "react";

const Form = () => {
  return (
    <form name="contact v1" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact v1" />

      <div className="mb-4">
        <label htmlFor="name" className="mb-2 inline-block font-semibold">
          Name
        </label>
        <input
          className="h-[45px] w-full rounded-sm bg-slate-900 pl-4"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="mb-2 inline-block font-semibold">
          Email
        </label>
        <input
          className="h-[45px] w-full rounded-sm bg-slate-900 pl-4"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="mb-2 inline-block font-semibold">
          Message
        </label>
        <textarea
          className=" w-full rounded-sm bg-slate-900 pl-4 pt-3"
          name="message"
          id="message"
          cols={30}
          rows={10}
        ></textarea>
      </div>

      <button className="text-lg text-white font-semibold rounded-md inline-block capitalize px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer">
        Send Message
      </button>
    </form>
  );
};

export default Form;
