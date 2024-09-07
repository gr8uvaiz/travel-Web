import { Shield, DollarSign, Car, UserCheck, ThumbsUp, Clock } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "No Hidden Charges",
      description: "We believe in transparent pricing. What you see is what you pay, with no surprises."
    },
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "Pick Up and Drop",
      description: "Enjoy the convenience of door-to-door service for a stress-free travel experience."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      title: "Professional Drivers",
      description: "Our experienced and courteous drivers ensure a safe and comfortable journey."
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-blue-600" />,
      title: "Customer Satisfaction",
      description: "Your happiness is our priority. We go the extra mile to exceed your expectations."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Safety First",
      description: "We maintain the highest safety standards to give you peace of mind while traveling."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "24/7 Support",
      description: "Our dedicated support team is always available to assist you, anytime, anywhere."
    }
  ]

  return (
    <div className="bg-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-800">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="mr-4 bg-blue-100 rounded-full p-2">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-zinc-800">{feature.title}</h3>
              </div>
              <p className="text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}