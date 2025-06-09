import { useState, useEffect } from "react";

function getDeviceType(width: number) {
  if (width < 768) return "phone";
  if (width < 1024) return "tablet";
  return "desktop";
}

export default function useScreenSize() {
  const [device, setDevice] = useState(() => getDeviceType(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isPhone: device === "phone",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
    deviceType: device,
  };
}
