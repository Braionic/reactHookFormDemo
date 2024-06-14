import React from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type dataty = {
  username: string;
  email: string;
  idNumber: number;
  member: string;
  visit: string;
  phoneNumber: string[];
  age: number;
  address: {
    house: string;
    street: string;
  };
  hobbies: {
    sport: "";
  }[],
  date: Date
};

export default function FormInput({
  setgender,
}: {
  setgender: React.Dispatch<React.SetStateAction<string>>;
}) {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useForm<dataty>({
    defaultValues: {
      username: "",
      email: "",
      idNumber: 0,
      phoneNumber: ["", ""],
      age: 18,
      address: {
        house: "",
        street: "",
      },
      hobbies: [
        {
          sport: "",
        },
      ],
    },
  });
console.log(getValues())
  const { append, remove, fields } = useFieldArray({
    control,
    name: "hobbies",
  });

  const onsubmit: SubmitHandler<dataty> = (data) => {
    console.log(data);
  };

  console.log(watch());
  return (
    <div className="form-container m-5 p-8 text-center">
      <form onSubmit={handleSubmit(onsubmit)} noValidate>
        <div className="flex items-center justify-center gap-3">
          <div className="username  w-full">
            <input
              type="text"
              {...register("username", {
                required: {
                  value: true,
                  message: "usename is required",
                },
              })}
              name="username"
              id="username"
              placeholder="Username"
              className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
            />
            <p className={`py-3 ${errors?.username ? "visible" : "invisible"}`}>
              {errors?.username && errors.username.message}
            </p>
          </div>

          <div className="username w-full">
            <input
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  message: "email is invalid",
                },
              })}
              name="email"
              id="email"
              placeholder="Email"
              className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
            />
            <p className={`py-4 ${errors?.email ? "visible" : "invisible"}`}>
              {errors?.email && errors?.email?.message}
            </p>
          </div>
        </div>
        <div className="username mb-4 w-full">
          <input
            type="number"
            {...register("idNumber", {
              required: {
                value: true,
                message: "id number is required",
              },
            })}
            placeholder="ID number"
            className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
          />
        </div>
        <div className="username mb-4 w-full">
          <input
            type="number"
            
            {...register("age", {
            
              required: {
                value: true,
                message: "age is required",
              },
              min: {
                value: 18,
                message: "min of 18 years",
              },
            valueAsNumber: true
            })}
            
            placeholder="ID number"
            className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
            min={18}
          />
        </div>
        <div className="username mb-4 w-full">
          <input
            type="date"
            
            {...register("date", {
            
              required: {
                value: true,
                message: "date is required",
              },
              
            valueAsDate: true
            })}
            
            
            className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
    
          />
        </div>

        <div className="code mb-4 w-full flex gap-3">
          <select
            className="p-2 border-2 rounded-lg bg-teal-500"
            {...register("phoneNumber.0", {
              required: {
                value: true,
                message: "number code is required",
              },
            })}
          >
            <option className="text-white">1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input
            type="number"
            placeholder="Mobile number"
            className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
            {...register("phoneNumber.1", {
              required: {
                value: true,
                message: "mobile number is required",
              },
            })}
          />
        </div>
        <div className="code mb-4 w-full flex gap-3">
          <input
            type="text"
            className="p-2 border-2 rounded-lg bg-teal-500"
            {...register("address.house", {
              required: {
                value: true,
                message: "house is required",
              },
            })}
          />

          <input
            type="text"
            placeholder="street"
            className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
            {...register("address.street", {
              required: {
                value: true,
                message: "street is required",
              },
            })}
          />
        </div>
        {fields.map((field, index) => (
          <>
            <div className="hobbies mb-4 w-full form-control" key={field.id}>
              <input
                type="text"
                {...register(`hobbies.${index}.sport` as const)}
                
                placeholder="add hobbies"
                className="p-2 border-2 rounded-lg bg-teal-500 placeholder-white w-full"
              />
            </div>
           {fields.length > 0 &&  <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={()=> remove(index)}>X</button>}
          </>
        ))}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1" onClick={()=> append({sport: ""})}>+</button>
        <p className={errors?.address?.house ? "" : "invisible"}>
          {errors?.address && errors?.address?.message}
        </p>
        <div className="member mb-4 w-full flex gap-3">
          <label className="font-bold text-sm">Are you a Napedia member?</label>
          <input
            type="radio"
            value="Yes"
            {...register("member", {
              required: {
                value: true,
                message: "please select at leave an option",
              },
            })}
          />
          Yes
          <input
            type="radio"
            value="No"
            {...register("member", {
              required: { value: true, message: "please select avalue" },
            })}
          />
          No
          <p className={errors?.member ? "" : "invisible"}>
            {errors?.member && errors?.member?.message}
          </p>
        </div>
        <div className="username mb-4 w-full flex gap-3">
          <label className="font-bold text-sm">
            What product do you prefer?
          </label>
          <input
            type="radio"
            value="medication"
            {...register("visit", {
              required: { value: true, message: "visit field is required" },
            })}
          />
          Medication
          <input
            type="radio"
            value="phamacy"
            {...register("visit", {
              required: { value: true, message: "visit field is required" },
            })}
          />
          Pharmacy
          <p className={errors?.visit ? "" : "invisible"}>
            {errors?.visit && errors?.visit?.message}
          </p>
        </div>
        <div className="username mb-4 w-full flex gap-3">
          <textarea
            placeholder="write down what you want"
            className="text-xs p-5 border-2 rounded-lg bg-teal-500 placeholder-black w-[50%]"
          ></textarea>
        </div>
        <div className="w-full flex justify-start">
          <button className="text-left bg-yellow-400 py-2 px-5 text-sm font-medium rounded-sm hover:bg-red-500">
            Register
          </button><button onClick={()=> setValue("username", "madam")}>Set Values</button>
        </div>
        <DevTool control={control} />
      </form>
    </div>
  );
}
