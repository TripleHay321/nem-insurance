import { useState, Fragment } from 'react'
import { 
    CloudIcon,
    IncompleteProgressBar,
    CompleteProgressBar, 
    Calender, 
    UserIcon, 
    ContactIcon, 
    PhoneIcon,
    TimeIcon,
    QueryIcon

} from '../../assets'
import Input from '../../components/atoms/input'
import { Dialog, Transition } from '@headlessui/react'

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

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const handleSubmit = () => {
        openModal()
                        
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>

        <div className='animated-div flex gap-3 py-9 pl-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div>
                <img src={ CloudIcon } alt="cloud icon" className='w-10'/>
            </div>
            <div>
                <h2 className='font-bold text-[#0F4264] text-xl font-quicksand'>NEM Insurance Plc</h2>
            </div>
        </div>
        <div className='flex justify-center items-center w-full pt-32'>
            <div className='w-1/2 flex flex-col justify-center items-center font-dmSans'>
                <div className=' font-bold  text-center text-black'>
                    <h2 className='text-3xl'>Fill the <span className='text-[#4F4F4F] '>FORM</span> below</h2>
                    <h5 className='px-32 text-lg py-3 text-[#BDBDBD]'>You will be sent a confirmation mail when your reservation has been confirmed</h5>
                </div>
                <div className="w-[75%]  my-4 h-[40rem] flex  items-center flex-col rounded-lg shadow-xl">

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
                        </div> ) : null}
                    </form>
                </div>
            </div>
            
        </div>
    </div>
  )
}
