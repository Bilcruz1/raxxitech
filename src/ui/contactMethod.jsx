export default function ContactMethod({ icon, title, info }) {
	return (
		<div className="flex items-start space-x-4">
			<div>{icon}</div>
			<div>
				<p className="text-gray-800 font-semibold text-[14px]">{title}</p>
				<p className="text-gray-800 text-[14px]">{info}</p>
			</div>
		</div>
	);
}
