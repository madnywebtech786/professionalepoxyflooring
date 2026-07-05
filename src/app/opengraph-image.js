import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Professional Epoxy Flooring, Calgary";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/images/logo.png"), "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background: "linear-gradient(135deg, #0c2344 0%, #123a6d 100%)",
        }}
      >
        <img src={logoSrc} width={420} height={227} style={{ objectFit: "contain" }} />
        <div
          style={{
            fontSize: 32,
            color: "#b9ddff",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Calgary Residential, Commercial and Industrial Flooring
        </div>
      </div>
    ),
    { ...size }
  );
}
