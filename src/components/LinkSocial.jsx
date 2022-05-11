import React from "react";

const LinkSocial = () => {
  return (
    <div className="flex flex-col pb-24">
      <button className="mx-5 my-10">
        <a
          target="_blank"
          href="http://www.facebook.com/"
          title="Click pour nous joindre"
        >
          <img
            src="../../public/static/logo/317727_square_social media_facebook_social.svg"
            alt=""
          />
        </a>
      </button>
      <button className="mx-5 my-10">
        <a
          target="_blank"
          href="http://www.instagram.com/"
          title="Click pour nous joindre"
        >
          <img
            src="../../public/static/logo/317738_instagram_photography_photos.svg"
            alt=""
          />
        </a>
      </button>
      <button className="mx-5 my-10">
        <a
          target="_blank"
          href="http://www.pinterest.fr/pin-builder/"
          title="Click pour nous joindre"
        >
          <img
            src="../../public/static/logo/317731_pinterest_social media_social.svg"
            alt=""
          />
        </a>
      </button>
      <button className="mx-5 my-10">
        <a
          target="_blank"
          href="http://www.twitter.com/"
          title="Click pour nous joindre"
        >
          <img
            src="../../public/static/logo/317723_social_square_social media_tweet_twitter.svg"
            alt=""
          />
        </a>
      </button>
    </div>
  );
};

export default LinkSocial;
