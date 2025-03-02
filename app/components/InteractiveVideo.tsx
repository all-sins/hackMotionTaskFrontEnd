/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from "react";

const InteractiveVideo = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [openCard, setOpenCard] = useState(null); // Track open card by timestamp

    // Timestamps and corresponding content for collapsible cards
    const timestamps = [
        { time: 10, title: "Static top drill", content: "Get a feel for the optimal wrist position at Top of your swing" },
        { time: 30, title: "Dynamic top drill", content: "Dynamically train your wrist position at Top"},
        { time: 50, title: "Top full swing challange", content: "Train your maximum power swing" },
    ];

    // Update current time as the video progresses
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };
    
    // Toggle the card on click
    const toggleCard = (time) => {
        setOpenCard(openCard === time ? null : time); // Toggle the card
    };
    
    // Auto-expand/collapse the card based on timestamp
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.removeAttribute("controls");
            videoRef.current.play().catch((err) => {
                console.error("Autoplay failed:", err)
            });
        }
        
        timestamps.forEach((timestamp) => {
            if (
                currentTime >= timestamp.time &&
                currentTime < timestamp.time + 5
            ) {
                setOpenCard(timestamp.time); // Open card if within range
            } else if (currentTime < timestamp.time) {
                setOpenCard(null); // Close card if before the timestamp
            }
        });
    }, [currentTime]); // Update on every time change

    return (
        <div className="flex gap-8 flex-col">
            {/* Video Container */}
            <div className="">
                <video
                    ref={videoRef}
                    className="w-full"
                    controls
                    onTimeUpdate={handleTimeUpdate}
                    src="public/vid/Impact-Drill.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="relative mt-4">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gray-200">
                        <div
                            className="h-full bg-blue-500"
                            style={{
                                width: `${
                                    (currentTime / videoRef.current?.duration) *
                                    100
                                }%`,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    {timestamps.map((timestamp) => (
                        <div
                            key={timestamp.time}
                            className={`border p-1 rounded-md cursor-pointer`}
                            onClick={() => toggleCard(timestamp.time)} // Toggle on click
                        >
                            <button
                                className="flex flex-row text-blue-500 mt-2"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering toggleCard
                                    toggleCard(timestamp.time); // Toggle card visibility
                                }}
                            >
                                <img className="mr-2" src="icons/expand_less.svg" alt="svgExpand"></img>
                                <h3 className="text-xl font-semibold text-[#5773FF]">
                                    {timestamp.title}
                                </h3>
                            </button>
                            {openCard === timestamp.time && (
                                <p className="text-black">{timestamp.content}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InteractiveVideo;
