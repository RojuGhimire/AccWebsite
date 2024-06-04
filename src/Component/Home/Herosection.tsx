export default function Hero() {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
          <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold mb-4">NEXUS YOUR</h1>
              <h2 className="text-4xl font-bold text-teal-500 mb-4">TRUSTED PARTNER IN</h2>
              <h3 className="text-4xl font-bold mb-4">REMOTE BOOKKEEPING</h3>
              <p className="text-lg text-yellow-500 mb-8">Ready to streamline your bookkeeping? Book a consultation today!</p>
              <button className="bg-teal-500 text-white py-2 px-6 rounded-lg">Book Now</button>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img src="" alt="Remote Bookkeeping Illustration" className="w-full h-auto">
            </div>
          </div>
        </div>
    )
}