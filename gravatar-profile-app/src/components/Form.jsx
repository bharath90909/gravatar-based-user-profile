import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "../ui/css/Form.css";

const schema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
  fullName: z.string().nonempty("Full name is required"),
  username: z.string().nonempty("Username is required"),
  phone: z
    .string()
    .regex(/^[0-9]+$/, "Phone must be numeric")
    .nonempty("Phone is required"),
  location: z.string().nonempty("Location is required"),
  website: z.string().url("Enter a valid URL").nonempty("Website is required"),
  bio: z.string().nonempty("Bio is required"),
});

function Form({ onSubmit }){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Profile</h2>

        <label>Email Address</label>
        <input type="email" {...register("email")} />
        <p className="error">{errors.email?.message}</p>

        <label>Full Name</label>
        <input type="text" {...register("fullName")} />
        <p className="error">{errors.fullName?.message}</p>

        <label>Username</label>
        <input type="text" {...register("username")} />
        <p className="error">{errors.username?.message}</p>

        <label>Phone Number</label>
        <input type="text" {...register("phone")} />
        <p className="error">{errors.phone?.message}</p>

        <label>Location (City, Country)</label>
        <input type="text" {...register("location")} />
        <p className="error">{errors.location?.message}</p>

        <label>Personal Website or Social Profile Link</label>
        <input type="text" {...register("website")} />
        <p className="error">{errors.website?.message}</p>

        <label>Bio or Short Description</label>
        <textarea {...register("bio")} />
        <p className="error">{errors.bio?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
