import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import NavBar from './../../components/NavBar/NavBar'
import Home from './Home/Home'
import Doctors from './Doctors/Doctors'
import Reservation from './Reservation/Reservation'
import ContactUs from './Contact Us/ContactUs'
import LogIn from './Log in/LogIn'
import SignUp from './Log in/SignUp'

const User = () => {
	const [user, eUser] = useState()
	useEffect(() => {
		axios({
			method: 'get',
			url: `${import.meta.env.VITE_USERS}/${localStorage.pi}`,
		}).then(({ data }) => eUser(data))
	}, [])

	return (
		<div className='h-lvh'>
			<NavBar user={user} />
			<Routes>
				<Route
					path='/*'
					element={<Home />}
				/>
				<Route
					path='/doctors'
					element={<Doctors />}
				/>
				<Route
					path='/reservation'
					element={<Reservation logedUser={user} />}
				/>
				<Route
					path='/contactus'
					element={<ContactUs />}
				/>
				<Route
					path='/login'
					element={<LogIn />}
				/>
				<Route
					path='/signup'
					element={<SignUp />}
				/>
			</Routes>
		</div>
	)
}

export default User
