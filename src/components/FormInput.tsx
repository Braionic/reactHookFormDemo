import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {DevTool} from "@hookform/devtools"

type  dataty = {
  username: string,
  email: string,
  idNumber: number,
  numberCode: number,
  mobileNumber: number,
  member: string,
  visit: string,
  }

export default function FormInput({setgender}: {setgender:React.Dispatch<React.SetStateAction<string | undefined>>}) {
  const {register, handleSubmit, control, formState: {errors}}= useForm<dataty>()
 const onsubmit: SubmitHandler<dataty> = (data)=>{
console.log(data)
 }
  return (
    <div className="form-container m-5 p-8 text-center">
      <form onSubmit={handleSubmit(onsubmit)}  noValidate>
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="username  w-full">
            <input
              type="text"
              {...register("username", {required: {
                value: true,
                message: "usename is required"
              }})}
              name="username"
              id="username"
              placeholder="Username"
              className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
            />
            <p>{errors?.username && "username is required is required"}</p>
          </div>
          <div className="username w-full">
            <input
              type="email"
              {...register("email", {
                required:{
                  value: true,
                  message: "email is required"
                }, pattern: {
                  value:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  message: "email is invalid"
                }
              })}
              name="email"
              id="email"
              placeholder="Email"
            
              className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
            />
             <p>{errors?.email && "email is required is required"}</p>
          </div>
        </div>
        <div className="username mb-4 w-full">
          <input
            type="number"
           
            {...register("idNumber", {required: {
              value: true,
              message: "id number is required"
            }})}
            placeholder="ID number"
            className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
          />
           <p className="text-red-600">{errors?.idNumber && "ID number is required is required"}</p>
        </div>
        <div className="username mb-4 w-full flex gap-3">
          <select className="p-2 border-2 rounded-lg bg-teal-500" {...register("numberCode", {required: {
              value: true,
              message: "number code is required"
            }})}>
            <option className="text-white">1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input
            type="number"
    
            placeholder="Mobile number"
            className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
            {...register("mobileNumber", {required: {
              value: true,
              message: "mobile number is required"
            }})}
          />
           <p>{errors?.mobileNumber && "Mobile is required is required"}</p>
        </div>
        <div className="username mb-4 w-full flex gap-3">
          <label className="font-bold text-sm">Are you a Napedia member?</label>
          <input
            type="radio"
          
            value="Yes"
            {...register("member", {required: {value: true, message: "please select at leave an option"}})}
          />
          Yes
          <input
            type="radio"
          
            value="No"
            {...register("member", {required: {value: true, message: "please select avalue"}})}
          />
          No
          <p>{errors?.member && "You need to select if you are a member"}</p>
        </div>
        <div className="username mb-4 w-full flex gap-3">
          <label className="font-bold text-sm">
            What product do you prefer?
          </label>
          <input
            type="radio"
          
            value="medication"
            {...register("visit", {required: {value: true, message: "visit field is required"}})}
          />
          Medication
          <input
            type="radio"
         
            value="phamacy"
            {...register("visit", {required: {value: true, message: "visit field is required"}})}
          />
          Pharmacy
          <p>{errors?.visit && "where do you want to ivsit is required is required"}</p>
        </div>
        <div className="username mb-4 w-full flex gap-3">
          <textarea
            placeholder="write down what you want"
            className="text-xs p-5 border-2 rounded-lg bg-teal-500 placeholder-black w-[50%]"
          ></textarea>
        </div>
        <div className="w-full flex justify-start">
          <button className="text-left bg-yellow-400 py-2 px-5 text-sm font-medium rounded-sm">
            Register
          </button>
        </div>
        <DevTool control={control} />
      </form>
    </div>
  );
}
