
import styled from 'styled-components'; 


const MainDiv = styled.div`
margin-top : 0.75em;
`; 





export default function Hobbies(){ 
    return(
        <>
    <h3 id="main-title">My Hobbies</h3>
            <MainDiv>
                <div id="main-text3">
                    <ul id = "hobbies">
                        <li><strong>🏀 Basketball:</strong> I enjoy playing basketball and keeping active with friends.</li>
                        <li><strong>💪 Lifting:</strong> Weightlifting is an important part of my fitness routine.</li>
                        <li><strong>🎶 Music:</strong> I love listening to a wide variety of music genres, including R&B, hip hop, city pop, jazz, classical music, EDM.</li>
                        <li><strong>🌆 Exploring Cities:</strong> I enjoy traveling and exploring new cities, getting to know their culture and architecture.</li>
                        <li><strong>🍱 Trying New Foods:</strong> Food is a big part of my adventures; I love tasting different dishes wherever I go.</li>
                        <li><strong>Meeting new people:</strong>I enjoy connecting and meeting new people, it is interesting to learn and hear their stories</li>
                    </ul>
                </div>
            </MainDiv>
    </>
    )
}