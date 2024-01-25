import { cities } from "@/lib/data";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function City() {
  const router = useRouter();
  if (!router.query) {
    return null;
  }
  const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return null;
  }
  const targetFrame = `https://en.wikipedia.org/wiki/${city.name}`;
  const targetFrame2 = `https://wikitravel.org/de/${city.name}`;
  const targetFrame3 = `https://www.openstreetmap.org/search?query=${city.name}`;

  return (
    <>
      <Link href="/cities">Back to all cities</Link>
      <StyledBox key={city.id}>
        <boxInBox>
          <h1>{city.name}</h1>
          <p>
            <b>Description: </b>
            {city.description}
          </p>
          <p>
            <b>Country: </b>
            {city.country}
          </p>
          <p>
            <b>Population: </b>
            {city.population}
          </p>
          <iframe src={targetFrame} style={iFrameStyle}></iframe>
          <iframe src={targetFrame2} style={iFrameStyle2}></iframe>
        </boxInBox>
      </StyledBox>
    </>
  );
}

const StyledBox = styled.article`
  background-image: url("/prague-7172594_640.jpg");
  opacity: 0.9;
  height: 40rem;
  width: 60rem;
`;

const boxInBox = styled.div`
  height: auto;
  width: auto;
  background-color: hsla(0, 0%, 100%, 0.875);
`;

const iFrameStyle = {
  width: "30rem",
  height: "25rem",
};

const iFrameStyle2 = {
  width: "30rem",
  height: "25rem",
};
