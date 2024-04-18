import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63392.351923816015!2d79.84793637285134!3d6.767172101297588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2450af2b3b63d%3A0x4bd5b87e09abb3c7!2sMoratuwa!5e0!3m2!1sen!2slk!4v1690029337387!5m2!1sen!2slk"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
