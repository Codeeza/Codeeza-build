"use client";
import { useEffect, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { countries } from "@/lib/CountrySelect";


const Register = () => {
    const [fields, setFields] = useState({
      company_name_OR_acount_num: "companyName",
      vat_num: 127478939237,
      ck_num: "284904/4990884/3939",
      user_name: "UserName",
      user_pass: "UserPassword",
      user_email: "jt@email.com",
      first_name: "FirstName",
      last_name: "LastName",
      phone_num: "PhoneNumber",
      nature_of_business: "buyer",
      buying_from: "seller",
      specify_other_option: "",
      e_links: "https://github.com/Codeeza/Codeeza-build.git",
      pos_held_in_comp: "Role at Company",
      location: {
        street: "street 1",
        street_line_two: "street 2",
        suburb: "suburb",
        city: "city",
        zipcode: 7700,
        country: "Country",
      },
      sale_rep_assisted: "Bonita  - Cape Town",
      terms_agreement : true
    })

   const FormAction = async(formData) => {
      const res = await fetch("http://localhost:3000/api/register",  {
          method: "POST",
          body: formData
      }  
    )
    const data = await res.json()
    console.log(data)
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
              action={FormAction}
              className="p-5 text-slate-500 font-bold space-y-5"
          >
            {/* Company Name Input */}
            <div className="mt-5">
              <label>
                Company Name / Account Number{" "}
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="companyNameOrAccountNumber"
                name="company_name_OR_acount_num"
                type="text"
                value={fields.company_name_OR_acount_num}
                onChange={(e) => setFields({...fields, company_name_OR_acount_num:e.target.value})}
              />
            </div>

            {/* vat number Input */}
            <div>
              <label className="">VAT Number</label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="vatNumber"
                type="number"
                name="vat_num"
                value={fields.vat_num}
                onChange={(e) => setFields({...fields, vat_num:e.target.value})}
              />
            </div>

            {/* ck number Name Input */}
            <div>
              <label className="">CK Number</label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="vatNumber"
                type="text"
                name="ck_num"
                value={fields.ck_num}
                onChange={(e) => setFields({...fields, ck_num:e.target.value})}
              />
            </div>
            
            {/* Username Input */}
            <div>
              <label>
                Username
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="username"
                type="text"
                name="user_name"
                value={fields.user_name}
                onChange={(e) => setFields({...fields, user_name:e.target.value})}
              />
              <label className="font-normal">Enter a Unique Username</label>
            </div>

            {/* Password Input */}
            <div>
              <label>
                Password
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="password"
                type="password"
                name="user_pass"
                value={fields.user_pass}
                onChange={(e) => setFields({...fields, user_pass:e.target.value})}
              />
            </div>

            {/* User Email Input */}
            <div>
              <label>
                User Email
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="userEmail"
                type="email"
                name="user_email"
                value={fields.user_email}
                onChange={(e) => setFields({...fields, user_email:e.target.value})}
              />
            </div>

            {/* First Name Input */}
            <div>
              <label>
                First Name
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="firstName"
                type="text"
                name="first_name"
                value={fields.first_name}
                onChange={(e) => setFields({...fields, first_name:e.target.value})}
              />
            </div>

            {/* Last Name Input */}
            <div>
              <label>
                Last Name
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="lastName"
                type="text"
                name="last_name"
                value={fields.last_name}
                onChange={(e) => setFields({...fields, last_name:e.target.value})}
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label>
                Phone Number
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="phoneNumber"
                type="tel"
                name="phone_num"
                value={fields.phone_num}
                onChange={(e) => setFields({...fields, phone_num:e.target.value})}
              />
            </div>

            {/* Nature of Business Option */}
            <div>
              <label>
                Nature of Business
                <span className="text-red-600">*</span>
              </label>
              <select
                id="natureOfBusiness"
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal"
                name="nature_of_business"
                value={fields.nature_of_business}
                onChange={(e) => setFields({...fields, nature_of_business:e.target.value})}
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

            {/* Supplier Option*/}
            <div>
              <label>
                Who are you currently buying from ?
                <span className="text-red-600">*</span>
              </label>
              <select
                id="whoYouBuyingFrom"
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal"
                name="buying_from"
                value={fields.buying_from}
                onChange={(e) => setFields({...fields, buying_from: e.target.value})}
                
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

            {/*Explain if other supplier option input */}
            <div>
              <p className="flex">
                <FaLongArrowAltUp className="mt-0.5" /> If "OTHER" then please
                specify
              </p>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="ifOther"
                type="text"
                name="specify_other_option"
                value={fields.specify_other_option}
                onChange={(e) => setFields({...fields, specify_other_option :e.target.value})}
              />
            </div>

            {/* Social Url Input */}
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
                name="e_links"
                value={fields.e_links}
                onChange={(e) => setFields({...fields, e_links:e.target.value})}
              />
              <label className="font-normal">
                Where would you be reselling our products?
              </label>
            </div>

            {/* Role at company Input */}
            <div>
              <label>Position held in company</label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="posInComp"
                type="text"
                name="pos_held_in_comp"
                value={fields.pos_held_in_comp}
                onChange={(e) => setFields({...fields, pos_held_in_comp:e.target.value})}
              />
            </div>

            {/* Location/Address Inputs */}

              {/*Address 1 Input */}
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
                name="street"
                value={fields.location.street}
                onChange={(e) => setFields({...fields.location, street: e.target.value})}
              />
            </div>

            {/* Address 2 Input */}
            <div>
              <label>Address line 2 (Optional)</label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="address2"
                type="text"
                name="street_line_two"
                placeholder="Apartment, suit, unit, etc."
                value={fields.location.street_line_two}
                onChange={(e) => setFields({...fields.location, street_line_two: e.target.value})}
              />
            </div>

            {/* Suburb Input */}
            <div>
              <label>Suburb</label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="suburb"
                type="text"
                name="suburb"
                value={fields.location.suburb}
                onChange={(e) => setFields({...fields.location, suburb: e.target.value})}
              />
            </div>

            {/* City Input */}
            <div>
              <label>
                Town / City
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="townOrCity"
                type="text"
                name="city"
                value={fields.location.city}
                onChange={(e) => setFields({...fields.location, city: e.target.value})}
              />
            </div>

            {/* ZipCode Input */}
            <div>
              <label>
                Postcode / ZIP
                <span className="text-red-600">*</span>
              </label>
              <input
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border focus:outline-red-500"
                id="postalCode"
                type="text"
                name="zipcode"
                value={fields.location.zipcode}
                onChange={(e) => setFields({...fields.location, zipcode: e.target.value})}
              />
            </div>

            {/* Country Input */}
            <div>
              <label>
                Country
                <span className="text-red-600">*</span>
              </label>
              <select
                id="salesRep"
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal"
                name="country"
                value={fields.location.country}
                onChange={(e) => setFields({...fields.location, country: e.target.value})}
              >
                  {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
            ))}
              </select>
            </div>

            {/* Sales Rep assisted Option */}
            <div>
              <label>
                The sales rep. that helped you?
                <span className="text-red-600">*</span>
              </label>
              <select
                id="salesRep"
                className="bg-gray-50 w-full px-3 py-2 my-2 text-sm text-gray-700 border font-normal"
                name="sale_rep_assisted"
                value={fields.sale_rep_assisted}
                onChange={(e) => setFields({...fields, sale_rep_assisted: e.target.value})}
                
              >
                <option value="noOneYet">No one yet</option>
                <option value="bonitaCPT">Bonita - Cape Town</option>
                <option value="leroyCPT">Leroy - Cape Town</option>
                <option value="nickyJHB">Nicky - Johannesburg</option>
                <option value="pearlJHB">Pearl - Johannesburg</option>
              </select>
            </div>

            {/* Terms agreement Input */}
            <div className="flex">
              <div className="mt-0.5 mr-0.5">
                <input type="checkbox" id="agreeToTandCs"
                  name="terms_agreement"
                  value={fields.terms_agreement}
                  onChange={(e) => setFields({...fields, terms_agreement: e.target.value})}
                  />
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

            {/* Submit Button */}
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
