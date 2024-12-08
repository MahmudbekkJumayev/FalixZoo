import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Orders from "./Order"; // Assuming Orders is the "Buyurtmalar" section
import { Account } from "./Account"; // Correct import for named export

const sections = {
  Buyurtmalar: { name: "Buyurtmalar" },
  Malumotlar: { name: "Ma'lumotlar" },
};

const Profile = () => {
  const { sectionName } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(
    sectionName || "Buyurtmalar"
  );

  useEffect(() => {
    if (sections[sectionName]) {
      setActiveSection(sectionName);
    } else {
      navigate("/profile/Buyurtmalar");
    }
  }, [sectionName, navigate]);

  return (
    <div className="container flex flex-col">
      <div className="flex justify-start items-center gap-2 mb-4">
        <span className="text-[22px] font-medium">Profil /</span>
        <p>{sections[activeSection]?.name || "Bo'lim mavjud emas"}</p>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col w-[300px] rounded-lg">
          {Object.keys(sections).map((key) => (
            <span
              key={key}
              className={`px-8 py-3 rounded-lg font-medium text-gray-600 cursor-pointer 
                ${
                  activeSection === key
                    ? "bg-blue-400 text-white font-medium"
                    : "hover:bg-gray-200 text-black"
                }`}
              onClick={() => navigate(`/profile/${key}`)}
            >
              {sections[key].name}
            </span>
          ))}
        </div>

        <div className="flex-1">
          {activeSection === "Buyurtmalar" && <Orders />}
          {activeSection === "Malumotlar" && <Account />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
