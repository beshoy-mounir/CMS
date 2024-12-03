import axios from "axios";
import React, { useEffect, useState } from "react";
import DoctorsIteration from "./DoctorsIteration";
import { Select, Spinner, Option, Button } from "@material-tailwind/react";
// images
import banner from "../../../Images/banner.png";
// icons
import { IoFilter } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";

const Doctors = () => {
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
    const [doctors, eDoctors] = useState(null);
    const [showFilter, eShowFilter] = useState(false);
    const [filterd, eFilterd] = useState(null);

    useEffect(() => {
        axios({
            method: "get",
            url: `${import.meta.env.VITE_DOCTORS}`,
        }).then(({ data }) => eDoctors(data));
    }, []);
    return (
        <div className="relative">
            <div className="relative flex flex-col items-center w-full  bg-primaly dark:bg-gray-800">
                {/* Banner */}
                <div className="relative flex justify-between items-center w-full h-48 clg:h-60 cxl:h-60 c2xl:h-60 mb-10 dark:text-white bg-white dark:bg-gray-700 shadow-lg select-none">
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
                            <FaPhoneAlt />:{" "}
                            <span className="select-text">01281245667</span>
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
                    <span>{filterd == null ? "No Filter" : filterd}</span>
                    {/* <span>Sorted By : </span> */}
                </span>
                {/* Cards */}
                <div className="w-full h-2/3">
                    {doctors != null ? (
                        <div className="flex flex-col items-center gap-5 w-3/4 mx-auto">
                            {doctors.map((item, index) =>
                                filterd == null ? (
                                    <div className="w-full" key={index}>
                                        <DoctorsIteration doctor={item} />
                                    </div>
                                ) : item?.specialties == filterd ? (
                                    <div className="w-full" key={index}>
                                        <DoctorsIteration doctor={item} />
                                    </div>
                                ) : (
                                    ""
                                )
                            )}
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
                        <span className="text-2xl">Filter</span>
                        <RiCloseLargeFill
                            onClick={() => eShowFilter(!showFilter)}
                            className="hidden size-10 font-bold p-2 rounded-full outline outline-1 bg-white hover:cursor-pointer cxs:block"
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-between items-center">
                            <span className="dark:text-white">Specialties</span>
                            <Button
                                onClick={() => eFilterd(null)}
                                color="red"
                                size="sm">
                                clear
                            </Button>
                        </div>
                        <Select
                            label="Specialties"
                            value={filterd}
                            onChange={() => {}}
                            color="blue">
                            {medicalSpecialties.map((item, index) => (
                                <Option
                                    className="text-primaly"
                                    key={index}
                                    value={item}
                                    onClick={(e) => eFilterd(item)}>
                                    {item}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>
                <div className="grow">
                    <button
                        onClick={() => eShowFilter(!showFilter)}
                        className="w-full h-full my-3"></button>
                </div>
            </div>
        </div>
    );
};

export default Doctors;
