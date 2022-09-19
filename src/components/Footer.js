import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import heart2 from "../images/heart2.png";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<p>Made with</p>
				<div className="footer-heart-icon">
					<img src={heart2} width={40} height={46} alt="heart-icon" />
				</div>
				<p className="footer-p">&lt; FeliCodMan © 2022‍ /&gt;</p>
				<div className="footer-icons">
					<a href="https://www.github.com/felicodman/" target="”_blank”">
						<FontAwesomeIcon icon={faGithub} className="githubIcon" />
					</a>
					<a
						href="https://www.linkedin.com/in/brayan-felipe-ramirez-mesa-bbb720143/"
						target="”_blank”"
					>
						<FontAwesomeIcon icon={faLinkedin} className="linkedinIcon" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;