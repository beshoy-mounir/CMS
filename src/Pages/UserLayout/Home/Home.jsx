import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        // Container
        <div>
            {/* Container */}
            <div className="flex flex-col gap-10 dark:bg-gray-800 dark:text-white">
                {/* 1 */}
                <div className="flex flex-col w-2/3 p-8 m-auto">
                    <span className="text-[4rem] text-primaly dark:text-bluee">
                        Book Your Appointment Today
                    </span>
                    <span className="text-[2rem]">
                        Convenient Online Booking for Expert Care
                    </span>
                </div>
                {/* 2 */}
                <div className="flex justify-evenly w-2/3 m-auto">
                    <div className="flex flex-col justify-evenly gap-5">
                        <span className="text-2xl font-bold text-primaly dark:text-bluee">
                            Services
                        </span>
                        <div className="flex flex-col gap-1">
                            <span>General Checkup</span>
                            <span>Dental Care</span>
                            <span>Pediatric Care</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-evenly gap-5">
                        <span className="text-2xl font-bold text-primaly dark:text-bluee">
                            About Us
                        </span>
                        <div className="flex flex-col gap-1">
                            <span>
                                Our goal is to help everyone get help fast &
                                easy
                            </span>
                            <span>Best Doctors in Contury</span>
                            <span>24hr support</span>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="flex flex-col gap-5 w-2/3 p-8 m-auto">
                    <span className="text-2xl font-bold text-primaly dark:text-bluee">
                        Schedule Appointment
                    </span>
                    <div>
                        <Link to="/doctors">
                            <Button>Book Now</Button>
                        </Link>
                    </div>
                </div>
                {/* Footer */}
                <div>
                    <footer className="bg-white dark:bg-gray-900">
                        <div className="mx-auto w-full max-w-screen-xl">
                            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                        Company
                                    </h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className=" hover:underline">
                                                About
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                Careers
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                Brand Center
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                Blog
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                        Help center
                                    </h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                Discord Server
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                Twitter
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                Facebook
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                        Legal
                                    </h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                Licensing
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                Terms &amp; Conditions
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                        Download
                                    </h2>
                                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                iOS
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                Android
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                Windows
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a
                                                href="#"
                                                className="hover:underline">
                                                MacOS
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Home;
