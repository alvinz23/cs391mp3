import styled from 'styled-components';
import Calculator from '../components/Calculator'; 
const StyledDiv = styled.div`
  margin-left: 3vw; 
  font-size: 1.4em;
`;

const ProjectSection = styled.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function Projects() {
  return (
    <>
      <h3 id="main-title">Projects</h3>
      <StyledDiv>
        <ProjectSection>
          <h4>
            🧠 LeetCode AI Test Case Generator | React/Next.js, Django, PostgreSQL, Selenium
          </h4>
          <p>
            <strong>Date:</strong> July 2024
          </p>
          <ul>
            <li>
              Developed a full-stack web application using React/Next.js for the frontend and Django for the backend.
            </li>
            <li>
              Designed to generate advanced test cases for LeetCode-style coding problems using a fine-tuned LLM.
            </li>
            <li>
              Implemented a PostgreSQL database and RESTful API to manage data and communicate with the AI model.
            </li>
            <li>
              Integrated web scraping with Selenium and ChromeDriver to gather LeetCode problem datasets.
            </li>
          </ul>
        </ProjectSection>

        <ProjectSection>
          <h4>
            📜 TaleCraft | Flask, HTML/CSS/JS, OpenAI API, Docker, Bootstrap
          </h4>
          <p>
            <strong>Date:</strong> November 2023
          </p>
          <ul>
            <li>
              Developed a full-stack, retro-themed interactive storytelling game using generative AI.
            </li>
            <li>
              Built the frontend using HTML, CSS, JavaScript, and Bootstrap for responsive UI.
            </li>
            <li>
              Created a Flask-based backend with RESTful API endpoints to handle user requests.
            </li>
            <li>
              Integrated OpenAI API for dynamic story and image generation.
            </li>
          </ul>
        </ProjectSection>

        <ProjectSection>
          <h4>
            🔥 Spark Bytes Project | PostgreSQL, Prisma, Express.js, Next.js
          </h4>
          <p>
            <strong>Date:</strong> December 2023
          </p>
          <ul>
            <li>
              Developed a platform for BU faculty and students to post food-related events to reduce waste.
            </li>
            <li>
              Implemented user authentication with JWT and bcrypt for secure login and registration.
            </li>
            <li>
              Built a dynamic event display using Prisma for efficient database operations.
            </li>
            <li>
              Developed a responsive frontend using Next.js and React.js, containerized with Docker.
            </li>
          </ul>
          <br>
          </br>

          <Calculator/>
        </ProjectSection>
      </StyledDiv>
    </>
  );
}
