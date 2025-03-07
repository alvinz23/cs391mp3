import styled from 'styled-components';

const MainDiv = styled.div`
  margin-top: 0.75em;
  margin-bottom: 0; 
`;

const Title = styled.h3`
font-size: 3em; 
margin-left: 8em; 
  margin-bottom: 1em; 

  @media screen and (max-width: 750px) {
    font-size: 1.5em; 
    margin-bottom: 0.5rem; 
    margin-left :11rem;
    margin-top : 2rem; 
  }

`;

const HobbiesList = styled.ul`
  margin-top: 3em; 
  padding: 0;



`;

const HobbiesListItem = styled.li`
  margin-bottom: 0.5em; 
  
  &:last-child {
    margin-bottom: 0em; 
  }

`;

export default function Hobbies() {
  return (
    <>
      <Title>My Hobbies</Title>
      <MainDiv>
        <div id="main-text3">
          <HobbiesList id="hobbies">
            <HobbiesListItem>
              <strong>🏀 Basketball:</strong> I enjoy playing basketball and keeping active with friends.
            </HobbiesListItem>
            <HobbiesListItem>
              <strong>💪 Lifting:</strong> Weightlifting is an important part of my fitness routine.
            </HobbiesListItem>
            <HobbiesListItem>
              <strong>🎶 Music:</strong> I love listening to a wide variety of music genres, including R&B, hip hop, city pop, jazz, classical music, EDM.
            </HobbiesListItem>
            <HobbiesListItem>
              <strong>🌆 Exploring Cities:</strong> I enjoy traveling and exploring new cities, getting to know their culture and architecture.
            </HobbiesListItem>
            <HobbiesListItem>
              <strong>🍱 Trying New Foods:</strong> Food is a big part of my adventures; I love tasting different dishes wherever I go.
            </HobbiesListItem>
            <HobbiesListItem>
              <strong>Meeting new people:</strong> I enjoy connecting and meeting new people; it is interesting to learn and hear their stories.
            </HobbiesListItem>
          </HobbiesList>
        </div>
      </MainDiv>
    </>
  );
}
