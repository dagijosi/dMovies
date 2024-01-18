import React from "react";
import icon from "../image/Icon.png";
import discover from "../image/Discover.png";
import award from "../image/Award.png";
import celebrities from "../image/Celebrities.png";
import recent from "../image/Recent.png";
import rated from "../image/Top Rated.png";
import downloaded from "../image/Downloaded.png";
import playlists from "../image/Playlists.png";
import watchlist from "../image/Watchlist.png";
import completed from "../image/Completed.png";
import settings from "../image/Settings.png";
import logout from "../image/Log Out.png";

const Menu = () => {
    const sections = [
      {
        title: "Menu",
        items: [
          { src: icon, alt: "Icon", label: "Home" },
          { src: discover, alt: "Discover", label: "Discover" },
          { src: award, alt: "Award", label: "Awards" },
          { src: celebrities, alt: "Celebrities", label: "Celebrities" },
        ],
      },
      {
        title: "Library",
        items: [
          { src: recent, alt: "Recent", label: "Recent" },
          { src: rated, alt: "Top Rated", label: "Top Rated" },
          { src: downloaded, alt: "Downloaded", label: "Downloaded" },
          { src: playlists, alt: "Playlists", label: "Playlists" },
          { src: watchlist, alt: "Watchlist", label: "Watchlist" },
          { src: completed, alt: "Completed", label: "Completed" },
        ],
      },
      {
        title: "General",
        items: [
          { src: settings, alt: "Settings", label: "Settings" },
          { src: logout, alt: "Log Out", label: "Log Out" },
        ],
      },
    ];
  
    return (
      <div className=" h-auto w-64 bg-middleblue text-white ">
        <h1 className="text-2xl not-italic font-extrabold mt-6 ml-10">DMOVIES</h1>
        {sections.map((section) => (
          <div className="flex-shrink-0 mt-8 ml-10 ">
            <h1 className="text-base not-italic font-bold text-gray-300 mb-5">{section.title}</h1>
            {section.items.map((item) => (
              <button className="flex felx-row mb-5 ">
                <img className="w-4 h-4 flex-shrink-0 mr-4" src={item.src} alt={item.alt} />
                <label className="text-xs not-italic font-semibold">{item.label}</label>
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  };
export default Menu;
