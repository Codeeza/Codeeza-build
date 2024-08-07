"use client";

import { FaLongArrowAltUp } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CountrySelect from "@/components/CountrySelect/CountrySelect";
import { useState } from "react";

const Register = () => {

const [company_name_OR_acount_num, setCompany_name_OR_acount_num ] = useState("")
const [vat_num, setVat_num ] = useState(0)
const [ck_num, setCk_num ] = useState("")
const [user_name, setUser_name ] = useState("")
const [user_pass, setUser_pass ] = useState("")
const [user_email, setUser_email] = useState("")
const [first_name, setFirst_name ] = useState("")
const [last_name, setLast_name ] = useState("")
const [phone_num, setPhone_num ] = useState("")
const [nature_of_business, setNature_of_business ] = useState("")
const [buying_from, setBuying_from ] = useState("")
const [specify_other_option, setSpecify_other_option ] = useState("")
const [e_links, setE_links ] = useState("")
const [pos_held_in_comp, setPos_held_in_comp ] = useState("")
const [location, setLocation ] = useState({
  street: "",
  suburb: "",
  city: "",
  zipcode: 0,
  country: 0
})
const [address_line_two, setAddress_line_two ] = useState("")
const [sale_rep_assisted, setSale_rep_assisted ] = useState("")
const [terms_agreement, setTerms_agreement ] = useState("")


  const handleFormSubmit = (e) => {
      e.preventDefault()
      console.log(company_name_OR_acount_num, vat_num, ck_num, user_name)
  }
  
  return (
    <div>
      <div className="p-12">
        <h1 className="text-slate-600 font-bold text-2xl">
          Our Brand is strictly distributed via authorised distributors namely:
        </h1>

        <ul className="list-disc ml-10 my-3">
          <li>Promotional Companies</li>
          <li>Advertising</li>
          <li>Branders and Event Companies</li>
          <li>Independent resellers</li>
        </ul>

        <h1 className="text-slate-600 font-bold text-xl">
          Should you fall into one of these categories and would like to
          register as a vendor.
        </h1>
      </div>
      <div className="bg-gray-50 pb-5">
        <Image
          src="/registration-form.png"
          alt="Registration Form"
          width={1827}
          height={243}
          priority
        />

        <h3 className="ml-10 my-5 text-slate-500 font-semibold text-xl">
          Existing customers of Captivity can also complete the form below to
          create a web account.
        </h3>

        <div className="text-sm border m-10 border-slate-500">
          <form
            onSubmit={handleFormSubmit}
            autoComplete="off"
            className="p-5 text-slate-500 font-bold space-y-5"
          >
            <div className="mt-5">
              <label>
                Company Name / Account Number{" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="companyNameOrAccountNumber"
                type="text"
                value={company_name_OR_acount_num}
                onChange={(e) => setCompany_name_OR_acount_num(e.target.value)}
                
              />
            </div>

            <div>
              <label className="">VAT Number</label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="vatNumber"
                type="number"
                value={vat_num}
                onChange={(e) => setVat_num(e.target.value)}
              />
            </div>

            <div>
              <label className="">CK Number</label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="vatNumber"
                type="text"
                value={ck_num}
                onChange={(e) => setCk_num(e.target.value)}
              />
            </div>

            <div>
              <label>
                Username
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="username"
                type="text"
                value={user_name}
                onChange={(e) => setUser_name(e.target.value)}
              />
              <label className="font-normal">Enter a Unique Username</label>
            </div>

            <div>
              <label>
                Password
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="password"
                type="password"
                value={user_pass}
                onChange={(e) => setUser_pass(e.target.value)}
              />
            </div>

            <div>
              <label>
                User Email
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="userEmail"
                type="email"
                
              />
            </div>

            <div>
              <label>
                First Name
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="firstName"
                type="text"
                
              />
            </div>

            <div>
              <label>
                Last Name
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="lastName"
                type="text"
                
              />
            </div>

            <div>
              <label>
                Phone Number
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="phoneNumber"
                type="tel"
                
              />
            </div>

            <div>
              <label>
                Nature of Business
                <span className="text-red-600">*</span>
              </label>
              <select
                id="natureOfBusiness"
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal"
                
              >
                <option value="promotional">Promotional</option>
                <option value="brandingAndPrint">Branding & Print</option>
                <option value="nonProfitOrg">Non Profit Organization</option>
                <option value="events">Events</option>
                <option value="tourism">Tourism</option>
                <option value="retail">Retail</option>
                <option value="clothingBrand">Clothing Brand</option>
                <option value="safetyPPE">Safety/PPE</option>
                <option value="uniformShop">Uniform Shop</option>
                <option value="advertMarketing">Advertising/Marketing</option>
                <option value="nob">Non of the above</option>
              </select>
            </div>

            <div>
              <label>
                Who are you currently buying from ?
                <span className="text-red-600">*</span>
              </label>
              <select
                id="whoYouBuyingFrom"
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal"
                
              >
                <option value="none">None</option>
                <option value="kevro">KEVRO</option>
                <option value="amrod">AMROD</option>
                <option value="vicbay">VICBAY</option>
                <option value="headwear24">HEADWEAR 24</option>
                <option value="massSupply">MASS SUPPLY</option>
                <option value="other">OTHER</option>
              </select>
            </div>

            <div>
              <p className="flex">
                <FaLongArrowAltUp className="mt-0.5" /> If "OTHER" then please
                specify
              </p>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="ifOther"
                type="text"
              />
            </div>

            <div>
              <label>
                Website or Social Media Page
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="webOrSocial"
                type="url"
                
                placeholder="www.yourcompany.com"
              />
              <label className="font-normal">
                Where would you be reselling our products?
              </label>
            </div>

            <div>
              <label>Position held in company</label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="posInComp"
                type="text"
              />
            </div>

            <div>
              <label>
                Street Address
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="address1"
                type="text"
                
                placeholder="House number and street name"
              />
            </div>

            <div>
              <label>Address line 2 (Optional)</label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="address2"
                type="text"
                placeholder="Apartment, suit, unit, etc."
              />
            </div>

            <div>
              <label>Suburb</label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="suburb"
                type="text"
              />
            </div>

            <div>
              <label>
                Town / City
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="townOrCity"
                type="text"
                
              />
            </div>

            <div>
              <label>
                Postcode / ZIP
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="postalCode"
                type="text"
                
              />
            </div>

            <div>
              <label>
                Country
                <span className="text-red-600">*</span>
              </label>
              <CountrySelect />
            </div>

            <div>
              <label>
                The sales rep. that helped you?
                <span className="text-red-600">*</span>
              </label>
              <select
                id="salesRep"
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal"
                
              >
                <option value="noOneYet">No one yet</option>
                <option value="bonitaCPT">Bonita - Cape Town</option>
                <option value="leroyCPT">Leroy - Cape Town</option>
                <option value="nickyJHB">Nicky - Johannesburg</option>
                <option value="pearlJHB">Pearl - Johannesburg</option>
              </select>
            </div>

            <div className="flex">
              <div className="mt-0.5 mr-0.5">
                <input type="checkbox" id="agreeToTandCs" />
              </div>
              <label>
                I agree to the Terms & Conditions
                <span className="text-red-600">*</span>
              </label>
            </div>

            <Link href="/terms-conditions" className="hover:text-red-700">
              <p className="font-normal text-red-600 py-1">
                Terms & Conditions
              </p>
            </Link>

            <div className="flex justify-end">
              <button type="submit" className="bg-blue-700 py-3 px-5 text-white font-normal hover:bg-red-600 rounded-sm">
                REGISTER
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-center my-7">
          <Link href="/popi-act-terms">
            <button className=" mt-10 bg-slate-500 text-white py-2 px-4 font-normal rounded-sm hover:bg-slate-700">
              View POPI Act Disclaimer
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white p-12 mb-5 border-t-8 border-slate-200">
        <h1 className="text-slate-600 font-bold text-3xl">NOT A RESELLER?</h1>
        <p className="my-5 text-slate-500 font-normal text-xl">
          Email us on{" "}
          <a
            href="mailto:info@captivity.co.za"
            className="text-red-500 hover:text-red-700"
          >
            info@captivity.co.za
          </a>{" "}
          and we will be sure to direct you to one of our Registered resellers.
        </p>
      </div>
    </div>
  );
};

export default Register;
