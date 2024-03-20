import React, {useState} from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function Budget() {
  const [currency, setCurrency] = useState("$");
  return (
    <div className='flex justify-around'>
    <div className='bg-gray-300 rounded-lg px-4 py-3 '>
      <span className='mr-4'>
        Budget {currency}
        </span>
        <input type='text'/>
    </div>
    <div className='bg-gray-300 rounded-lg px-4 py-3 '>
    <span className='mr-4'>
        Remaining: {currency}
        </span>
        
    </div>
    <div className='bg-gray-300 rounded-lg px-4 py-3 '>
    <span className='mr-4'>
        Spent So Far : {currency}
        </span>
        
    </div>
    <div className='bg-gray-300 rounded-lg px-4 py-3 '>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          currency : {currency} 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
          
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button type='button'
                 
                  className={(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )} onClick={()=>{setCurrency("$")}}
                >
                  $ Dollar
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button type='button'
                 
                  className={(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )} onClick={()=>{setCurrency("£")}}
                >
                  £ Pound
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button type='button' 
                 
                  className={(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )} onClick={()=>{setCurrency("€")}}
                >
                  € Euro
                </button>
              )}
            </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                  type='button'
                    className={(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )} onClick={()=>{setCurrency("₹")}}
                  >
                    ₹ Rupee
                  </button>
                )}
              </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
    </div>
  )
}

export default Budget
