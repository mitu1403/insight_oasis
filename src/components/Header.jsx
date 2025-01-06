import profileImage from '/images/profile.png'
function Header() {
  return (
    <div className='flex justify-between items-center p-4 border-b-2'>
      <h1 className="font-bold text-4xl leading-loose">Insight Oasis</h1>
      <img src={profileImage} alt="" />
    </div>
  );
}
export default Header;
