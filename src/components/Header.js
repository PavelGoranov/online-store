import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from './Login';
import Signup from './Signup';
import UserLoginDetails from './UserLoginDetails';

function Header() {
  return (
    <div class="box header">
      {/* Добавяме бутон за извикване на форма за вписване*/}
      <Login />
      {" "}
      {/* Добавяме бутон за извикване на форма за регистрация*/}
      <Signup />
      {" "}
      {/* Добавяме текстово поле в което ще се показе името на потребителя в системата при успешно вписване*/}
      <UserLoginDetails />
      </div>
      

  );
}

export default Header;
