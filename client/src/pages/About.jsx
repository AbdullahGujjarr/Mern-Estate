



export default function About() {
  return (
    <div className="about-page py-20 px-4 mx-auto max-w-7xl lg:flex">
      <div className="about-contact lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Contact Us</h2>
        <ul className="list-none space-y-2">
          <li>
            <span className="text-slate-700 font-bold">Telephone:</span> (+92) 311-7735098
          </li>
          <li>
            <span className="text-slate-700 font-bold">Email:</span> abdullahpkpk91@gmail.com
          </li>
          <li>
            <span className="text-slate-700 font-bold">Address:</span> City Shakargarh, Pakistan
          </li>
        </ul>
      </div>
      <div className="about-info lg:w-1/2 lg:ml-10">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">About Pro-Estate</h2>
        <p className="text-slate-700 mb-4">
          Pro-Estate is a leading real estate agency dedicated to empowering individuals and families to achieve their property goals. We offer extensive experience and expertise in buying, selling, and renting properties in the most desirable locations.
        </p>
      </div>
      <div className="border-divider border-slate-900 h-full absolute left-1/2 transform -translate-x-1/2">
      </div>
      
    </div>
  
  );
}
