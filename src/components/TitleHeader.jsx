


const TitleHeader = ({ title, text }) => {
  return (
    <div className='flex justify-between items-center play'>
      <div>
        <h1 className='font-extrabold text-white lg:text-5xl md:text-4xl text-3xl uppercase bungee'>
          {title}
        </h1>
        <p className='lg:text-2xl md:text-xl text-white md:mt-6 play'>{text}</p>
      </div>
    </div>
  )
}

export default TitleHeader