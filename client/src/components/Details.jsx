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
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={post.svg}
            alt="here a svg comes"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-black text-[24px] font-bold">{post.title}</h3>
        <p className="text-black text-[16px] font-semibold">{post.desc}</p>
      </div>
    </VerticalTimelineElement>
  );
};

function Details() {
  return (
    <div className="container flex flex-col items-center justify-center pt-20 w-11/12 bg-gray-200 rounded-xl gap-20">
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-gray-800 text-4xl font-serif">
          More on our Model
        </h2>
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
