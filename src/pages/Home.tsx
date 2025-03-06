import styled from 'styled-components';

const StyledImage = styled.img`
  max-width: 58%;
`;

export default function Home() {
  return (
    <>
      <h3 id="main-title">Home Page</h3>
      <div id="main">
        <div id="main-image">
          <StyledImage src="src/assets/linkedin.jpeg" alt="User photo" />
        </div>
        <div id="main-text">
          <p id="selfDescription">
            My name is Alvin Zhu, I am currently a junior at Boston University studying Computer Science. I enjoy coding, building projects,
            and learning frameworks and then applying them. I also enjoy solving data structures and algorithm problems on this platform called "Leetcode".
            I also enjoy doing other activities which include listening to music, exploring cities, trying new foods, meeting new people, trying new things as well.
          </p>
        </div>
      </div>
    </>
  );
}
