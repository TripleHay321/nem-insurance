const Input = ({type,placeholder,label,icon,onChange,defaultValue}) => {
  return (
    <div className='my-14 p-3 w-[24rem]  rounded-md ring-1 ring-gray-300 bg-[#EFEFEF] '>
        <div className="flex items-center justify-between">
            <span>
                <img src={icon} alt="" />
            </span>
            <input onChange={onChange} id={label} name={label} type={type} defaultValue={defaultValue} className='pl-4 appearance-none  outline-none w-full bg-transparent' placeholder={placeholder} />
            
        </div>
    </div>
  )
}

export default Input