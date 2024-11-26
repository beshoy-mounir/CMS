import React, { useState } from "react";
import { Button, Input, Option, Radio, Select } from "@material-tailwind/react";
import axios from "axios";

const Reservation = ({ logedUser }) => {
    // Style
    const qStyle = "text-lg font-Inria";
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
    const [step, eStep] = useState(0);
    const [user, eUser] = useState({
        firstname: "",
        lastname: "",
        age: "",
        gender: "",
        specialties: "",
        note: "",
    });

    // const postData = async () => {
    //     let old = await axios({
    //         method: "get",
    //         url: `${import.meta.env.VITE_USERS}/${localStorage.pi}`,
    //     }).then(({ data }) => {
    //         old = data;
    //     });

    //     await axios({
    //         method: "put",
    //         url: `${import.meta.env.VITE_USERS}/${localStorage.pi}`,
    //         data: {
    //             reservation: { user },
    //         },
    //     })
    //         .then(() => console.log("Success"))
    //         .catch((err) => console.log(err));
    // };
    return (
        // wrapper
        <div className="flex justify-center items-center w-full h-[90.9%] bg-primaly dark:bg-gray-800">
            {/* Container */}
            <div className="flex flex-col justify-evenly items-center w-3/4 cxs:w-full csm:w-full h-4/5 ">
                {step == 0 ? (
                    <span
                        className={`${qStyle} bg-white p-10 rounded-lg dark:bg-gray-700 dark:text-white`}>
                        We Hope You Get Better Soon
                    </span>
                ) : step == 1 ? (
                    <div className="flex flex-col justify-evenly items-center h-1/2 w-1/2 cxs:w-4/5 csm:w-4/5 cmd:w-4/5 clg:w-4/5 cxl:w-2/3 bg-white px-5 py-8 rounded-lg dark:bg-gray-700 dark:text-white">
                        <span className={`${qStyle}`}>What is Your Name</span>
                        <Input
                            className="dark:text-white"
                            value={user.firstname}
                            onChange={(e) =>
                                eUser({ ...user, firstname: e.target.value })
                            }
                            label={
                                <span className="dark:text-white">
                                    First Name
                                </span>
                            }
                        />
                        <Input
                            className="dark:text-white"
                            value={user.lastname}
                            onChange={(e) =>
                                eUser({ ...user, lastname: e.target.value })
                            }
                            label={
                                <span className="dark:text-white">
                                    Last Name
                                </span>
                            }
                        />
                    </div>
                ) : step == 2 ? (
                    <div className="flex flex-col justify-evenly items-center h-1/2 w-1/2 cxs:w-4/5 csm:w-4/5 cmd:w-4/5 clg:w-4/5 cxl:w-2/3 bg-white px-5 py-8 rounded-lg dark:bg-gray-700 dark:text-white">
                        <span className={`${qStyle}`}>How Old Are You</span>
                        <Input
                            className="dark:text-white"
                            value={user.age}
                            onChange={(e) =>
                                isNaN(e.target.value)
                                    ? ""
                                    : eUser({ ...user, age: e.target.value })
                            }
                            label={<span className="dark:text-white">Age</span>}
                            inputMode="numeric"
                            maxLength={2}
                        />
                        <div className="flex justify-evenly w-full">
                            <Radio
                                name="gender"
                                color="blue"
                                label={
                                    <span className="dark:text-white">
                                        Male
                                    </span>
                                }
                                checked={user.gender == "male" ? true : false}
                                onClick={() =>
                                    eUser({ ...user, gender: "male" })
                                }
                            />
                            <Radio
                                name="gender"
                                color="blue"
                                label={
                                    <span className="dark:text-white">
                                        Female
                                    </span>
                                }
                                checked={user.gender == "female" ? true : false}
                                onClick={() =>
                                    eUser({ ...user, gender: "female" })
                                }
                            />
                        </div>
                    </div>
                ) : step == 3 ? (
                    <div className="flex flex-col justify-start items-center gap-5 h-1/2 w-1/2 cxs:w-4/5 csm:w-4/5 cmd:w-4/5 clg:w-4/5 cxl:w-2/3 bg-white px-5 py-8 rounded-lg dark:bg-gray-700  dark:text-white">
                        <span className={`${qStyle}`}>Choose Specialties</span>
                        <div className="p-2 w-full bg-white rounded-lg">
                            <Select
                                label="Specialties"
                                value={user.specialties}
                                onChange={() => {}}
                                color="blue">
                                {medicalSpecialties.map((item, index) => (
                                    <Option
                                        className="text-primaly"
                                        key={index}
                                        value={item}
                                        onClick={(e) =>
                                            eUser({
                                                ...user,
                                                specialties: item,
                                            })
                                        }>
                                        {item}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    </div>
                ) : step == 4 ? (
                    <div className="flex flex-col justify-evenly items-center gap-5 h-1/2 w-1/2 cxs:w-4/5 csm:w-4/5 cmd:w-4/5 clg:w-4/5 cxl:w-2/3 bg-white rounded-lg dark:bg-gray-700 dark:text-white">
                        <span>ADD Note (optional)</span>
                        <textarea
                            value={user.note}
                            onChange={(e) =>
                                eUser({ ...user, note: e.target.value })
                            }
                            className="w-3/4 h-2/3 p-3  mb-5 resize-none dark:bg-gray-600 rounded-lg outline outline-1 outline-gray-800 focus:outline-2"></textarea>
                    </div>
                ) : (
                    ""
                )}
                {/* buttons */}
                <div className="flex flex-col items-center gap-3 w-1/2 cxs:w-4/5 csm:w-4/5">
                    <div className="flex justify-evenly items-center w-full">
                        <Button
                            onClick={() => eStep(step - 1)}
                            className={`${step == 0 ? "hidden" : ""}`}>
                            Back
                        </Button>
                        <Button
                            onClick={() =>
                                step == 4 ? postData() : eStep(step + 1)
                            }>
                            {step == 4 ? "Send" : "Continue"}
                        </Button>
                    </div>
                    <Button
                        className={`${
                            step == 0 ? "hidden" : ""
                        } w-1/2 cxs:w-4/5 csm:w-4/5 cmd:w-full clg:w-4/5 cxl:w-4/5`}
                        onClick={() =>
                            eUser({
                                ...user,
                                firstname: logedUser?.firstname,
                                lastname: logedUser?.lastname,
                                age:
                                    new Date().getFullYear() -
                                    logedUser?.birthday.slice(-4),
                                gender: logedUser?.gender,
                            })
                        }>
                        Continue With User Info
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
