import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import React, { useState, useEffect } from "react";
import { Orbit } from "@uiball/loaders";

function App() {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 1100);
	}, []);
	return (
		<HashRouter>
			{isLoading ? (
				<section className="main_container fadeout">
					<Orbit size={64} color="var(--dark-pink)" />
				</section>
			) : (
				<>
					<Nav />
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</>
			)}
		</HashRouter>
	);
}

export default App;

// FIXME: https://www.smashingmagazine.com/2020/10/introduction-to-framer-motion/
// Carrousel animated: https://codesandbox.io/s/chakra-framer-carousel-demo-rr0dnc
// Animated navbar: https://codesandbox.io/s/animated-menu-underline-using-animatesharedlayout-u18q7?file=/src/App.js:883-891
// Outline navbar: https://codesandbox.io/s/framer-motion-2-animatesharedlayout-animate-between-different-components-dy0bv?file=/src/App.js
// TODO: Tutorial framer motion navbar https://blog.maximeheckel.com/posts/framer-motion-layout-animations/ - https://blog.maximeheckel.com/posts/guide-animations-spark-joy-framer-motion/
// Docs: https://www.framer.com/docs/animate-shared-layout/
// https://blog.bitsrc.io/introduction-to-framer-motion-for-react-4ba5a9cabc1b
