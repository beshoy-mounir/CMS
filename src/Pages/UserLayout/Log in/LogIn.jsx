import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input } from '@material-tailwind/react'
import { useForm } from 'react-hook-form'

const LogIn = () => {
	const [users, setUsers] = useState([])
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const fetchUsers = async () => {
		try {
			const { data } = await axios.get(`${import.meta.env.VITE_USERS}`)
			setUsers(data)
		} catch (error) {
			console.error('Failed to fetch users:', error.message)
		}
	}

	useEffect(() => {
		fetchUsers()
	}, [])

	const onSubmit = (data) => {
		const validUser = users?.find(
			(user) => user.email === data.email && user.password === data.password
		)

		if (validUser) {
			localStorage.setItem('pi', validUser.id)
			navigate('/home')
			location.reload()
		} else {
			alert('Invalid email or password. Please try again.')
		}
	}

	return (
		<div className='min-h-screen flex justify-center items-center bg-blue-300 dark:bg-gray-800'>
			<div className='flex flex-col justify-evenly items-center gap-5 w-1/3 cxs:w-full csm:w-4/5 cmd:w-3/5 clg:w-2/3 h-3/5 p-5 rounded-lg bg-white dark:bg-gray-700 shadow-lg'>
				<h1 className='font-bold text-2xl text-gray-800 dark:text-white'>
					Log In
				</h1>
				<form
					className='flex flex-col justify-around items-center gap-5 w-5/6'
					onSubmit={handleSubmit(onSubmit)}
				>
					{/* Email Field */}
					<div className='w-full'>
						<Input
							label='Email'
							type='email'
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^\S+@\S+$/i,
									message: 'Invalid email format',
								},
							})}
							error={!!errors.email}
						/>
						{errors.email && (
							<span className='text-red-500 text-sm'>
								{errors.email.message}
							</span>
						)}
					</div>

					{/* Password Field */}
					<div className='w-full'>
						<Input
							label='Password'
							type='password'
							{...register('password', {
								required: 'Password is required',
							})}
							error={!!errors.password}
						/>
						{errors.password && (
							<span className='text-red-500 text-sm'>
								{errors.password.message}
							</span>
						)}
					</div>

					{/* Submit Button */}
					<Button
						type='submit'
						className='w-full'
					>
						Log In
					</Button>
				</form>
				<span className='text-gray-600 dark:text-gray-400'>
					Don't have an account?{' '}
					<Link
						to='/signup'
						className='text-blue-400'
					>
						Sign Up
					</Link>
				</span>
			</div>
		</div>
	)
}

export default LogIn
