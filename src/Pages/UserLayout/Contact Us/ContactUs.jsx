import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "@material-tailwind/react";

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = async (data) => {
        reset();
    };
    return (
        <div
            className={`flex justify-center min-h-[90.9%] h-fit bg-gray-200 dark:bg-gray-800 shadow-xl`}>
            <div className="flex justify-center items-center w-4/5 cxs:w-full h-[90.9%] cxs:m-0 csm:m-0 cmd:m-0 my-14">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col justify-center gap-5 w-1/2 cxs:w-full csm:w-full cmd:w-full clg:w-11/12 cxl:w-3/4 h-fit csm:mt-10 p-8 rounded-lg text-black dark:text-white bg-white dark:bg-gray-700">
                    <div className="flex flex-col">
                        <span className="text-[32px] font-bold">
                            Let's talk about the future
                        </span>
                        <span>
                            We're here to answer your questions and discuss the
                            decentralized future.
                        </span>
                    </div>
                    <div className="flex cxs:flex-col csm:flex-col cmd:flex-col justify-between cxs:justify-center cxs:items-center cxs:gap-5 csm:justify-center csm:items-center csm:gap-5 cmd:justify-center cmd:items-center cmd:gap-5">
                        <div className="w-[45%] cxs:w-full csm:w-full cmd:w-full">
                            <Input
                                {...register("firstname", {
                                    required: "First Name Is Required",
                                    minLength: {
                                        value: 4,
                                        message: "First Name is too Short",
                                    },
                                })}
                                label={
                                    <span className="text-black dark:text-white">
                                        First Name
                                    </span>
                                }
                                className="text-black dark:text-white"
                                error={errors.firstname}
                            />
                            {errors.firstname && (
                                <p className="text-red-500">
                                    {errors.firstname.message}
                                </p>
                            )}
                        </div>
                        <div className="w-[45%] cxs:w-full csm:w-full cmd:w-full">
                            <Input
                                {...register("lastname", {
                                    required: "Last Name Is Required",
                                    minLength: {
                                        value: 4,
                                        message: "Last Name is too Short",
                                    },
                                })}
                                label={
                                    <span className="text-black dark:text-white">
                                        Last Name
                                    </span>
                                }
                                className="text-black dark:text-white"
                                error={errors.lastname}
                            />
                            {errors.lastname && (
                                <p className="text-red-500">
                                    {errors.lastname.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <Input
                            {...register("email", {
                                required: "E-mail Is Required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email format",
                                },
                            })}
                            label={
                                <span className="text-black dark:text-white">
                                    E-mail
                                </span>
                            }
                            className="text-black dark:text-white"
                            error={errors.email}
                        />
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <Input
                            {...register("company")}
                            label={
                                <span className="text-black dark:text-white">
                                    Company
                                </span>
                            }
                            className="text-black dark:text-white"
                        />
                    </div>
                    <div>
                        <Textarea
                            {...register("message", {
                                required: "Message Is Required",
                                minLength: {
                                    value: 20,
                                    message: "Messege is too Short",
                                },
                            })}
                            label={
                                <span className="text-black dark:text-white">
                                    Message
                                </span>
                            }
                            className="w-full resize-none text-black dark:text-white"
                            error={errors.message}
                        />
                        {errors.message && (
                            <p className="text-red-500">
                                {errors.message.message}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-evenly w-1/2 m-auto cxs:w-full csm:w-full">
                        <Button
                            onClick={() => reset()}
                            color="red"
                            className="w-24">
                            Clear
                        </Button>
                        <Button type="submit" className="w-24">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
