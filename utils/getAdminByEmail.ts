import { Admin } from "@/interfaces/Admin.interface";

export const getAdminByEmail = async (
  adminEmail: string
): Promise<Admin | undefined> => {
  console.log(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admins?email=${encodeURIComponent(
      adminEmail
    )}`
  );
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admins?email=${encodeURIComponent(
        adminEmail
      )}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const { data } = await response.json();

    return {
      id: data.admin.id,
      fullName: data.admin.fullName,
      picturePath: data.admin.picturePath,
    };
  } catch (error) {
    console.error("Error fetching patientByEmail:", error);
  }
};
