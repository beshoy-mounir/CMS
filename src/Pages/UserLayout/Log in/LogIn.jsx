import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";

const LogIn = () => {
    const [users, eUsers] = useState();
    const navigate = useNavigate();
    const [form, eForm] = useState({
        email: "",
        password: "",
    });
    const check = () => {
        const validUser = users?.find(
            (item) => item.email == form.email && item.password == form.password
        );

        if (validUser != undefined) {
            localStorage.pi = validUser.id;
            navigate("/home");
            location.reload();
        }
    };
    useEffect(() => {
        axios({
            method: "get",
            url: `${import.meta.env.VITE_USERS}`,
        }).then(({ data }) => eUsers(data));
    }, []);
    return (
        <div className="">
            <div className="flex justify-center items-center w-full bg-primaly dark:bg-gray-800 h-svh">
                {/* card */}
                <div className="flex flex-col justify-evenly items-center gap-5 w-1/3 cxs:w-full csm:w-4/5 cmd:w-3/5 clg:w-2/3 h-3/5 p-5 rounded-lg bg-white dark:bg-[#eee]">
                    <h1 className="font-bold text-2xl">log In</h1>
                    <div className="flex flex-col justify-around items-center gap-5 w-5/6 ">
                        <Input
                            label="Email"
                            value={form.email}
                            onChange={(e) =>
                                eForm({ ...form, email: e.target.value })
                            }
                        />
                        <Input
                            label="Password"
                            value={form.password}
                            onChange={(e) =>
                                eForm({ ...form, password: e.target.value })
                            }
                        />
                    </div>
                    <Button className="w-5/6" onClick={() => check()}>
                        Log In
                    </Button>
                    <span>
                        don't have an account{" "}
                        <Link to="/signup" className="text-blue-400">
                            Sign Up
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
