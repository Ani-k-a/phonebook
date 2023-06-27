import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectLoggedIn } from 'redux/selectors';
import { Block, Header, Wrapper } from './Sharedlayout.styled';

export function Sharedlayout() {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <Wrapper>
      <Block>
        <Header>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
      </Block>
      <Outlet />
    </Wrapper>
  );
}
