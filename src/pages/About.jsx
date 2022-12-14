import useWindowDimensions from "../hooks/useWindowDimensions";
import AboutElement from "../components/AboutElement";
import SkillsElement from "../components/SkillsElement";
import React from "react";

function About() {
	const { width: windowWidth } = useWindowDimensions();

	return (
		<section
			className={`main_container main_large text-justify ${
				windowWidth > 1000 ? "col-3" : "col-2"
			}`}
			role="note"
			id="about"
		>
			<article className={`rotate-3 ${windowWidth > 1000 ? "neg-left" : "pos-bottom"}`}>
				<AboutElement />
			</article>

			<article
				className={windowWidth < 1000 && `rotate3 ${windowWidth > 700 && "pos-bottom"}`}
			>
				<SkillsElement />
			</article>

			<article
				className={`${windowWidth > 700 ? "rotate3" : "rotate-3"} ${
					windowWidth < 1000 && windowWidth > 600 ? "neg-top" : ""
				} pos-bottom`}
			>
				<h2>Fun facts:</h2>
				<p>
					💻 My very first experience with coding was a long time ago, making some
					fansites of things I liked when I was a kid, before HTML5! It's wonderful to see
					how things evolved since then, and I'm really glad I've picked up programming
					again.
				</p>
				<p>
					🎮 I love books, games and animation. I also already worked with games in the
					past!
				</p>
				<p className="pos-bottom">
					🐱 I love spending time with my cat, Leia, the rebel princess herself! She's one
					talkative kitten.
				</p>
			</article>
		</section>
	);
}

export default About;
