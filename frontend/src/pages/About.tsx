import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users } from 'lucide-react'

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const sections = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Mission',
      content:
        'Our mission is to empower individuals and organizations to achieve the right human resource solutions through high-quality consulting services that focus on finding, retaining, and developing professional and executive talent.',
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: 'Vision',
      content:
        'To become the preferred leading source of high-caliber sourcing and human resource solutions and become a quality leader in the development of clients\' human resource capabilities.',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Philosophy',
      content:
        'Create an environment by encouraging employees to become and continue to be top performers. Develop a diverse group of individuals into a homogeneous team that delivers results.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Commitment',
      content:
        'We believe in services beyond the training room for achieving the goals efficiently. We work in partnership with you to: Understand your business and development needs from the perspective of training. Design development initiatives and deliver high-impact training interventions Develop and implement powerful reinforcement programs Track and measure for continuous improvement and sustainability.',
    },
  ]

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
            About Us
          </motion.h1>
          <motion.p
            className="text-xl text-primary-100 max-w-3xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Delivering excellence in human resource solutions across industries
          </motion.p>
        </div>
      </motion.section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary-600 mb-4">{section.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
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
              Our Expertise
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
              We deliver services for executive search, manpower outsourcing,
              labour-laws audit compliance, training, and learning environment,
              all tailored to provide solutions to help increase the productivity,
              performance, and profitability of organizations in the Pharma,
              Telecom, FMCG, manufacturing, Banking, trading, hospitality,
              property sectors and other services related businesses and
              organizations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              We believe in customizing and developing specific solutions through
              a collaborative process designed to identify a client's requirements
              and objectives. The unique approach combined with the strong faculty
              of experts, competent trainers, and facilitators will surely spur
              the progress of the establishment.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

