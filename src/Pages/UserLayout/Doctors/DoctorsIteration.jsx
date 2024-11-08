import React from "react";
import { Button } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
// icons
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const DoctorsIteration = ({ doctor }) => {
    return (
        // <div className="flex justify-between items-center w-full p-6 mx-auto rounded-xl text-lg bg-white text-black shadow-2xl">
        //     <span className="w-36 text-center">{doctor.availability}</span>
        //     <Button className="w-28 text-center">Reserve</Button>
        // </div>
        <div className="flex cxs:flex-col cxs:items-center csm:flex-col csm:items-center cmd:flex-col cmd:items-center clg:flex-col clg:items-center justify-evenly items-start h-fit p-8 bg-white rounded-xl">
            {/* image */}
            <div>
                <img
                    className="size-52 rounded-full"
                    src={doctor.image}
                    alt={`Doctor ${doctor.firstname} ${doctor.lastname} image`}
                />
            </div>
            {/* info */}
            <div className="flex justify-evenly items-center flex-grow">
                <div className="flex flex-col justify-center gap-5 text-md flex-grow cxs:mx-0 csm:mx-0 cmd:mx-5 mx-10 c2xl:mx-20">
                    <span>
                        <sup className="text-primaly">Doctor : </sup>
                        {doctor.firstname}
                    </span>
                    <span>
                        <span className="text-blue-400">specialties : </span>
                        {doctor.specialties}
                    </span>
                    <span>
                        <span className="text-blue-400">Expertise : </span>
                        {doctor.expertise == 0
                            ? "No expertise"
                            : `${doctor.expertise} Years`}
                    </span>
                    <span className="flex flex-col justify-center">
                        <div className="flex">
                            <span className="text-blue-400">Rating : </span>
                            <Rating
                                className="hover:cursor-default"
                                value={doctor.rate[0]}
                                readonly
                            />{" "}
                        </div>
                        <span className="text-xs">
                            Based on{" "}
                            <span className="text-blue-400">
                                {doctor.rate[1]}
                            </span>{" "}
                            review
                        </span>
                    </span>
                    <span className="flex gap-3 items-center">
                        <FaLocationDot className="text-blue-400" />:{" "}
                        {doctor.address}
                    </span>
                    <span className="flex gap-3 items-center">
                        <FaMoneyBillAlt className="text-blue-400" /> :{" "}
                        {doctor.fee}
                    </span>
                    <span className="flex gap-3 items-center">
                        <MdAccessTime className="size-4 text-blue-400" />{" "}
                        Waiting time :{" "}
                        {doctor.awt > 60
                            ? `${Number.parseFloat(doctor.awt / 60).toFixed(
                                  1
                              )} Hour`
                            : `${doctor.awt} Minutes`}
                    </span>
                </div>
                {/* Clinic Hours */}
                <div className="flex flex-col justify-evenly items-center">
                    <Button className="my-8 cxs:text-xs cxs:p-2 csm:p-3 cmd:p-3 clg:my-5">
                        More Info
                    </Button>
                    <Button className="my-8 cxs:text-xs cxs:p-2 csm:p-3 cmd:p-3 clg:my-5 bg-green-500">
                        Reserve Now
                    </Button>
                    <Button className="my-8 cxs:text-xs text cxs:p-1 csm:p-2 cmd:p-3 clg:my-5 bg-blue-400">
                        Contact the Assistant
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DoctorsIteration;
