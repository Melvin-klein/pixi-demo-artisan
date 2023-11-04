"use client"

import { Fragment, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    InboxIcon,
    TrashIcon,
    UsersIcon,
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
    WrenchIcon,
    ArrowPathIcon,
    TruckIcon,
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
    ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Services', href: '#services' },
  { name: 'Équipe', href: '#equipe' },
  { name: 'Contact', href: '#contact' },
]

const footerNavigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

function addMonths(date, months) {
    var d = date.getDate();
    date.setMonth(date.getMonth() + +months);
    if (date.getDate() != d) {
      date.setDate(0);
    }
    return date;
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const features = [
  {
    name: 'Conception sur mesure',
    description:
      'Nous proposons un service de conception sur mesure vous permettant de travailler en étroite collaboration avec nos artisans ferronniers pour créer des pièces métalliques uniques.',
    href: '#',
    icon: WrenchIcon,
  },
  {
    name: 'Restauration et réparation',
    description:
      'En plus de la création de nouvelles pièces métalliques, nous offront un service de restauration et de réparation pour les éléments anciens ou endommagés.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Installation professionnelle',
    description:
      'Nous proposons également un service d\'installation professionnelle pour assurer que les pièces métalliques sont correctement montées et intégrées dans leur environnement.',
    href: '#',
    icon: TruckIcon,
  },
]

const people = [{
    name: 'Fabien Walton',
    role: 'Ferronnier',
    imageUrl:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Jean Dupont',
    role: 'Soudeur',
    imageUrl:
      'https://images.unsplash.com/photo-1455165814004-1126a7199f9b?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Lucas Hurve',
    role: 'Dessinateur-projeteur',
    imageUrl:
      'https://images.unsplash.com/photo-1624382085368-791f6bd1b197?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showWarning, setShowWarning] = useState(true)
  const [showModal, setShowModal] = useState(false)

  return (
      <div>
          <Transition.Root show={showModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setShowModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                        <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Ce site est une démonstration
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Vous êtes sur une démonstration de Pixilab, aucune action n'est réellement executée.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                        onClick={() => setShowModal(false)}
                      >
                        J'ai compris
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
          {showWarning && <div className="pointer-events-none fixed inset-x-0 z-50 top-20 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
            <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-yellow-500 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
              <p className="text-sm leading-6 text-white">
                <a href="#">
                  <strong className="font-semibold">Attention</strong>
                  <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  Ce site est une démonstration, la ferronnerie présentée n'existe pas.
                </a>
              </p>
              <button type="button" className="-m-1.5 flex-none p-1.5" onClick={() => setShowWarning(false)}>
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>}
          <div className="bg-gray-900">
          <header className="absolute inset-x-0 top-0 z-40">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1">
                <a href="#" className="flex items-center -m-1.5 p-1.5">
                  <span className="sr-only">Demo Artisan</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                  <span className="ml-2 font-bold text-lead">Demo Artisan</span>
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">{/* To center navigation because of justify between */}</div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="flex items-center -m-1.5 p-1.5">
                      <span className="sr-only">Demo Artisan</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                      </svg>
                      <span className="ml-2 font-bold text-lead">Demo Artisan</span>
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/25">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </header>

          <div id="accueil" className="relative isolate overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1511306162219-1c5a469ab86c?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="p-6 lg:px-8 max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-white/10 hover:ring-white/20">
                  Prochaine livraison le {(addMonths(new Date().addDays(4), 1)).toLocaleDateString('fr-FR')}.
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Votre ferronnier à Bordeaux
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-200">
                  Nous créons des œuvres d'art métalliques sur mesure, alliant élégance et fonctionnalité pour sublimer votre environnement architectural et intérieur.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-x-6">
                  <a
                    href="#contact"
                    className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    Demander une prestation
                  </a>
                  <a href="#services" className="mt-6 sm:mt-0 text-sm font-semibold leading-6 text-white">
                    Voir les services <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="services" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Nos services
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                La Ferronnerie Bordelaise vous propose des prestations de grande qualité au service de vos idées les plus folles.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-yellow-600">Notre mission</p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">La Ferronnerie Bordelaise</h1>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                    eget aliquam. Quisque id at vitae feugiat egestas.
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                src="https://images.unsplash.com/photo-1473621038790-b778b4750efe?auto=format&fit=crop&q=80&w=2672&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <p>
                      Plongez dans l'univers envoûtant de la ferronnerie d'exception, où la créativité se marie harmonieusement avec la maîtrise des métaux. Notre ferronnerie est bien plus qu'un simple atelier ; c'est le lieu où naissent des pièces de métal uniques qui transcendent le simple aspect utilitaire pour devenir de véritables œuvres d'art.<br />
                      <br />
                      Imaginez l'élégance intemporelle d'une porte d'entrée ornée de motifs complexes, accueillant chaleureusement vos invités tout en ajoutant une touche de majesté à votre maison. Ou bien, envisagez une balustrade artistique qui orne votre escalier, alliant fonctionnalité et esthétique, chaque courbe et chaque détail révélant le talent inégalé de nos artisans ferronniers.<br />
                      <br />
                      Chez nous, le métal est bien plus qu'un simple matériau ; c'est le canevas sur lequel nos artisans expriment leur créativité et leur passion. Chaque pièce est conçue sur mesure pour répondre à vos besoins et refléter votre style personnel. Vous pouvez participer au processus de création, en discutant de vos idées et en collaborant avec nos experts pour concevoir des pièces métalliques qui dépassent vos attentes.<br />
                      <br />
                      La ferronnerie est une forme d'art qui a résisté à l'épreuve du temps, et nous nous efforçons de maintenir cette tradition vivante en combinant des techniques artisanales séculaires avec des technologies modernes pour garantir la qualité, la durabilité et la beauté de nos créations.<br />
                      <br />
                      Que vous souhaitiez donner vie à une idée audacieuse ou restaurer une pièce métallique ancienne, notre équipe dévouée est prête à relever tous les défis. Transformez votre espace en un véritable musée de métal, où chaque pièce raconte une histoire unique. Faites de votre environnement un chef-d'œuvre en métal grâce à notre ferronnerie exceptionnelle. Votre vision, notre métal, une harmonie parfaite qui élève votre espace à un tout autre niveau.<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="equipe" className="bg-white pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Notre équipe</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Notre équipe de ferronniers est bien plus qu'un simple groupe de professionnels métallurgistes. Ce sont des artisans passionnés, des créateurs de rêves en métal, et des gardiens de la tradition de la ferronnerie.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="contact" className="relative isolate bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 py-24 sm:py-32 lg:static lg:px-8">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                  <svg
                    className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                        width={200}
                        height={200}
                        x="100%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                      >
                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                    <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                      <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Formulaire de contact</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Vous avez des questions, des besoins ou des idées dont vous aimeriez discuter ? Notre équipe expérimentée est prête à répondre à vos besoins et à concrétiser vos projets.
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      3 rue des Lilas
                      <br />
                      Bordeaux, 33000
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                        05 00 00 00 00
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a className="hover:text-gray-900" href="mailto:hello@example.com">
                        exemple@example.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <form action="#" method="POST" className="px-6 py-24 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Prénom
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Nom de famille
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                      Numéro de téléphone
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                    onClick={() => setShowModal(true)}
                  >
                    Envoyer mon message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              {footerNavigation.map((item) => (
                <a key={item.name} onClick={() => setShowModal(true)} className="text-gray-400 hover:text-gray-500 cursor-pointer">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-xs leading-5 text-gray-500">
                &copy; {(new Date()).getFullYear()} <a href="https://www.pixilab.fr" className="text-yellow-500 underline">Pixilab</a>. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
    </div>
  )
}
