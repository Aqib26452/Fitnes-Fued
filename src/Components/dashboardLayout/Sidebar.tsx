"use client";

import Image, { StaticImageData } from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

/* ─────────── Images ─────────── */
import HomeActive from "../../../public/assets/dashboard/sidebaricon1.png";
import HomeInactive from "../../../public/assets/dashboard/dashboardicon1.png";
import reward from "../../../public/assets/dashboard/reward.png";
import rewardActive from "../../../public/assets/dashboard/rewardActive.png";
import match from "../../../public/assets/dashboard/match.png";
import matchActive from "../../../public/assets/dashboard/matchActive.png";
import plane from "../../../public/assets/dashboard/plane.png";
import planeActive from "../../../public/assets/dashboard/planeActive.png";
import chat from "../../../public/assets/dashboard/Chat.png";
import chatActive from "../../../public/assets/dashboard/chatActive.png";
import setting from "../../../public/assets/dashboard/setting.png";
import settingActive from "../../../public/assets/dashboard/settingActive.png";
import logout from "../../../public/assets/dashboard/logout.png";
import { GiSettingsKnobs } from "react-icons/gi";

/* ─────────── Types ─────────── */
type SidebarItem = {
  name: string;
  path: string;
  activeIcon: StaticImageData;
  inactiveIcon: StaticImageData;
};

type SidebarSection = {
  section: string;
  items: SidebarItem[];
};

type SidebarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

/* ─────────── Component ─────────── */
export default function Sidebar({
  isSidebarOpen,
  toggleSidebar,
}: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  /* Helpers */
  const isItemActive = (item: SidebarItem) => {
    if (
      [
        "/admin-dashboard/match-setting",
        "/admin-dashboard/rewards",
        "/admin-dashboard/plane",
        "/admin-dashboard/chat-group",
        "/admin-dashboard/setting",
      ].some((p) => pathname.startsWith(p))
    ) {
      return pathname === item.path;
    }

    return pathname === item.path || pathname.startsWith(item.path + "/");
  };

  const handleNavigate = (path: string, itemName: string) => {
    if (itemName === "Logout") router.push("/");
    else router.push(path);
    /* auto‑close on mobile */
    if (isSidebarOpen) toggleSidebar();
  };

  /* Menu definition */
  const sidebarMenu: SidebarSection[] = [
    {
      section: "",
      items: [
        {
          name: "Dashboard",
          path: "/admin-dashboard",
          activeIcon: HomeActive,
          inactiveIcon: HomeInactive,
        },
        {
          name: "Match Setting",
          path: "/admin-dashboard/match-setting",
          activeIcon: matchActive,
          inactiveIcon: match,
        },
        {
          name: "Rewards & Badg",
          path: "/admin-dashboard/rewards",
          activeIcon: rewardActive,
          inactiveIcon: reward,
        },
        {
          name: "Plan Config",
          path: "/admin-dashboard/plane",
          activeIcon: planeActive,
          inactiveIcon: plane,
        },
        {
          name: "Chat Group",
          path: "/admin-dashboard/chat-group",
          activeIcon: chatActive,
          inactiveIcon: chat,
        },
      ],
    },
    {
      section: "PREFERENCE",
      items: [
        {
          name: "Setting",
          path: "/admin-dashboard/setting",
          activeIcon: settingActive,
          inactiveIcon: setting,
        },
        {
          name: "Logout",
          path: "/",
          activeIcon: logout,
          inactiveIcon: logout,
        },
      ],
    },
  ];

  return (
    <aside className="h-full w-[260px] bg-black p-5 shadow-xl rounded-[20px]  transition-transform duration-300 fixed">
      {/* Mobile toggle button */}
      <button
        aria-label="Toggle sidebar"
        onClick={toggleSidebar}
        className="absolute top-4 left-4 text-white lg:hidden"
      >
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div className="flex flex-col gap-3 h-full">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4 my-6">
          <Image
            src="/assets/dashboard/logo.png"
            alt="Logo"
            width={197}
            height={64}
            priority
            className=" mt-2"
          />
        </div>
        <p className="px-4 text-[14px] mt-2 ml-2 text-[#A7A7A7]">MAIN MENU</p>

        {/* Top sections */}
        {sidebarMenu
          .filter((s) => s.section === "")
          .map(({ items }) =>
            items.map((item) => {
              const active = isItemActive(item);
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path, item.name)}
                  className={`flex items-center gap-3 w-full py-2.5 px-4 rounded-[12px] xl:text-[20px] text-[17px] font-roboto transition-colors cursor-pointer ${
                    active
                      ? "bg-[#5861C3] text-white"
                      : "text-[#6B7280] hover:bg-white/10"
                  }`}
                >
                  <Image
                    src={active ? item.activeIcon : item.inactiveIcon}
                    alt={`${item.name} icon`}
                    width={16}
                    height={16}
                  />
                  {item.name}
                </button>
              );
            })
          )}

        <p className="px-4 text-[14px] ml-2 text-[#A7A7A7]">Preference</p>
        {/* Preferences */}
        {sidebarMenu
          .filter((s) => s.section === "PREFERENCE")
          .map(({ items }) =>
            items.map((item) => {
              const active = isItemActive(item);
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path, item.name)}
                  className={`flex items-center gap-3 w-full py-2.5 px-4 rounded-[12px] xl:text-[20px] text-[17px] font-roboto transition-colors ${
                    active
                      ? "bg-[#5861C3] text-white"
                      : "text-[#6B7280] hover:bg-white/10"
                  }`}
                >
                  <Image
                    src={active ? item.activeIcon : item.inactiveIcon}
                    alt={`${item.name} icon`}
                    width={20}
                    height={20}
                  />
                  {item.name}
                </button>
              );
            })
          )}
      </div>
    </aside>
  );
}
