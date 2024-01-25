import { cities } from "@/lib/data";
import styled from "styled-components";
import Link from "next/link";

export default function Cities() {
  console.log(cities);
  return (
    <StyledUl>
      {cities.map((city) => {
        return (
          <>
            <Link href={`cities/${city.slug}`}>
              <StyledLi key={city.id}>{city.name}</StyledLi>
            </Link>
          </>
        );
      })}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  margin-left: 3rem;
`;
const StyledLi = styled.li`
  list-style-type: "Visit..   ";
`;
