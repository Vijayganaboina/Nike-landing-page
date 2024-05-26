const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center items-center
       gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full hover:shadow-lg
      ${backgroundColor
      ? `${backgroundColor} ${textColor} ${borderColor}`
      : 'bg-coral-red rounded-full text-white border-coral-red'}   
      ${fullWidth && 'w-full'}`} >
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon"
       className="ml-2 rounded-full w-5 h-5"
      />}
    </button>
  )
}

export default Button;