import Image from 'next/image'
import Link from 'next/link'

 const HowToRegister = () => {
  return (
    <div>
      <section className="bg-black text-center text-white py-16">
        <h1 className="text-2xl font-bold">HOW TO REGISTER?</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Captivity is strictly distributed via authorised distributors namely: promotional companies, advertising and event companies as well as independent resellers.
          We have a large offering of headwear and apparel and are distributors of a large selection of promotional items.
          Should you fall into either of these categories and would like to register as a vendor?
        </p>
        <button className="mt-6 bg-red-600 text-white py-2 px-4 rounded">
          Register Here
        </button>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <Link href="https://fwrd.co.za/">
              <Image
                src="/fwrd.png"
                alt="Person holding a phone showing the FWRD website"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </Link>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
            <h2 className="text-red-600 text-2xl font-bold">VISIT THE FWRD WEBSITE</h2>
            <p className="mt-4 text-gray-600">
              The FWRD Brand is distributed via promotional companies, advertising, event companies and resellers ONLY.
            </p>
            <button className="mt-6 bg-red-600 text-white py-2 px-4 rounded">
              Visit Site
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowToRegister;