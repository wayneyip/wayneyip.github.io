import { Link } from 'react-router-dom';

export default function BackToHome()
{
	return (
		<div className="container max-w-screen-lg py-8">
		<Link to="/">
			<p className="text-left">&lt; Back To Home</p>
		</Link>
		</div>
	)
}