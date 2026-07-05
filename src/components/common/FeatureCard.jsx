function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300">

            <div className="text-5xl mb-5">
                {icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">
                {title}
            </h3>

            <p className="text-gray-600 leading-7">
                {description}
            </p>

        </div>
    );
}

export default FeatureCard;