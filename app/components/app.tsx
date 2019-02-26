import React from 'react'
import { Route } from 'react-router-dom'
import Life from 'react-conway'
import NavigationOverlay from './navigationOverlay'
import Intro from './intro'
import c from './app.scss'

const LifeContent = () => <Life className={c.life} />

const App = () => (
	<div className={c.app}>
		<NavigationOverlay />
		<div className={c.content}>
			<Route exact path="/" component={Intro} />
			<Route exact path="/life" component={LifeContent} />
		</div>
	</div>
)

export default App