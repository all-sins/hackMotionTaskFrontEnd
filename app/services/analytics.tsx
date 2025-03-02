import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import axios from "axios";

const AnalyticsService = () => {
    useEffect(() => {
        let userId = Cookies.get("userId");
        if (!userId) {
            userId = uuidv4();
            Cookies.set("userId", userId, { expires: 7, path: "/" }); // Set cookie for 7 days
        }

        const logEvent = async (eventType: "PAGE_VIEW" | "VIDEO_WATCH") => {
            const eventData = {
                userId,
                eventType,
                url: window.location.href,
                timestamp: new Date().toISOString(),
                browserInfo: {
                    userAgent: navigator.userAgent,
                    language: navigator.language,
                },
                deviceInfo: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    userAgent: navigator.userAgent,
                },
                ipAddress: "AUTO", // Patched in on the backend.
            };
            try {
                let urlParam = "";
                if (eventType === "PAGE_VIEW") {
                    urlParam = "page-view";
                } else if (eventType === "VIDEO_WATCH") {
                    urlParam = "video-view";
                }
                await axios.post(
                    `http://localhost:8080/api/analytics/events/${urlParam}`,
                    eventData
                );
            } catch (error) {
                console.error("Error logging event:", error);
            }
        };

        // Log page view event on page load
        logEvent("PAGE_VIEW");

        // You can add the event listener for video events here
        const videoElement = document.querySelector("video"); // assuming there's a <video> element
        if (videoElement) {
            videoElement.addEventListener("ended", () => {
                logEvent("VIDEO_WATCH"); // Log video watch event when the video ends
            });
        }
        
        return () => {
            // Cleanup: remove the event listener when the component is unmounted
            if (videoElement) {
                videoElement.removeEventListener("ended", () => {
                    logEvent("VIDEO_WATCH");
                });
            }
        };
    }, []);

    return null;
};

export default AnalyticsService;
