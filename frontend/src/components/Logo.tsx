import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background circle */}
      <circle cx="20" cy="20" r="18" fill="currentColor" className="text-primary-600" />
      
      {/* Briefcase icon */}
      <path
        d="M12 14C12 12.8954 12.8954 12 14 12H16V10C16 8.89543 16.8954 8 18 8H22C23.1046 8 24 8.89543 24 10V12H26C27.1046 12 28 12.8954 28 14V28C28 29.1046 27.1046 30 26 30H14C12.8954 30 12 29.1046 12 28V14Z"
        fill="white"
      />
      <path
        d="M18 12V10H22V12H18Z"
        fill="currentColor"
        className="text-primary-600"
      />
      <path
        d="M14 14V28H26V14H14Z"
        fill="white"
      />
      
      {/* People/users icon inside */}
      <circle cx="17" cy="19" r="2" fill="currentColor" className="text-primary-600" />
      <circle cx="23" cy="19" r="2" fill="currentColor" className="text-primary-600" />
      <path
        d="M15 23C15 21.3431 16.3431 20 18 20H22C23.6569 20 25 21.3431 25 23V24H15V23Z"
        fill="currentColor"
        className="text-primary-600"
      />
      
      {/* Star accent */}
      <path
        d="M20 7L21.5 11.5L26 11.5L22.5 14.5L24 19L20 16L16 19L17.5 14.5L14 11.5L18.5 11.5L20 7Z"
        fill="currentColor"
        className="text-primary-400"
        opacity="0.8"
      />
    </motion.svg>
  )
}

export default Logo

