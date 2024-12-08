import axios from "axios";
import { useEffect, useState } from "react";
import ReservationsIteration from "./ReservationsIteration";
import { Button, Spinner } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
const MyReservation = () => {
    const [user, eUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        axios({
            method: "get",
            url: `${import.meta.env.VITE_USERS}/${localStorage.pi}`,
        }).then(({ data }) => {
            eUser(data);
        });
    }, []);

    const cancelReservation = (obj) => {
        const oldReservation = [...user?.reservation];
        const newReservation = oldReservation.filter(
            (item) => item != obj && item
        );
        let userData = { ...user };
        userData.reservation = newReservation;
        eUser(userData);
        axios({
            method: "put",
            url: `${import.meta.env.VITE_USERS}/${localStorage.pi}`,
            data: userData,
        })
            .then(() => {
                console.log("Success");
            })
            .catch((err) => console.log(err));
    };
    return (
        // wrapper
        <div className="bg-gray-200 dark:bg-gray-800 min-h-svh">
            {/* Container */}
            <div className="flex flex-col gap-5 w-4/5 m-auto cxs:w-full csm:w-full cmd:w-full">
                {/* 1 */}
                <div className="mt-5 cxs:text-center csm:text-center cmd:text-center">
                    <span className="text-[2rem] text-primaly dark:text-bluee">
                        My Reservations
                    </span>
                </div>
                {/* 2 */}
                {user == null ? (
                    <div className="flex justify-center items-center h-svh">
                        <Spinner className="size-12" />
                    </div>
                ) : (
                    <div>
                        {user?.reservation?.map((item, index) => (
                            <div key={index} className=" p-5 m-auto">
                                <ReservationsIteration
                                    res={item}
                                    cancelReservation={cancelReservation}
                                />
                            </div>
                        ))}
                        {user?.reservation.length == 0 && (
                            <div className="flex flex-col justify-center items-center gap-10 h-screen">
                                <span className="text-xl font-extrabold dark:text-bluee">
                                    No Reservations Found
                                </span>
                                <Button
                                    onClick={() => navigate("/reservation")}
                                    className="dark:text-black dark:bg-bluee">
                                    Go to Reservation form
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyReservation;
