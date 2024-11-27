import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button } from "@material-tailwind/react";

const SignUp = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
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
            navigate("/*");
        } catch (error) {
            console.error(
                "Error during sign up:",
                error.response?.data || error.message
            );
            alert("Failed to create account. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-300 dark:bg-gray-800">
            <div className="bg-gray-200 dark:bg-gray-900 w-full max-w-4xl p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    Create Account
                </h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Input
                            label="First Name"
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
                            label="Last Name"
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
                            label="Email"
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
                            label="Password"
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
                            label="Confirm Password"
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
                            label="Phone"
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
                            label="Birthday"
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

                    <div>
                        <Input
                            label="Profile Picture"
                            type="file"
                            {...register("image", {
                                required: "Image is required",
                            })}
                            error={!!errors.image}
                        />
                        {errors.image && (
                            <span className="text-red-500 text-sm">
                                {errors.image.message}
                            </span>
                        )}
                    </div>

                    <div className="col-span-1 md:col-span-2  ">
                        <Button
                            type="submit"
                            fullWidth
                            color="blue"
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
