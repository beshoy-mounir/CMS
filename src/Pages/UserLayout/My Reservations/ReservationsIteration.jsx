import { Button } from "@material-tailwind/react";

const ReservationsIteration = ({ res, cancelReservation }) => {
    return (
        // Wrapper
        <div>
            {/* Container */}
            <div>
                <div className="flex flex-col justify-center bg-white dark:bg-gray-600 rounded-lg shadow-xl">
                    {/* r1 */}
                    <div className="flex justify-evenly items-center py-8 gap-3 cxs:flex-col cxs:items-center cxs:text-center csm:flex-col csm:items-center csm:text-center cmd:flex-col cmd:items-center cmd:text-center ">
                        {/* c1 */}
                        <div className="flex flex-col gap-5 dark:text-white w-full">
                            <span className="mb-2 text-xl font-extrabold text-blue-400 dark:text-bluee text-center">
                                Patient Details
                            </span>
                            <div className="flex flex-col gap-5 w-2/3 m-auto">
                                <span>
                                    <span className="text-blue-400 dark:text-bluee">
                                        Patient Name:{" "}
                                    </span>
                                    {res?.firstname}
                                </span>
                                <span>
                                    <span className="text-blue-400 dark:text-bluee">
                                        Family Name :{" "}
                                    </span>
                                    {res?.lastname}
                                </span>
                                <span>
                                    <span className="text-blue-400 dark:text-bluee">
                                        Gender :{" "}
                                    </span>
                                    {res?.gender}
                                </span>
                                <span>
                                    <span className="text-blue-400 dark:text-bluee">
                                        Age :{" "}
                                    </span>
                                    {res?.age}
                                </span>
                            </div>
                        </div>
                        {/* c2 */}
                        <div className="flex flex-col gap-5 dark:text-white w-full">
                            <span className="mb-2 text-xl font-extrabold text-blue-400 dark:text-bluee text-center">
                                Appointment Details
                            </span>
                            <div className="flex flex-col gap-5 w-2/3 m-auto">
                                <span>
                                    <span className="text-blue-400 dark:text-bluee">
                                        specialties :{" "}
                                    </span>
                                    {res?.specialties}
                                </span>
                                <span>
                                    <span className="text-blue-400 dark:text-bluee">
                                        Doctor :{" "}
                                    </span>
                                    {res?.doctor}
                                </span>
                                <span>
                                    <span className="text-blue-400 dark:text-bluee">
                                        Date :{" "}
                                    </span>
                                    {res?.date}
                                </span>
                                <span>
                                    <span className="text-blue-400 dark:text-bluee">
                                        Hour :{" "}
                                    </span>
                                    {res?.hour}
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* r2 */}
                    <div className="flex flex-col justify-evenly items-start gap-3 w-3/4 py-8 m-auto dark:text-white cxs:w-11/12 cxs:py-0 csm:w-11/12 csm:py-0 cmd:w-11/12 cmd:py-0 ">
                        <span className="text-blue-400 dark:text-bluee">
                            Note :-{" "}
                        </span>
                        <span>
                            {res?.note == "" ? "No Note Found" : res?.note}
                        </span>
                    </div>
                    {/* r3 */}
                    <div className="flex justify-center items-center py-4">
                        <Button
                            color="red"
                            onClick={() => cancelReservation(res)}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationsIteration;
