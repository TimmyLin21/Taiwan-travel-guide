import { NotFoundContainer } from '../components/styles/NotFound.styled';
import notFoundMonster from '../images/notFoundMonster.gif';
const NotFound = () => {
  return (
    <NotFoundContainer>
      <figure>
        <img src={notFoundMonster} alt="Page is not found." />
        <figcaption><a href="http://www.freepik.com">Designed by stories / Freepik</a></figcaption>
      </figure>
    </NotFoundContainer>
  )
};

export default NotFound;