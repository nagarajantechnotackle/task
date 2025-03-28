const Header = () => {
  return (
    <header className="container-fluid mx-auto px-4 bg-white">
      <div className="flex justify-between items-center p-4 shadow-md ">
        <h1 className="font-openSans font-extrabold bg-gradient-to-r from-[#0060EF] via-[#150190] to-[#8601F0] bg-clip-text text-transparent text-bold text-4xl">
          RUMO
        </h1>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="p-[1px] bg-gradient-to-r from-[#0060EF] via-[#150190] to-[#8601F0] rounded-md">
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-lg font-semibold rounded-md">
              <span className="font-openSans bg-gradient-to-r from-[#0060EF] via-[#150190] to-[#8601F0] bg-clip-text text-transparent font-bold">
                CALL US
              </span>
            </button>
          </div>
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0060EF" />
                  <stop offset="100%" stopColor="#8601F0" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="35" r="18" fill="url(#gradient)" />
              <ellipse cx="50" cy="75" rx="30" ry="12" fill="url(#gradient)" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
