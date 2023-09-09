import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { post } from "../constants";

const Featuredpost = ({ post }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgb(234 179 8)",
        color: "#000000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(234 179 8)" }}
      icon={<div className="w-full h-full bg-gray-800 rounded-full" />}
    >
      <div>
        <h1 className="text-gray-800 text-4xl font-serif">
          {post.title}
        </h1>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {post.desc.map((desc, index) => (
            <li
              key={`desc-${index}`}
              className="text-xl pl-1 tracking-wider text-gray-800 font-serif"
            >
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

function Details() {
  return (
    <div className="container flex flex-col items-center justify-center pt-20 w-11/12 bg-gray-200 rounded-xl gap-20">
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-gray-800 text-4xl font-serif">More on our Model</h2>
      </div>
      <div className="w-11/12">
        <VerticalTimeline lineColor={"black"}>
          {post.map((post, index) => {
            return <Featuredpost key={`post-${index}`} post={post} />;
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Details;
