import styled from 'styled-components'; 

const StyledDiv = styled.div`
margin-top : 3vh;
font-size: calc(2px + 2.5vw);
`; 
 

export default function Education (){ 
    return(
        <>
        <h3 id="main-title">Education</h3>
      <StyledDiv>
        <h4>🎓 Boston University</h4>
        <p>
          <strong>Degree:</strong> Bachelor of Arts in Computer Science
        </p>
        <p>
          <strong>Years Attended:</strong> 2022 - 2026
        </p>
        <p>
          <strong>Location:</strong> Boston, MA
        </p>
        <br />
        <br />
        <h4>🏫 Leon M. Goldstein High School for the Sciences</h4>
        <p>
          <strong>Years Attended:</strong> 2018 - 2022
        </p>
        <p>
          <strong>Location:</strong> Brooklyn, NY
        </p>
        <br />
        <br />
        <h4>💻 CodePath</h4>
        <p>
          <strong>Program:</strong> Software Engineering
        </p>
        <p>
          <strong>Years Attended:</strong> 2022 - 2023
        </p>
        <p>
          <strong>Location:</strong> Remote
        </p>
        <br />
        <h4>💻 CodePath</h4>
        <p>
          <strong>Program:</strong> Data structures and Algo
        </p>
        <p>
          <strong>Years Attended:</strong> 2022 - 2023
        </p>
        <p>
          <strong>Location:</strong> Remote
        </p>
      </StyledDiv>
      </>
    )
}