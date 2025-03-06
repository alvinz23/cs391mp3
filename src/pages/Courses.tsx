import styled from 'styled-components';

const ListContainer = styled.ul`
  margin-top: 2rem;
`;

const ListItem = styled.li`
  margin-bottom: 5.0rem;
  font-size: 1.15em;
  &:last-child {
    margin-bottom: 0;
  }

`;

export default function Courses() {
  return (
    <>
      <h3 id="main-title">Relevant Courses Taken</h3>
      <div id="main">
        <div id="main-text5">
          <ListContainer>
            <ListItem>
              <strong>CS519: Spark! Software Engineering X-Lab Practicum</strong>
              <p>
                This course offers students in computing disciplines the opportunity to apply their programming and system development skills by working on real-world projects provided by partnering organizations, both within and outside of BU.
              </p>
            </ListItem>
            <ListItem>
              <strong>CS330: Data Structures and Algorithms</strong>
              <p>
                This course introduces data structures and algorithms, focusing on the principles and design of data structures such as lists, trees, and graphs, as well as the analysis of algorithms in terms of time and space complexity. Students will gain experience in implementing and optimizing algorithms.
              </p>
            </ListItem>
            <ListItem>
              <strong>CS411: Software Engineering</strong>
              <p>
                This course covers the fundamental principles of software engineering, including software development life cycles, requirements analysis, design methodologies, and testing. Students will apply these concepts in team-based projects.
              </p>
            </ListItem>
          </ListContainer>
        </div>
      </div>
    </>
  );
}
