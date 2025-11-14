import { motion } from 'framer-motion'
import {
  Briefcase,
  Users,
  Scale,
  GraduationCap,
  Building2,
  Phone,
  ShoppingBag,
  Factory,
  Wallet,
  Home,
  UtensilsCrossed,
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: 'Executive Search',
      description:
        'Identifying and recruiting top-level executives to meet organizational needs with precision and expertise.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Manpower Outsourcing',
      description:
        'Providing skilled personnel to fulfill specific business functions, ensuring quality and reliability.',
    },
    {
      icon: <Scale className="w-10 h-10" />,
      title: 'Labour-Laws Audit Compliance',
      description:
        'Ensuring organizations adhere to relevant labor laws and regulations, minimizing legal risks.',
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: 'Training and Learning Environment',
      description:
        'Developing programs to enhance employee skills and foster a culture of continuous learning.',
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Psychotherapy',
      description:
        'Professional mental health and counseling services for employees and organizations.',
    },
  ]

  const industries = [
    { name: 'Pharma', icon: <Building2 className="w-6 h-6" /> },
    { name: 'Telecom', icon: <Phone className="w-6 h-6" /> },
    { name: 'FMCG', icon: <ShoppingBag className="w-6 h-6" /> },
    { name: 'Manufacturing', icon: <Factory className="w-6 h-6" /> },
    { name: 'Banking', icon: <Wallet className="w-6 h-6" /> },
    { name: 'Trading', icon: <ShoppingBag className="w-6 h-6" /> },
    { name: 'Hospitality', icon: <UtensilsCrossed className="w-6 h-6" /> },
    { name: 'Property', icon: <Home className="w-6 h-6" /> },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.section
        className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-primary-100 max-w-3xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive HR solutions tailored to enhance productivity, performance, and profitability
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-primary-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Expertise across diverse sectors
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-primary-600 mb-3 flex justify-center">
                  {industry.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {industry.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

