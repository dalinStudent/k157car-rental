"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const UserForm = () => {
  const t = useTranslations("booking");
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
    
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 p-6 rounded-xl border shadow bg-white/20 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-gray-800">
        {t('identity_verification')}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder={t('first_name')}
          className="p-3 border rounded-md w-full focus:outline-none focus:ring"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder={t('last_name')}
          className="p-3 border rounded-md w-full focus:outline-none focus:ring"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder={t('phone_number')}
          className="p-3 border rounded-md w-full focus:outline-none focus:ring"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={t('email')}
          className="p-3 border rounded-md w-full focus:outline-none focus:ring"
        />
        <input
          name="address"
          value={form.adress}
          onChange={handleChange}
          placeholder={t('address')}
          className="p-3 border rounded-md w-full focus:outline-none focus:ring"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-medium text-sm">
            {t('upload_id')}
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
            {t('upload_driver')}
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
        <button className="buttons text-sm">
          <span className="hidden sm:block">{t("button.submit")}</span>
          <Image
            src="/svg/icons/send.svg"
            alt="booked icon"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default UserForm;