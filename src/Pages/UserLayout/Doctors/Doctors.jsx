import axios from "axios";
import React, { useEffect, useState } from "react";
import DoctorsIteration from "./DoctorsIteration";
import { Spinner } from "@material-tailwind/react";
// images
import banner from "../../../Images/banner.png";
// icons
import { IoFilter } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";

const Doctors = () => {
    const [doctors, eDoctors] = useState(null);
    const [showFilter, eShowFilter] = useState(false);

    useEffect(() => {
        axios({
            method: "get",
            url: "https://doctores.glitch.me/Doctors",
        }).then(({ data }) => eDoctors(data));
    }, []);
    return (
        <div className="relative">
            <div className="relative flex flex-col items-center w-full  bg-primaly dark:bg-gray-800">
                {/* Banner */}
                <div className="relative flex justify-between items-center w-full h-48 c2xl:h-60 mb-10 dark:text-white bg-white dark:bg-gray-700 shadow-lg ">
                    {/* Banner Image */}
                    <img
                        className="absolute cxs:hidden csm:hidden cmd:hidden right-0 h-full"
                        src={banner}
                        alt=""
                    />
                    {/* Banner Info */}
                    <div className="flex flex-col gap-4 w-full h-full cxs:items-center csm:items-center cmd:items-center cxs:p-0 csm:p-0 cmd:p-0 pl-16 pt-8">
                        <h1 className="text-2xl font-black mt-5">
                            Best Doctors In Egypt
                        </h1>
                        <h2 className="flex gap-3 items-center">
                            Call Us On
                            <FaPhoneAlt />: 01281245667{" "}
                        </h2>
                        <span>We Have More Than {doctors?.length} Doctors</span>
                        <span>Ready To Help you</span>
                    </div>
                </div>
                {/* Filter */}
                <span className=" w-3/4 p-5 ">
                    <span
                        onClick={() => eShowFilter(!showFilter)}
                        className="flex w-fit gap-3 p-2  text-2xl text-white font-bold hover:cursor-pointer">
                        <IoFilter />
                        Filter
                    </span>
                </span>
                {/* Kind Of & Sort */}
                <span className="flex justify-between w-3/4 p-5 text-md text-white font-semibold">
                    <span>"Kind Of Doctor"</span>
                    <span>Sorted By : </span>
                </span>
                {/* Cards */}
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
            {/* Filter Pannel */}
            <div
                className={` absolute ${
                    showFilter ? "flex" : "hidden"
                } justify-between top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-sm`}>
                <div className="sticky top-16 flex flex-col gap-3 bg-white w-1/4 cxs:w-full csm:w-3/4 cmd:w-1/2 clg:w-2/5 h-lvh p-5 shadow-lg dark:bg-gray-900">
                    <div className="flex justify-between items-center dark:text-blue-400">
                        <span>Filter</span>
                        <RiCloseLargeFill
                            onClick={() => eShowFilter(!showFilter)}
                            className="hidden size-10 font-bold p-2 rounded-full outline outline-1 bg-white hover:cursor-pointer cxs:block"
                        />
                    </div>
                    <div>Coming Soon</div>
                </div>
                <div className="grow">
                    <button
                        onClick={() => eShowFilter(!showFilter)}
                        className="w-full h-full dark:bg-blue-400 my-3"></button>
                </div>
            </div>
        </div>
    );
};

export default Doctors;
