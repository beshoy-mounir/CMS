import axios from "axios";
import React, { useEffect, useState } from "react";
import DoctorsIteration from "./DoctorsIteration";
import { Spinner } from "@material-tailwind/react";
// icons
import { IoFilter } from "react-icons/io5";

const Doctors = () => {
    const [doctors, eDoctors] = useState(null);
    console.log(doctors != null);

    useEffect(() => {
        axios({
            method: "get",
            url: "https://doctores.glitch.me/Doctors",
        }).then(({ data }) => eDoctors(data));
    }, []);
    return (
        <div>
            <div className="flex flex-col items-center w-full  bg-primaly dark:bg-gray-800">
                <span className=" w-3/4 my-10 p-5 rounded-xl text-2xl text-white font-black">
                    ALL Doctors
                </span>
                <span className="flex gap-3 w-3/4 p-5 rounded-xl text-2xl text-white font-bold">
                    <IoFilter />
                    Filter
                </span>
                <div className="w-full h-2/3">
                    {doctors != null ? (
                        <div className="flex flex-col items-center gap-5 w-3/4 mx-auto">
                            {doctors.map((item, index) => (
                                <div className="w-full" key={index}>
                                    <DoctorsIteration doctor={item} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="relative flex justify-center items-center h-svh size-full bg-transparent">
                            <Spinner className="size-16 absolute top-1/4" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
