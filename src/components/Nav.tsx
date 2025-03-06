
import { Link } from 'react-router'; 

export default function Nav (){
    return(
        <>
        <nav>
                <ul id="directory">
                    <li>
                        <Link to = '/'>Home</Link>                        
                        </li>
                    <li>
                    <Link to = '/education'>Education</Link>     
                    </li>
                    <li>
                    <Link to = '/experiences'>Experiences</Link>     
                        </li>
                    <li>
                    <Link to = '/projects'>Projects</Link>     
                        </li>
                    <li>
                    <Link to = '/hobbies'>Hobbies</Link>     
                        </li>
                    <li>
                    <Link to = '/courses'>Courses</Link>     
                        </li>
                </ul>
            </nav>          
        </>
    )
}