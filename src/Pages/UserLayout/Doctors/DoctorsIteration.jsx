import { useNavigate } from "react-router-dom";
import { Button, Rating } from "@material-tailwind/react";
// images
import doctorImage from "../../../Images/doctor.jpg";

// icons
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const DoctorsIteration = ({ doctor, eDoctorInfo, eShowInfo }) => {
    const navigate = useNavigate();

    return (
        <div className="flex cxs:flex-col cxs:items-center csm:flex-col csm:items-center cmd:flex-col cmd:items-center clg:flex-col clg:items-center justify-evenly items-start h-fit p-8 bg-white dark:bg-gray-600 rounded-xl cxs:text-xs csm:text-sm">
            {/* image */}
            <div>
                {doctor.image == "" ? (
                    <img
                        className="size-52 rounded-full"
                        src={doctorImage}
                        alt={`Doctor ${doctor.firstname} ${doctor.lastname} image`}
                    />
                ) : (
                    <img
                        className="size-52 rounded-full"
                        src={doctor.image}
                        alt={`Doctor ${doctor.firstname} ${doctor.lastname} image`}
                    />
                )}
            </div>
            {/* info */}
            <div className="flex justify-evenly items-center flex-grow">
                <div className="flex flex-col justify-center gap-5 text-md flex-grow cxs:mx-0 csm:mx-0 cmd:mx-5 mx-10 c2xl:mx-20 dark:text-white">
                    <span>
                        <span className="text-blue-400 dark:text-bluee">
                            Doctor :{" "}
                        </span>
                        {doctor.firstname}
                    </span>
                    <span>
                        <span className="text-blue-400 dark:text-bluee">
                            specialties :{" "}
                        </span>
                        {doctor.specialties}
                    </span>
                    <span>
                        <span className="text-blue-400 dark:text-bluee">
                            Expertise :{" "}
                        </span>
                        {doctor.expertise == 0
                            ? "No expertise"
                            : `${doctor.expertise} Years`}
                    </span>
                    <span className="flex flex-col justify-center">
                        <div className="flex cxs:flex-col csm:flex-col">
                            <span className="text-blue-400 dark:text-bluee">
                                Rating :{" "}
                            </span>
                            <Rating
                                className="hover:cursor-default"
                                value={doctor.rate[0]}
                                unratedColor="yellow"
                                readonly
                            />{" "}
                        </div>
                        <span className="text-xs">
                            Based on{" "}
                            <span className="text-blue-400 dark:text-bluee">
                                {doctor.rate[1]}
                            </span>{" "}
                            review
                        </span>
                    </span>
                    <span className="flex gap-3 items-center">
                        <FaLocationDot className="text-blue-400 dark:text-bluee" />
                        : {doctor.address}
                    </span>
                    <span className="flex gap-3 items-center">
                        <FaMoneyBillAlt className="text-blue-400 dark:text-bluee" />{" "}
                        : {doctor.fee}
                    </span>
                    <span className="flex gap-3 items-center">
                        <MdAccessTime className="size-4 text-blue-400 dark:text-bluee" />{" "}
                        <div className="flex cmd:flex-col csm:flex-col cxs:flex-col">
                            <span className="text-blue-400 dark:text-bluee">
                                {" "}
                                Waiting time :
                            </span>
                            <span>
                                {doctor.awt > 60
                                    ? `${Number.parseFloat(
                                          doctor.awt / 60
                                      ).toFixed(1)} Hour`
                                    : `${doctor.awt} Minutes`}
                            </span>
                        </div>
                    </span>
                </div>
                {/* Clinic Hours */}
                <div className="flex flex-col justify-evenly items-center">
                    <Button
                        onClick={() => navigate("/reservation")}
                        className="w-[203px] my-8 cxs:text-xs cxs:p-2 csm:p-2 cmd:p-3 clg:my-5 bg-blue-400 cxs:w-20 csm:w-44 cmd:w-44">
                        Reserve Now
                    </Button>
                    <Button
                        onClick={() => {
                            eDoctorInfo(doctor);
                            eShowInfo(true);
                        }}
                        className="my-8 cxs:text-xs text cxs:p-1 csm:p-2 cmd:p-3 clg:my-5 ">
                        Contact the Assistant
                    </Button>
                </div>
            </div>
            {/* Contact Assistant */}
        </div>
    );
};

export default DoctorsIteration;
