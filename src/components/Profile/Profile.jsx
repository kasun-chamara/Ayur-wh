import React, { useState } from 'react';
import './Profile.css';
import profileImg from '../../assets/profileimg-lf.png';

const shortText = `අප රටට අනන්‍ය වූ පෙරදිග සාකල්‍ය හා දේශීය වෛද්‍ය විද්‍යාවේ මූලයන් වසර දහස් ගණනක් පුරා දිව යයි. දේශීය වෛද්‍ය ක්‍රමය කෙතරම් දියුණුව පැවතියාද යන්න, වසර 18000 කට පෙර පවා පැවති ඉපැරණි ප්‍රතිකාර මගින් මොළයේ රෝග සඳහා ද සාර්ථක ප්‍රතිකාර ක්‍රම පැවති බවට සාක්ෂි ඇත.`;
const fullText = `අප රටට අනන්‍ය වූ පෙරදිග සාකල්‍ය හා දේශීය වෛද්‍ය විද්‍යාවේ මූලයන් වසර දහස් ගණනක් පුරා දිව යයි. දේශීය වෛද්‍ය ක්‍රමය කෙතරම් දියුණුව පැවතියාද යන්න, වසර 18000 කට පෙර පවා පැවති ඉපැරණි ප්‍රතිකාර මගින් මොළයේ රෝග සඳහා ද සාර්ථක ප්‍රතිකාර ක්‍රම පැවති බවට සාක්ෂි ඇත. මෙම ඓතිහාසික වටිනාකමකින් යුත් උරුමය පුනර්ජීවනය කිරීමේ අදහස පෙරදැරිව, ජීවක ක්‍රම පිළිබඳව ගැඹුරු අධ්‍යයනයකින් හා භාවනාවකින් යුතුව වහරක ක්‍රමවේදය මතු කළ අතිපූජ්‍ය වහරක අභයරතනාලංකාර මහා ස්වාමීන් වහන්සේ, මෙම දේශීය ශාක පදනම් කරගත් පරිපූර්ණ ප්‍රතිකාර මගින් ලොව පුරා මිනිසුන්ට පීඩා කරන  සියලු රෝග හඳුනාගෙන එම රෝග සඳහා ප්‍රතිකාර කිරීමේ අරමුණින් 2013 වසරේ සිට ලක්ෂ සංඛ්‍යාත ගිහියන්ට ප්‍රතිකාර කිරීම අරඹා ඇත.`;

const Profile = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={`profile-row-container${showMore ? ' expanded' : ''}`}>
      <div className="profile-left">
        <img src={profileImg} alt="Profile" className="profile-img" />
      </div>
      <div className="profile-right">
        <h2 className="profile-title">පූජ්‍යපාද වහරක අභයතනාලංකාර මහ තෙරුන් වහන්සේ</h2>
        <div className="profile-divider"></div>
        <p>
          {showMore ? fullText : shortText}
        </p>
        <button
          className="profile-btn"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default Profile;