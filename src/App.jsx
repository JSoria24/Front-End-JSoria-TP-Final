import React, { useContext, useState } from 'react'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import { Route, Routes } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import { ContactContext } from './Context/ContactContext'
import { AppThemeContext } from './Context/AppThemeContext'

const App = () => {
	const { app_theme, toggleAppTheme } = useContext(AppThemeContext)
	console.log('La aplicacion esta en theme', app_theme)
	return (
		<div className={'background-' + app_theme}>
			<button onClick={toggleAppTheme}>Cambiar de modo (modo actual: {app_theme})</button>
			<Routes>
				<Route
					path='/'
					element={<ContactScreen />}
				/>
				{/*
				:contact_id es un parametro de busqueda (valor pasado por la URL)
				ponemos :contact_id para indicar que el valor es variable, es decir puede ser:
				/contact/1/messages
				o 
				/contact/2/messages
				etc...
				*/}
				<Route
					path='/contact/:contact_id/messages'
					element={<ChatScreen />}
				/>

			</Routes>

		</div>
	)
}






export default App