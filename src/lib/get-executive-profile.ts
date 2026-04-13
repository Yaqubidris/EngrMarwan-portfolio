import executiveProfileJson from "@/content/executive-profile.json";
import type { ExecutiveProfile } from "@/types/executive-profile";

export function getExecutiveProfile(): ExecutiveProfile {
  return executiveProfileJson as ExecutiveProfile;
}
