import React, { useState } from 'react';
import './Profile.css';
import theroImg from '../../assets/profileimg-lf.png';

const Profile = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleReadMore = () => setShowIframe(true);
  const handleClose = () => setShowIframe(false);

  return (
    <div className="container">
      <div className="row profile-row-simple align-items-stretch">
        {/* Image column */}
        <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-center h-100">
          <img
            src={theroImg}
            alt="වහරක අභයතනාලංකාර මහ තෙරුන් වහන්සේ"
            className="profile-img-simple"
            style={{ maxHeight: 580, height: "100%", objectFit: "cover" }}
          />
        </div>
        {/* Content column */}
        <div className="col-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center h-100">
          <h2 className="profile-title-right p-3">
            පූජ්‍යපාද වහරක අභයතනාලංකාර මහ තෙරුන් වහන්සේ
          </h2>
          <p className="profile-description p-3">
            අප රටට අනන්‍ය වූ පෙරදිග සාකල්‍ය හා දේශීය වෛද්‍ය විද්‍යාවේ මූලයන් වසර දහස් ගණනක් පුරා දිව යයි. දේශීය වෛද්‍ය ක්‍රමය කෙතරම් දියුණුව පැවතියාද යන්න, වසර 18000 කට පෙර පවා පැවති ඉපැරණි ප්‍රතිකාර මගින් මොළයේ රෝග සඳහා ද සාර්ථක ප්‍රතිකාර ක්‍රම පැවති බවට සාක්ෂි ඇත. මෙම ඓතිහාසික වටිනාකමකින් යුත් උරුමය පුනර්ජීවනය කිරීමේ අදහස පෙරදැරිව, ජීවක ක්‍රම පිළිබඳව ගැඹුරු අධ්‍යයනයකින් හා භාවනාවකින් යුතුව වහරක ක්‍රමවේදය මතු කළ අතිපූජ්‍ය වහරක අභයරතනාලංකාර මහා ස්වාමීන් වහන්සේ, මෙම දේශීය ශාක පදනම් කරගත් පරිපූර්ණ ප්‍රතිකාර මගින් ලොව පුරා මිනිසුන්ට පීඩා කරන සියලු රෝග හඳුනාගෙන එම රෝග සඳහා ප්‍රතිකාර කිරීමේ අරමුණින් 2013 වසරේ සිට ලක්ෂ සංඛ්‍යාත ගිහියන්ට ප්‍රතිකාර කිරීම අරඹා ඇත.
          </p>
          <button className="profile-readmore-btn" onClick={handleReadMore}>
            වැඩිදුර කියවන්න
          </button>
          {showIframe && (
            <div className="modal-overlay">
              <div className="modal-content">
                <button className="modal-close-btn" onClick={handleClose}>×</button>
                <iframe
                  allowFullScreen
                  scrolling="no"
                  className="fp-iframe"
                  src="https://heyzine.com/flip-book/620ef50150.html"
                  title="flipbook"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;