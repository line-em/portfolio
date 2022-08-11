import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// FIXME: Should I install AOS?
function About() {
	// AOS.init();
	return (
		<section className="about-me" role="note" data-aos="fade-up" id="about">
			<article className="description-page">
				<h2>About Me</h2>
				<p>Hey there! Olá, pessoal! 👋🏽</p>
				<p>
					I'm a <strong>front-end developer</strong> currently based on Portugal, building
					web applications using React. I like to deliver a good user experiences,
					focusing on responsiveness and other things!
				</p>
				<p>
					I'm a hard worker and eager to learn more. I'm looking for more knowledge and
					for a chance to contribute in a real project!
				</p>
				<h4>Some facts about me:</h4>
				<p>
					💻 My very first experience with coding was a long time ago, making some
					fansites of things I liked when I was a kid!
				</p>
				<p>🐱 I love spending time with my cat, Leia. She's one talkative kitten!</p>
				<p>
					🎮 I love books, games and animation. I also already worked with games in the
					past!
				</p>
			</article>
		</section>
	);
}

export default About;
