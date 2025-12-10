import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function NewsletterSection() {
    return (
        <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-4xl font-semibold tracking-tight text-gray-900">Subscribe to our newsletter</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                            dolore.
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                autoComplete="email"
                                className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <dt className="flex flex-col items-start">
                                <span className="rounded-md bg-white/50 p-2 ring-1 ring-gray-200">
                                    <CalendarDaysIcon aria-hidden="true" className="size-6 text-gray-600" />
                                </span>
                                <span className="mt-4 text-base font-semibold text-gray-900">Weekly articles</span>
                            </dt>
                            <dd className="mt-2 text-base/7 text-gray-600">
                                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <dt className="flex flex-col items-start">
                                <span className="rounded-md bg-white/50 p-2 ring-1 ring-gray-200">
                                    <HandRaisedIcon aria-hidden="true" className="size-6 text-gray-600" />
                                </span>
                                <span className="mt-4 text-base font-semibold text-gray-900">No spam</span>
                            </dt>
                            <dd className="mt-2 text-base/7 text-gray-600">
                                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
                <div className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 [clip-path:polygon(74.1%_44.1%,100%_61.6%,97.5%_26.9%,85.5%_0.1%,80.7%_2%,72.5%_32.5%,60.2%_62.4%,52.4%_68.1%,47.5%_58.3%,45.2%_34.5%,27.5%_76.7%,0.1%_64.9%,17.9%_100%,27.6%_76.8%,76.1%_97.7%,74.1%_44.1%)]" />
            </div>
        </div>
    )
}
