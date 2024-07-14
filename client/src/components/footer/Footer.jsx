import './footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
	return (
		<footer>
			<div className='footer__container'>
				<div className='footer__about_us'>
					<img src={assets.logo} alt='logo' />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laudantium consequatur necessitatibus veniam eos quas obcaecati
						explicabo mollitia officiis non earum quisquam quae, reiciendis
						similique commodi sequi optio distinctio quibusdam dolore.
					</p>
					<ul className='footer__socials'>
						<li>
							<img src={assets.facebook_icon} alt='facebook' />
						</li>
						<li>
							<img src={assets.twitter_icon} alt='twitter' />
						</li>
						<li>
							<img src={assets.linkedin_icon} alt='linkedin' />
						</li>
					</ul>
				</div>
				<div className='footer__contact'>
					<h3>GET IN TOUCH</h3>
					<p>
						<span>Tel:</span> 1234556
					</p>
					<p>
						<span>E-mail:</span> order@email.com
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
