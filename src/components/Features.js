// pages/features.js
import Link from "next/link";

const features = [
  {
    title: "No Code Needed",
    description:
      "It is a long established fact that clients should focus on their business goals, not technical implementation details. We handle the code so you don't have to.",
    highlight: "Code is no longer a barrier",
    iconColor: "text-blue-500",
    icon: (
      <svg
        className="w-24 h-24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 50 H80 M50 20 L80 50 L50 80"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="25"
          y="25"
          width="50"
          height="50"
          rx="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
      </svg>
    ),
  },
  {
    title: "Breakthrough Design",
    description:
      "PixelPerfect simplifies the way of creating stunning digital experiences with breakthrough design methodologies and user research.",
    highlight: "Be in the driver's seat of innovation",
    iconColor: "text-blue-500",
    icon: (
      <svg
        className="w-24 h-24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="10"
          y1="50"
          x2="90"
          y2="50"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="25"
          y1="30"
          x2="25"
          y2="70"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="50"
          y1="30"
          x2="50"
          y2="70"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="75"
          y1="30"
          x2="75"
          y2="70"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Versatile",
    description:
      "Imagine all the digital challenges that need innovative solutions. If you can see it, we can make it happen - from e-commerce to complex web applications.",
    highlight: "More solutions than you can think of",
    iconColor: "text-green-500",
    icon: (
      <svg
        className="w-24 h-24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 50 H30 L50 30 L70 50 L90 30"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10 70 H30 L50 50 L70 70 L90 50"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Unconventional",
    description:
      "We are all about finding creative approaches to design problems and exceptional ways of solving them through innovative UX/UI strategies.",
    highlight: "We challenge what others believe to be impossible",
    iconColor: "text-purple-500",
    icon: (
      <svg
        className="w-24 h-24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="30" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="70" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="50" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="70" cy="50" r="10" stroke="currentColor" strokeWidth="2" />
        <line
          x1="15"
          y1="50"
          x2="85"
          y2="50"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="50"
          y1="15"
          x2="50"
          y2="85"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "User-Centric",
    description:
      "We prioritize human experiences in every design decision. By understanding your users' needs, we create interfaces that delight and platforms that perform.",
    highlight: "People first, technology second",
    iconColor: "text-yellow-500",
    icon: (
      <svg
        className="w-24 h-24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="20"
          y="20"
          width="60"
          height="60"
          rx="8"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="35" cy="35" r="5" fill="currentColor" />
        <circle cx="65" cy="35" r="5" fill="currentColor" />
        <path
          d="M35 65 C35 55, 65 55, 65 65"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Full Service",
    description:
      "We provide complete digital solutions, from design to deployment. Whether it's a small business website or an enterprise-grade platform, we handle it all.",
    highlight: "End-to-end digital solutions",
    iconColor: "text-indigo-500",
    icon: (
      <svg
        className="w-24 h-24"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 80 L20 20 L80 20 L80 80 Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M30 40 L70 40" stroke="currentColor" strokeWidth="2" />
        <path d="M30 50 L60 50" stroke="currentColor" strokeWidth="2" />
        <path d="M30 60 L50 60" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <div className="flex mb-6">
            <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">
              WHY N Factor?
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-gray-800 max-w-2xl">
            Fast, flexible, efficient: <br />
            We create digital experiences for everyone!
          </h1>
        </div>

        {/* Introduction Text */}
        <div className="max-w-md mb-4">
          <p className="text-gray-700 mb-4">
            Welcome to the digital future of your brand.
          </p>
          
          <p className="text-gray-700 mb-4">
            A user-centeblue design approach helps you to make better and faster
            decisions based on user research. It's a methodology that allows
            your company to go from sketching ideas to the final product with
            exceptional results.
          </p>
          <p className="text-gray-700 font-medium">
            It's not magic, it's purely innovative design thinking.
          </p>
          <br />
          <Link
            href="#about"
            className="inline-flex items-center bg-white text-blue-500 px-6 sm:px-8 py-3 rounded-full hover:bg-opacity-30 transition"
          >
            Start Journey
            <svg
              className="w-5 h-5 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 aspect-square rounded-lg shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className={`mb-6 ${feature.iconColor}`}>
                  {feature.icon}
                </div>
                <h2 className="text-2xl font-medium text-gray-800 mb-6">
                  {feature.title}
                </h2>
              </div>
              <div>
                <p className="text-blue-500 text-sm font-medium mb-4">
                  {feature.highlight}
                </p>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
