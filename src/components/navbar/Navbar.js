import React, { useContext } from 'react'
import { useState,Fragment } from 'react'
import { Dialog ,Menu, Transition} from '@headlessui/react'
import { Link } from 'react-router-dom'
//import { Bars3Icon,BellIcon , XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Add To Cart', href: '/cart' },
    
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const user=JSON.parse(localStorage.getItem('user'));

    if (!user) {
      return (
        <div>
          <p>You need to log in to view this page.</p>
          <Link to="/login">Login</Link>
        </div>
      );
    }
    
    //console.log(user)
    const logout = () =>{
      localStorage.clear('user');
      window.location.href='/login'
    }
  return (
    
    <div>
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          {/* {user && (
            <a className="text-lg font-semibold leading-6 text-gray-900">
            {user.email}
          </a>
          )} */}
          {/* <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a> */}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">

          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-lg font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
          {user?.user?.email === 'janavimi28@gmail.com' ?
                    <Link to={'/admin'} className="text-lg font-semibold leading-6 text-gray-900">
                      Admin
                    </Link> : ""}
        </div>  
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <button
                type="button"
                className="relative rounded-full bg-white-800 p-1 text-black-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-black-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>

                {/* <BellIcon className="h-6 w-8" aria-hidden="true" /> */}
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    
                    <img
                      className="h-10 w-10 rounded-full"
                      src="data:image/png;base64,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"
                      alt=""
                    />
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      <Link to={'/profile'} className="bg-gray-100 block px-4 py-2 text-sm text-gray-700">
                      Your Profile
                      {/* <p
                        className='bg-gray-100 block px-4 py-2 text-sm text-gray-700'
                      >
                        Your Profile
                      </p> */}
                    
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {user?
                        <a
                        onClick={logout}
                          className='bg-gray-100 block px-4 py-2 text-sm text-gray-700'
                        >
                          Sign out
                        </a>
                      : ""}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

              {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
                 {user?.user?.email === 'janavimi28@gmail.com' ?
                    <Link to={'/admin'} className="text-lg font-semibold leading-6 text-gray-900">
                      Admin
                    </Link> : ""}
              </div>
              <div className="py-6">
              <button
                type="button"
                className="relative rounded-full bg-white-800 p-1 text-black-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-black-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>
                {/* <BellIcon className="h-6 w-8" aria-hidden="true" /> */}
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
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
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {user ?
                        <a
                        onClick={logout}
                          className='bg-gray-100 block px-4 py-2 text-sm text-gray-700'
                        >
                          Sign out
                        </a>
                      :""}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  </div>
  )
}

export default Navbar