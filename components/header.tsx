'use client'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogoClick = () => {
    scrollToSection('hero-section')
  }

  const handleNavClick = (action: string) => {
    if (action === 'home') {
      scrollToSection('hero-section')
    } else if (action === 'teach') {
      scrollToSection('teach-section')
    } else if (action === 'about') {
      router.push('/about')
    }
  }

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-full z-50 bg-gray-800/90 backdrop-blur text-lg after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-8 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-8 group-data-open:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <button
              onClick={handleLogoClick}
              className="flex shrink-0 items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                alt="IngredientInsight Logo"
                src="/Logo.png"
                className="h-16 w-auto sm:h-20 md:h-24 lg:h-28"
              />
            </button>

            <div className="hidden sm:ml-8 sm:block">
              <div className="flex space-x-6">
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-gray-300 hover:bg-white/5 hover:text-white rounded-md px-5 py-3 text-base font-semibold transition-all"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('teach')}
                  className="text-gray-300 hover:bg-white/5 hover:text-white rounded-md px-5 py-3 text-base font-semibold transition-all"
                >
                  Teach Section
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-gray-300 hover:bg-white/5 hover:text-white rounded-md px-5 py-3 text-base font-semibold transition-all"
                >
                  About Us
                </button>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-3 sm:static sm:inset-auto sm:ml-8 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-2 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 transition-all"
            >
              <span className="absolute -inset-1.5" />
              <BellIcon aria-hidden="true" className="size-8" />
            </button>

            <Menu as="div" className="relative ml-4">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="absolute -inset-1.5" />
                <img
                  alt="User profile"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-10 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-5 py-3 text-base text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden">Your profile</a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-5 py-3 text-base text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden">Settings</a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-5 py-3 text-base text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden">Sign out</a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-3 pt-3 pb-4">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-4 py-3 text-lg font-semibold transition-all"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('teach')}
            className="w-full text-left text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-4 py-3 text-lg font-semibold transition-all"
          >
            Teach Section
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-4 py-3 text-lg font-semibold transition-all"
          >
            About Us
          </button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

