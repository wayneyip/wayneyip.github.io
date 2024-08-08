import { Link } from 'react-router-dom';

export default function BackToHome()
{
	return (
		<div className="container max-w-screen-lg mx-auto px-2 pb-10">
		<Link to="/">
			<p className="text-center md:text-left md:ml-5 text-blue-600 hover:text-blue-400">&lt; Back to Work</p>
		</Link>
		</div>
	)
}