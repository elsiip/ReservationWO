import Logo from '../../assets/logo.png';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className={`px-[200px] py-[20px] flex justify-between items-center roboto-regular`} style={{backgroundColor: '#424242'}}>
        <img src={Logo} alt="Logo" />
        <div className='flex space-x-[40px] text-white'>
            <button> About us</button>
            <button> History Reservation</button>
            <button> Privacy Policy</button>
            <button> FAQ</button>
        </div>
        <div className='flex space-x-[8px] text-white'>
            <button><FontAwesomeIcon icon={faFacebook} className='w-[24px] h-[24px]' /></button>
            <button><FontAwesomeIcon icon={faInstagram} className='w-[24px] h-[24px]' /></button>
            <button><FontAwesomeIcon icon={faTwitter} className='w-[24px] h-[24px]' /></button>
        </div>
    </footer>
  );
}
