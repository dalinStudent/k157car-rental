"use client";

import { useState } from "react";

const UserForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    adress: "",
    idCardImage: null as File | null,
    licenseImage: null as File | null,
  });

  const [idPreview, setIdPreview] = useState<string | null>(null);
  const [licensePreview, setLicensePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "idCardImage" | "licenseImage"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm((prev) => ({ ...prev, [field]: file }));
      const previewUrl = URL.createObjectURL(file);
      if (field === "idCardImage") setIdPreview(previewUrl);
      else setLicensePreview(previewUrl);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", form);
    // Here you'd send `form` to your API (e.g., via fetch or axios)
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 p-6 rounded-xl border shadow bg-white/20 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        Identity Verification
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="p-3 border rounded-md w-full focus:outline-none focus:ring"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="p-3 border rounded-md w-full focus:outline-none focus:ring"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="p-3 border rounded-md w-full focus:outline-none focus:ring"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-3 border rounded-md w-full focus:outline-none focus:ring"
        />
        <input
          name="address"
          value={form.adress}
          onChange={handleChange}
          placeholder="Address"
          className="p-3 border rounded-md w-full focus:outline-none focus:ring"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-medium text-sm">
            Upload ID Card
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, "idCardImage")}
            className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-100 file:text-blue-800 hover:file:bg-blue-200"
          />
          {idPreview && (
            <img
              src={idPreview}
              alt="ID Card Preview"
              className="mt-2 rounded-md max-h-52 w-full object-cover"
            />
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium text-sm">
            Upload Driver License
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, "licenseImage")}
            className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-green-100 file:text-green-800 hover:file:bg-green-200"
          />
          {licensePreview && (
            <img
              src={licensePreview}
              alt="Driver License Preview"
              className="mt-2 rounded-md max-h-52 w-full object-cover"
            />
          )}
        </div>
      </div>

      <div className="pt-4">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition"
        >
          Submit Verification
        </button>
      </div>
    </div>
  );
};

export default UserForm;




// 'use client'

// import { useState } from 'react'

// export default function VerificationCard() {
//   const [form, setForm] = useState({
//     fullName: '',
//     phone: '',
//     idCardImage: null as File | null,
//     licenseImage: null as File | null,
//   })

//   const [idPreview, setIdPreview] = useState<string | null>(null)
//   const [licensePreview, setLicensePreview] = useState<string | null>(null)
//   const [isExtracting, setIsExtracting] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setForm((prev) => ({ ...prev, [name]: value }))
//   }

//   const simulateExtractedData = () => {
//     // Simulated OCR result
//     return {
//       fullName: 'Tang Seakmeng',
//       phone: '012345678',
//     }
//   }

//   const handleImageChange = async (
//     e: React.ChangeEvent<HTMLInputElement>,
//     field: 'idCardImage' | 'licenseImage'
//   ) => {
//     const file = e.target.files?.[0]
//     if (!file) return

//     // Preview
//     const previewUrl = URL.createObjectURL(file)
//     if (field === 'idCardImage') setIdPreview(previewUrl)
//     if (field === 'licenseImage') setLicensePreview(previewUrl)

//     // Save image file
//     setForm((prev) => ({ ...prev, [field]: file }))

//     // Simulate OCR extract only for ID card
//     if (field === 'idCardImage') {
//       setIsExtracting(true)
//       setTimeout(() => {
//         const extracted = simulateExtractedData()
//         setForm((prev) => ({
//           ...prev,
//           fullName: extracted.fullName,
//           phone: extracted.phone,
//         }))
//         setIsExtracting(false)
//       }, 1500) // simulate 1.5s "processing"
//     }
//   }

//   const handleSubmit = () => {
//     console.log('Submitted form:', form)
//   }

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow space-y-6 text-black">
//       <h2 className="text-2xl font-bold">Identity Verification</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <input
//           name="fullName"
//           value={form.fullName}
//           onChange={handleChange}
//           placeholder="Full Name"
//           className="p-3 border rounded-md w-full focus:outline-none focus:ring"
//         />
//         <input
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//           placeholder="Phone Number"
//           className="p-3 border rounded-md w-full focus:outline-none focus:ring"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block mb-1 font-medium text-sm">Upload ID Card</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => handleImageChange(e, 'idCardImage')}
//             className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-100 file:text-blue-800 hover:file:bg-blue-200"
//           />
//           {idPreview && (
//             <img
//               src={idPreview}
//               alt="ID Card Preview"
//               className="mt-2 rounded-md max-h-52 w-full object-cover"
//             />
//           )}
//           {isExtracting && <p className="text-sm text-gray-500 mt-2">Extracting data from ID...</p>}
//         </div>

//         <div>
//           <label className="block mb-1 font-medium text-sm">Upload Driver License</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => handleImageChange(e, 'licenseImage')}
//             className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-green-100 file:text-green-800 hover:file:bg-green-200"
//           />
//           {licensePreview && (
//             <img
//               src={licensePreview}
//               alt="Driver License Preview"
//               className="mt-2 rounded-md max-h-52 w-full object-cover"
//             />
//           )}
//         </div>
//       </div>

//       <div className="pt-4">
//         <button
//           onClick={handleSubmit}
//           className="px-6 py-3 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition"
//         >
//           Submit Verification
//         </button>
//       </div>
//     </div>
//   )
// }
