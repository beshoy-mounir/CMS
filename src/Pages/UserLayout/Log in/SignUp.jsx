import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Radio } from "@material-tailwind/react";
import { useState } from "react";

const SignUp = () => {
    const navigate = useNavigate();
    const [gender, eGender] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        gender == "male" ? (data.gender = "male") : (data.gender = "female");
        let userData = data;
        userData.reservation = [];
        try {
            const emailCheckResponse = await axios.get(
                `https://cms-users.glitch.me/users?email=${data.email}`
            );
            if (emailCheckResponse.data.length > 0) {
                alert("Email already exists. Please use a different email.");
                return;
            }

            await axios.post("https://cms-users.glitch.me/users", userData);
            alert("Account created successfully!");
            navigate("/login");
        } catch (error) {
            console.error(
                "Error during sign up:",
                error.response?.data || error.message
            );
            alert("Failed to create account. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-800">
            <div className="dark:bg-gray-700 w-full max-w-4xl p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    Create Account
                </h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Input
                            label={
                                <span className="text-black dark:text-white">
                                    First Name
                                </span>
                            }
                            className="text-black dark:text-white"
                            {...register("firstname", {
                                required: "First name is required",
                            })}
                            error={!!errors.firstname}
                        />
                        {errors.firstname && (
                            <span className="text-red-500 text-sm">
                                {errors.firstname.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <Input
                            label={
                                <span className="text-black dark:text-white">
                                    Last Name
                                </span>
                            }
                            className="text-black dark:text-white"
                            {...register("lastname", {
                                required: "Last name is required",
                            })}
                            error={!!errors.lastname}
                        />
                        {errors.lastname && (
                            <span className="text-red-500 text-sm">
                                {errors.lastname.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <Input
                            label={
                                <span className="text-black dark:text-white">
                                    E-mail
                                </span>
                            }
                            className="text-black dark:text-white"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email format",
                                },
                            })}
                            error={!!errors.email}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <Input
                            label={
                                <span className="text-black dark:text-white">
                                    Password
                                </span>
                            }
                            className="text-black dark:text-white"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters",
                                },
                            })}
                            error={!!errors.password}
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm">
                                {errors.password.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <Input
                            label={
                                <span className="text-black dark:text-white">
                                    Confirm Passowrd
                                </span>
                            }
                            className="text-black dark:text-white"
                            type="password"
                            {...register("confirmpassword", {
                                required: "Please confirm your password",
                            })}
                            error={!!errors.confirmpassword}
                        />
                        {errors.confirmpassword && (
                            <span className="text-red-500 text-sm">
                                {errors.confirmpassword.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <Input
                            label={
                                <span className="text-black dark:text-white">
                                    Phone
                                </span>
                            }
                            className="text-black dark:text-white"
                            type="tel"
                            {...register("phone", {
                                required: "Phone number is required",
                            })}
                            error={!!errors.phone}
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-sm">
                                {errors.phone.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <Input
                            label={
                                <span className="text-black dark:text-white">
                                    Birthday
                                </span>
                            }
                            className="text-black dark:text-white"
                            type="date"
                            {...register("birthday", {
                                required: "Birthday is required",
                            })}
                            error={!!errors.birthday}
                        />
                        {errors.birthday && (
                            <span className="text-red-500 text-sm">
                                {errors.birthday.message}
                            </span>
                        )}
                    </div>

                    <div className="flex justify-evenly items-center">
                        <Radio
                            {...register("gender", {
                                required: "Gender Is required",
                            })}
                            label={
                                <span className="dark:text-white">Male</span>
                            }
                            className="text-black dark:text-white"
                            color="blue"
                            error={errors.gender}
                            onChange={() => eGender("male")}
                        />
                        <Radio
                            {...register("gender", {
                                required: "Gender Is required",
                            })}
                            label={
                                <span className="dark:text-white">Female</span>
                            }
                            className="text-black dark:text-white"
                            color="blue"
                            error={errors.gender}
                            onChange={() => eGender("female")}
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2  ">
                        <Button
                            type="submit"
                            fullWidth
                            ripple="light"
                            className=" w-full p-2 text-2xl">
                            Sign Up
                        </Button>
                    </div>
                </form>

                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
