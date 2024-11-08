import Heading from "./AboutLinks/Heading";
export default function VirtualTour() {
  return (
    <div>
      <Heading heading="Virtual tour" />
      <iframe
        width="100%"
        height="640"
        frameborder="0"
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowfullscreen
        scrolling="no"
        src="https://kuula.co/share/collection/7cXKm?logo=1&info=1&fs=1&vr=0&sd=1&autorotate=0.26&thumbs=1"
      ></iframe>
    </div>
  );
}
