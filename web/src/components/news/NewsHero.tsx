import React from "react"
import { Title, Subtitle, Paragraph } from "../ds"
import newsphoto from "./newsphoto.png"

export default function UpdatesHero() {
  return (
    <section className="py-20 sm:py-48 xl:pb-56 sm:max-height-60vh flex items-center text-white  relative overflow-y-hidden news-hero bg-blue-500">
      <div className="container ">
        <div className="max-w-sm flex flex-col">
          <Title color="white" className="text-6xl self-start relative">
            News
            <div
              className="max-w-md h-2 bg-blue-200 absolute w-full"
              style={{ bottom: 8 }}
            ></div>
          </Title>

          <Subtitle color="white" className="self-start">
            Stay up to date on the latest from across Canada.
          </Subtitle>

          <Paragraph color="white" className="mt-2 self-start">
            We will post updates affecting the Filipino community in Canada,
            including federal and provincial programs.
          </Paragraph>
        </div>
      </div>
      <div
        className="absolute inset-y-0 right-0 flex justify-end hidden lg:flex"
        style={
          {
            // filter: "drop-shadow(-1px 0px 9px rgba(0,0,0,0.5))",
          }
        }
      >
        <svg width="0" height="0">
          <defs>
            <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
              <path
                d="M 0,1
                   C 0.5 1, 0 0, 0.5 0
                   L 0,0
                   L 1,0
                   L 1,1
                   Z"
              />
            </clipPath>
          </defs>
        </svg>
        <img
          src={newsphoto}
          className="flex h-full"
          style={{
            clipPath: 'url("#clip-shape")',
          }}
        ></img>
      </div>
    </section>
  )
}
