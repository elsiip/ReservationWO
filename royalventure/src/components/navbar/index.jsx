import Logo from '../../assets/logo.png';
import '../../App.css';

export default function Navbar() {
  const navbarStyle = {
    backgroundColor: 'transparent', 
  };

  return (
    <div className={`px-[64px] py-[24px] flex justify-between items-center roboto-regular`} style={navbarStyle}>
        <img src={Logo} alt="Logo" />
        <div className='flex space-x-[40px]'>
            <button className=' text-white'> Packages</button>
            <button className=' text-white'> Services</button>
            <button className=' text-white'> Testimonials</button>
            <button className=' text-white'> Reservation</button>
            <button className=' text-white'> Sign In/Sign Up</button>
        </div>
    </div>
  );
}
