import Image from "next/image";
import grp from "public/images/paraimg.jpeg";

const HomeTwoModal = () => {
  return (
    <div
      className="services-parallax-bg"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0, // ✅ BELOW services content
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Image
          src={grp}
          alt="services parallax background"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            opacity: 0.35,
          }}
        />
      </div>
    </div>
  );
};

export default HomeTwoModal;
