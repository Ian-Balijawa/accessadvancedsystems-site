import React from 'react';

const Showcase = () => {
  return (
    <section class="block block--dark block--skewed-right block-showcase">
      <header class="block__header">
        <h2>User-friendly Control Panel</h2>
      </header>
      <div class="container grid grid--1x2">
        <picture data-aos="fade-right" class="block-showcase__image">
          <source
            type="image/webp"
            srcset="images/ipad.webp 1x, images/ipad@2x.webp 2x"
          />
          <source
            type="image/png"
            srcset="images/ipad.png 1x, images/ipad@2x.png 2x"
          />
          <img src="images/ipad.png" alt="" />
        </picture>
        <ul class="list" data-aos="fade-up">
          <li>
            <div class="media">
              <div class="media__image">
                <svg class="icon icon--primary">
                  <use src="images/sprite.svg#snap"></use>
                </svg>
              </div>
              <div class="media__body">
                <h3 class="media__title">Easy Start & Managed Updates</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam quisquam, ex nostrum vero voluptates dicta excepturi
                  vel perspiciatis consequuntur ab.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="media">
              <div class="media__image">
                <svg class="icon icon--primary">
                  <use src="images/sprite.svg#growth"></use>
                </svg>
              </div>
              <div class="media__body">
                <h3 class="media__title">Staging, GIT & WP-CLI</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam quisquam, ex nostrum vero voluptates dicta excepturi
                  vel perspiciatis consequuntur ab.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="media">
              <div class="media__image">
                <svg class="icon icon--primary">
                  <use src="images/sprite.svg#wordpress"></use>
                </svg>
              </div>
              <div class="media__body">
                <h3 class="media__title">Dynamic Caching & More</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam quisquam, ex nostrum vero voluptates dicta excepturi
                  vel perspiciatis consequuntur ab.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Showcase;
