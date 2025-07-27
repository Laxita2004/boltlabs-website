import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { adminAPI } from "../../services/api";
import ProfileHeader from "../ProfileHeader";
import OverviewTab from "../OverviewTab";

const MemberProfile = () => {
  const { member_id } = useParams();

  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await adminAPI.getMemberById(member_id);
        setMember(res.data);
      } catch (err) {
        console.error("Failed to fetch member:", err);
      }
    };

    fetchMember();
  }, [member_id]);

  if (!member) {
    return (
      <div className="text-center py-10 text-gray-400">Loading profile...</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <ProfileHeader member={member} />
      <OverviewTab
        about={member.description}
        skills={(Array.isArray(member.skillTags)
          ? member.skillTags
          : (member.skillTags ?? "").split(",")
        ).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
        languages={["English", "Hindi", "Marathi"]} // replace krna pdega schema seeee
      />
    </div>
  );
};

export default MemberProfile;
