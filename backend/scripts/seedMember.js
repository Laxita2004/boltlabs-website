import dotenv from "dotenv";
dotenv.config();

import { supabase } from "../config/supabaseClient.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const seedMember = async () => {
  try {
    const email = "member@example.com";

    // Check if already exists
    const { data: existing, error: findError } = await supabase
      .from("Member")
      .select("*")
      .eq("email", email)
      .maybeSingle();

    if (findError) throw findError;
    if (existing) {
      console.log("⚠️ Member already exists.");
      return;
    }

    const hashed = await bcrypt.hash("member123", 10);

    const { data, error } = await supabase
      .from("Member")
      .insert([
        {
          member_id: crypto.randomUUID(), // ✅ must include UUID manually
          name: "Test Member",
          email,
          password: hashed,
          firstLogin: true,
        },
      ])
      .select();

    if (error) throw error;

    console.log("✅ Member inserted:", data);
  } catch (err) {
    console.error("❌ Failed to insert member:", err.message || err);
  }
};

seedMember();
