import logo from '../assets/logo.svg';
import dashboardIlust from '../assets/illustration-dashboard.png';
import Footer from '../components/Footer';
import Form from '../components/Form';

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen w-full bg-white bg-contain bg-no-repeat  overflow-hidden flex justify-center font-Franklin p-6 md:p-0">
        <div className="w-full flex flex-col items-center px-6">
          <img className="mt-16" src={logo} alt="ping logo" />
          <h1 className="text-2xl md:text-6xl text-Gray mt-10 ">
            We are launching <span className="text-black font-bold">soon!</span>
          </h1>
          <br></br>
          {/* <h2 className='md:text-2xl text-black mt-4 mb-6'>Subscribe and get notified</h2>
          <Form /> */}
          <img
            className="md:px-60"
            src={dashboardIlust}
            alt="dashboard illustration"
          />
          <Footer />
        </div>
      </div>
    </>
  );
}
