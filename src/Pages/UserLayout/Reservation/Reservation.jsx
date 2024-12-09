import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input, Option, Radio, Select } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const Reservation = ({ logedUser }) => {
    // Doctor Specialties List
    const medicalSpecialties = [
        "Allergy and Immunology",
        "Anesthesiology",
        "Cardiology",
        "Dermatology",
        "Emergency Medicine",
        "Family Medicine",
        "Gastroenterology",
        "General Surgery",
        "Internal Medicine",
        "Neurology",
        "Obstetrics and Gynecology",
        "Ophthalmology",
        "Orthopedic Surgery",
        "Otolaryngology (Ear, Nose, and Throat)",
        "Pediatrics",
        "Psychiatry",
        "Radiology",
        "Rheumatology",
        "Urology",
    ];
    // Doctors
    const [doctor, eDoctor] = useState(null);
    const [gender, eGender] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();
    console.log(logedUser);

    useEffect(() => {
        axios({
            method: "get",
            url: `${import.meta.env.VITE_DOCTORS}`,
        }).then(({ data }) => eDoctor(data));
    }, []);

    const onSubmit = (data) => {
        gender == "male" ? (data.gender = "male") : (data.gender = "female");
        postData(data);
        reset();
    };
    const postData = (data) => {
        let newUser = { ...logedUser };
        newUser.reservation.push(data);
        axios({
            method: "put",
            url: `${import.meta.env.VITE_USERS}/${localStorage.pi}`,
            data: newUser,
        })
            .then(() => {
                console.log("Success");
            })
            .catch((err) => console.log(err));
    };
    return (
        // wrapper
        <div
            className={`flex justify-center min-h-[90.9%] h-fit bg-gray-200 dark:bg-gray-800 shadow-xl`}>
            {/* Container */}
            <div className="flex justify-center items-center w-1/3 py-8 px-2 h-[90.9%] rounded-lg bg-white dark:bg-gray-700 cxs:w-11/12 csm:p-3 csm:w-11/12 cmd:w-11/12 cmd:p-5 clg:w-2/3 clg:p-5 cxl:w-1/2 cxl:p-8 my-14 ">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" flex flex-col justify-center items-center gap-5 w-full">
                    <div className="flex justify-between items-center w-full ">
                        <div>
                            <Input
                                {...register("firstname", {
                                    required: "First Name Is Required",
                                    minLength: {
                                        value: 4,
                                        message: "First Name is too short",
                                    },
                                })}
                                label={
                                    <span className="text-black dark:text-white">
                                        First Name
                                    </span>
                                }
                                className="text-black dark:text-white"
                                error={errors.firstname}
                            />
                            {errors.firstname && (
                                <p className="text-red-500">
                                    {errors.firstname.message}
                                </p>
                            )}
                        </div>
                        {/* last Name */}
                        <div>
                            <Input
                                {...register("lastname", {
                                    required: "last Name Is Required",
                                    minLength: {
                                        value: 4,
                                        message: "Last Name is too short",
                                    },
                                })}
                                label={
                                    <span className="text-black dark:text-white">
                                        Last Name
                                    </span>
                                }
                                className="text-black dark:text-white"
                                error={errors.lastname}
                            />
                            {errors.lastname && (
                                <p className="text-red-500">
                                    {errors.lastname.message}
                                </p>
                            )}
                        </div>
                    </div>
                    {/* Age */}
                    <Input
                        {...register("age", {
                            required: "Age Is required",
                            maxLength: {
                                value: 2,
                                message: "Not a valid Age",
                            },
                        })}
                        label={
                            <span className="text-black dark:text-white">
                                Age
                            </span>
                        }
                        className="text-black dark:text-white"
                        error={errors.age}
                    />
                    {errors.age && (
                        <p className="text-red-500">{errors.age.message}</p>
                    )}
                    {/* Gender */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-evenly items-center">
                            <Radio
                                {...register("gender", {
                                    required: "Gender Is required",
                                })}
                                label={
                                    <span className="dark:text-white">
                                        Male
                                    </span>
                                }
                                color="blue"
                                error={errors.gender}
                                onChange={() => eGender("male")}
                            />
                            <Radio
                                {...register("gender", {
                                    required: "Gender Is required",
                                })}
                                label={
                                    <span className="dark:text-white">
                                        Female
                                    </span>
                                }
                                color="blue"
                                error={errors.gender}
                                onChange={() => eGender("female")}
                            />
                        </div>
                        {errors.gender && (
                            <p className="text-red-500">
                                {errors.gender.message}
                            </p>
                        )}
                    </div>
                    {/* Doctors & specialties */}
                    <div className="flex justify-between items-center w-full ">
                        <div>
                            <Input
                                {...register("doctor", {
                                    required: "Doctor Is required",
                                })}
                                label={
                                    <span className="text-black dark:text-white">
                                        Doctor
                                    </span>
                                }
                                className="text-black dark:text-white"
                                error={errors.doctor}
                            />
                            {errors.doctor && (
                                <p className="text-red-500">
                                    {errors.doctor.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Input
                                {...register("specialties", {
                                    required: "specialties Is required",
                                    minLength: {
                                        value: 8,
                                        message: "Specialties is too short",
                                    },
                                })}
                                label={
                                    <span className="text-black dark:text-white">
                                        specialties
                                    </span>
                                }
                                className="text-black dark:text-white"
                                error={errors.specialties}
                            />
                            {errors.specialties && (
                                <p className="text-red-500">
                                    {errors.specialties.message}
                                </p>
                            )}
                        </div>
                    </div>
                    {/* Note */}
                    <Input
                        {...register("note")}
                        label={
                            <span className="text-black dark:text-white">
                                Note
                            </span>
                        }
                        className="text-black dark:text-white"
                        error={errors.note}
                    />
                    {errors.note && (
                        <p className="text-red-500">{errors.note.message}</p>
                    )}
                    {/* Buttons */}
                    <div className="flex justify-evenly items-center w-full">
                        <Button
                            onClick={() => reset()}
                            color="red"
                            className="">
                            clear
                        </Button>
                        <Button
                            className=""
                            disabled={isSubmitting}
                            type="submit">
                            Send
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reservation;
