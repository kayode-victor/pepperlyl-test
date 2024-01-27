"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import countries from "./Countries";
import jobs from "./Jobs";

interface FormProps {
  email: string;
  name: string;
  age: string;
  country: string;
  job: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormProps>({
    email: "",
    name: "",
    age: "",
    country: "",
    job: "",
  });

  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<string[]>([]); // State for filtered job options
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "country") {
      const filtered = countries.filter((country) =>
        country.toLowerCase().includes(value.toLowerCase().slice(0, 3))
      );
      setFilteredCountries(filtered.slice(0, 5));
    } else if (name === "job") {
      const filtered = jobs.filter((job) =>
        job.toLowerCase().includes(value.toLowerCase().slice(0, 3))
      );
      setFilteredJobs(filtered.slice(0, 5));
    }
  };

  const handleCountryClick = (selectedCountry: string) => {
    setFormData({
      ...formData,
      country: selectedCountry,
    });

    setFilteredCountries([]);
  };

  const handleJobClick = (selectedJob: string) => {
    setFormData({
      ...formData,
      job: selectedJob,
    });

    setFilteredJobs([]);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setFilteredCountries([]);
      setFilteredJobs([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <div>
      <div className="flex items-center justify-center pb-4">
        <div className="text-white text-lg lg:text-2xl font-bold">
          Join our waiting list
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-4 mb-2">
          <div className="w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="h-12 rounded-lg border border-white border-opacity-50 justify-start px-5  items-center flex"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="text-white text-opacity-70 text-lg font-medium bg-transparent border-none focus:outline-none w-full"
                required
              />
            </motion.div>
          </div>
          <div className="w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="h-12 rounded-lg border border-white border-opacity-50 justify-start px-5 items-center flex"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name*"
                className="text-white text-opacity-70 text-lg font-medium bg-transparent border-none focus:outline-none w-full"
                required
              />
            </motion.div>
          </div>
        </div>
        <div className="flex gap-4 mb-2">
          <div className="w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="h-12 rounded-lg border border-white border-opacity-50 justify-start px-5 lg:mb-0 mb-2 items-center flex"
            >
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age*"
                min="16"
                max="75"
                className="text-white w-full text-opacity-70 text-lg font-medium bg-transparent border-none focus:outline-none"
                required
              />
            </motion.div>
          </div>
          <div className="w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="h-12 rounded-lg border border-white bg-transparent justify-start px-5 items-center flex relative"
            >
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country*"
                className="text-white text-opacity-70 text-lg font-medium bg-transparent border-none focus:outline-none w-full"
                required
              />
              {filteredCountries.length > 0 && (
                <div
                  className="absolute top-12 left-0 right-0 bg-white rounded-b-lg z-10 overflow-y-auto max-h-20"
                  ref={dropdownRef}
                >
                  {filteredCountries.map((country, index) => (
                    <div
                      key={index}
                      className="px-3 lg:py-2 cursor-pointer hover:bg-opacity-40"
                      onClick={() => handleCountryClick(country)}
                    >
                      {country}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="h-12 rounded-lg border border-white border-opacity-50 justify-start px-5 items-center flex relative"
          >
            <input
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              placeholder="What best describes you?"
              className="text-white text-opacity-70 text-lg font-medium bg-transparent border-none focus:outline-none w-full"
              required
            />
            {filteredJobs.length > 0 && (
              <div
                className="absolute top-full left-0 right-0 bg-white rounded-b-lg z-10 overflow-y-auto max-h-20 border border-white border-opacity-50"
                ref={dropdownRef}
              >
                {filteredJobs.map((job, index) => (
                  <div
                    key={index}
                    className="px-3 lg:py-2 cursor-pointer hover:bg-opacity-40"
                    onClick={() => handleJobClick(job)}
                  >
                    {job}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
        <div className="flex p-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-32 h-12 text-emerald-800 rounded-lg bg-white font-semibold"
          >
            Submit
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Form;
