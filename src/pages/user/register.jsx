import { useState, Fragment } from 'react'
import { 
    IncompleteProgressBar,
    CompleteProgressBar, 
    Calender, 
    UserIcon, 
    ContactIcon, 
    PhoneIcon,
    TimeIcon,
    QueryIcon,
    CloseIcon,
    SmileyIcon,

} from '../../assets'
import Input from '../../components/atoms/input'
import { Dialog, Transition } from '@headlessui/react'
import { useNavigate } from "react-router-dom";
import Header from '../../components/common/header';


const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

export default function Register() {
    const [fullName, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [step, setStep] = useState(1)
    let [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(people[0])
    const navigate = useNavigate();
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const handleSubmit = () => {
        openModal()
                        
    }
    const handlePrint = () => {
      navigate('/printForm');
    }
  return (
    <div>
            <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl h-[20rem] transform overflow-hidden rounded-2xl flex flex-col justify-center  bg-white px-12 text-left align-middle shadow-xl transition-all">
                  <div onClick={closeModal} className='cursor-pointer absolute right-14 top-8'>
                    <img src={CloseIcon} alt="" />
                  </div>
                  <div className="mt-2 flex justify-center items-center w-full ">
                    <div className='w-[60%]'>
                      <p className='font-dmSans font-medium text-[#BDBDBD] leading-[1.5rem] gap-4 text-lg'>You visit will be scheduled pending approval.
                        <br />
                          Upon confrimation an email will be sent for you to finalize
                      </p>
                    </div>
                    <div className='pl-10'>
                      <img src={SmileyIcon} alt="" />
                    </div>
                  </div>

                  <div className="mt-10 flex justify-center items-center ">
                    <button
                      type="button"
                      className='bg-[#4F4F4F] font-bold w-[20rem] py-3 text-white rounded-lg outline-none border-none font-dmSans'
                      onClick={handlePrint}
                    >
                      Print Invite
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
        <Header className={"animated-div absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}/>
        <div className='flex justify-center items-center w-full pt-32'>
            <div className='w-1/2 flex flex-col justify-center items-center font-dmSans'>
                <div className=' font-bold  text-center text-black'>
                    <h2 className='text-3xl'>Fill the <span className='text-[#4F4F4F] '>FORM</span> below</h2>
                    <h5 className='px-32 text-lg py-3 text-[#BDBDBD]'>You will be sent a confirmation mail when your reservation has been confirmed</h5>
                </div>
                <div className="w-[75%]  my-4 h-max pb-10 flex  items-center flex-col rounded-lg shadow-xl">

                    <form action="" method="post"  onSubmit={(e)=>{
                        e.preventDefault()
                        if(step==1){
                             setStep(2)
                        }
                        if(step == 2){
                            setStep(3)
                        }
                        }}>
                        {
                        step == 1 ? (
                        <div>
                            <div className='pt-14 flex justify-center items-center'>
                                <img src={IncompleteProgressBar} alt="" />
                            </div>
                            <div className='w-full'>
                                <Input label={"full name"} icon={UserIcon} type={"text"} placeholder={"Full Name"} defaultValue={fullName} onChange={e => setFullname(e.target.value)}/>
                            </div>
                            <div className='w-full'>
                                <Input label={"email address"} icon={ContactIcon} type={"email"} placeholder={"Email Address"} defaultValue={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className='w-full'>
                                <Input label={"phone number"} icon={PhoneIcon} type={"tel"} placeholder={"Phone Number"} defaultValue={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                            </div>

                            <div className='flex justify-center items-center '>
                                <button className='bg-[#4F4F4F] w-[20rem] py-3 text-white rounded-lg '>Next</button>
                            </div>
                        </div>
                        ) : step == 2 ? ( 
                         <div>
                            <div className='pt-14 flex justify-center items-center'>
                                <img src={CompleteProgressBar} alt="" />
                            </div>
                            <div className='w-full'>
                                <Input label={"Date"} icon={Calender} type={"month"} placeholder={"Date"} defaultValue={fullName} onChange={e => setFullname(e.target.value)}/>
                            </div>
                            <div className='w-full'>
                                <Input label={"Time"} icon={TimeIcon} type={"time"} placeholder={"Time"} defaultValue={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className='w-full'>
                                <Input label={"Purpose of visit"} icon={QueryIcon} type={"tel"} placeholder={"Purpose of visit"} defaultValue={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                            </div>

                            <div className='flex justify-center items-center '>
                                <button onClick={handleSubmit} className='bg-[#4F4F4F] w-[20rem] py-3 text-white rounded-lg '>submit</button>
                            </div>
                        </div> ) : setStep(1)}
                    </form>
                </div>
            </div>
            
        </div>
    </div>
  )
}
