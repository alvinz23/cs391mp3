import styled from 'styled-components'; 

const StyledDiv = styled.div`
margin-top : 3vh;
font-size: calc(2px + 3.15vw);
`; 
 


export default function Experiences(){
     return(
        <>
        <h3 id = "main-title">Work Experience</h3>
        <StyledDiv id = "styledDiv">
        <h4>💻 Software Engineer Intern | Flow Global Software Technologies</h4>
        <p><strong>Years:</strong> 2022 - 2023</p>
        <p><strong>Location:</strong> Remote</p>
        <br>
        </br>
        <h4>🚀 Incoming Software Engineer Intern | Fidelity Investments</h4>
                <p><strong>Start Date:</strong> Summer 2025</p>
                <p><strong>Location:</strong> Merrimack, NH</p>
                <br>
                </br>
                <h4>🔬 BU Spark! Project Contributor</h4>
                <p><strong>Semester:</strong> Fall 2023</p>
                <p><strong>Location:</strong> Boston, MA</p>
                <br>
                </br>
                <h4>YMCA</h4>
                <p><strong>Semester:</strong> Summer 2024</p>
                <p><strong>Location:</strong> New York, NY</p>
        </StyledDiv>
        </>
     )
}