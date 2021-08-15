import React, { useState } from "react";

import { useForm } from "react-hook-form";
import "./style.css";

const style = {
  border: "2px solid #fa983a",
};

const Form = () => {
  const [isFormSend, setIsFormSend] = useState(false);
  const statute = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getBackToForm = () => {
    setIsFormSend((prev) => !prev);
    reset();
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setIsFormSend((prev) => !prev);
  };

  return (
    <>
      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {/* NAME */}

          <label htmlFor="name">name</label>
          <input
            {...register("name", {
              required: "field is required",
              minLength: { value: 2, message: "field is to short" },
            })}
            id="name"
            type="text"
            style={errors.name ? style : null}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          {/* EMAIL */}

          <label htmlFor="email">mail</label>
          <input
            {...register("email", {
              required: "field is required",
              minLength: { value: 2, message: "email is to short" },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "email is invalid",
              },
            })}
            id="email"
            type="text"
            style={errors.email ? style : null}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          {/* BIO */}

          <label htmlFor="bio">bio</label>
          <textarea
            {...register("bio", {
              required: "field is required",
              minLength: { value: 5, message: "bio is to short" },
            })}
            id="bio"
            style={errors.bio ? style : null}
          />
          {errors.bio && <p className="error">{errors.bio.message}</p>}

          {/* SEX */}

          <div className="sex">
            <input
              className="sex"
              {...register("sex", { required: "field is required" })}
              type="radio"
              value="male"
              id="male"
            />
            <label htmlFor="male">male</label>
          </div>

          <div className="sex">
            <input
              className="sex"
              {...register("sex", { required: "field is required" })}
              type="radio"
              value=" female"
              id="female"
            />
            <label htmlFor="female">female</label>
          </div>

          {errors.sex && <p className="error">{errors.sex.message}</p>}

          {/* CHECKBOX */}

          <label className="checkbox" htmlFor="confirm">
            {statute}
          </label>
          <input
            {...register("confirm", { required: "field is required" })}
            id="confirm"
            type="checkbox"
          />
          {errors.confirm && <p className="error">{errors.confirm.message}</p>}

          <button className="formButton" type="submit">
            send
          </button>
        </form>

        {isFormSend && (
          <div className="send">
            <span>form is send</span>
            <button onClick={getBackToForm} className="formButton">
              back
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
