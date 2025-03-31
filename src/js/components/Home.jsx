import React from "react";

import Prueba from "./Prueba.jsx"; //import para default
import { Navbar } from './navbar.jsx' // import para export const bla bla bla
import { MyCard } from './MyCard.jsx'
import { ComponenteConJs } from "./ComponenteConJs.jsx";
import {Testing} from './test.jsx'

import img1 from '../../img/rigo-baby.jpg'
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<h1>esto esta escrito en Home</h1>
			<div className="container d-flex justify-content-between">
				<div className="divIzquierda">
					izquierda
				</div>
				<div >
					<ComponenteConJs/>
				</div>
			</div>
			<Prueba />
			<Testing />
			<div className="row">

				<MyCard imgurl={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F30%2F62%2FjHBzTk.jpg&f=1&nofb=1&ipt=62476ded9fc263b75ff44b8d025d575f446e15c270ad1403322a60311c94ca4a&ipo=images'}/>
				
			</div>
		</div>
	);
};

export default Home;