import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function BookMeeting() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      className="bg-slate-800 font-semibold p-3 rounded-xl text-white px-6"
      data-cal-namespace="30min"
      data-cal-link="khushaal-choithramani-5mvbsx/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      book a call?
    </button>
  );
}
