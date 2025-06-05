import { ImageResponse } from "next/og";

import { author, description } from "~/content/info";

export const contentType = "image/png";
export const dynamic = "force-static";
export const size = { height: 630, width: 1200 };

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          backgroundImage: "linear-gradient(to right, #141726, #201318)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div style={{ fontSize: 96 }}>{author.name}</div>
        <div style={{ color: "gray", fontSize: 48 }}>{description}</div>
      </div>
    )
  );
}
