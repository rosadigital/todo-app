import React from "react";
import ServiceImg from "../assets/services.jpg";
import Footer from "../components/Footer";

const ServicePage = () => {
  return (
    <div>
      <div className="container">
        <section className="intro">
          <div className="row">
            <div className="col-4">
              <img src={ServiceImg} style={{ width: "70%", height: "auto" }} />
            </div>
            <div className="col-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                at nibh at mi accumsan condimentum ac sit amet nisl. Cras at
                laoreet lectus. In at porta lorem, id pulvinar velit. Nunc nec
                ornare urna. Morbi volutpat mollis ipsum, eget gravida tellus
                interdum eu. Cras ut ante nunc. Nulla congue erat felis, non
                blandit massa pellentesque at. Vestibulum sapien ligula,
                faucibus nec venenatis ut, dignissim sed quam. Nullam faucibus,
                lorem elementum luctus egestas, ante nibh imperdiet diam, ac
                hendrerit ex metus ac dolor. Cras egestas ex sit amet ipsum
                vestibulum, quis finibus lacus blandit. Mauris nibh quam, tempus
                eget nulla consequat, efficitur euismod lacus. Duis ut sapien et
                lacus pretium sagittis at ut ipsum.
              </p>
              <p>
                Vivamus et dui lacinia lacus aliquam malesuada. Integer at
                mattis nibh. Maecenas laoreet metus erat, nec tristique velit
                sodales in. Pellentesque sit amet purus eu orci rhoncus
                imperdiet. Integer venenatis lectus sed ante molestie euismod.
                Donec consectetur odio at euismod sagittis. Fusce ullamcorper
                erat lacus. Duis a interdum massa. Quisque augue erat,
                sollicitudin vel tincidunt eu, rutrum sit amet lacus. Proin
                malesuada eros facilisis nibh sagittis vestibulum. Donec
                pharetra fermentum dignissim. Donec efficitur viverra iaculis.
                Nunc mi ex, iaculis sit amet venenatis vitae, vehicula id ipsum.
                In non pretium mi, vitae sollicitudin elit. Curabitur nec
                maximus nibh.
              </p>
              <p>
                Aenean scelerisque, nisl non ultricies egestas, lorem leo
                commodo mauris, ut ornare neque leo maximus turpis. Pellentesque
                sit amet ipsum dolor. Vestibulum lacus quam, lobortis eget nisl
                nec, sodales dictum velit. Quisque convallis suscipit viverra.
                Curabitur maximus at odio ac finibus. Vestibulum porttitor
                interdum leo quis feugiat. Morbi eu quam laoreet, feugiat purus
                et, semper velit. Donec tincidunt ac est vel lacinia. Nulla
                facilisi. Nam non lorem urna. Nam arcu augue, tristique eget
                mauris sit amet, interdum luctus est. Nullam imperdiet erat sed
                aliquet vehicula. Nullam gravida fermentum nunc vel bibendum. In
                pellentesque a dui non interdum. Aliquam molestie, orci et
                laoreet placerat, erat mauris porttitor sem, ut tincidunt arcu
                quam at lectus. Ut vehicula elit quis tincidunt bibendum. Morbi
                et lectus molestie, sollicitudin quam sed, ornare elit. Nunc
                convallis dignissim finibus. In scelerisque sem et ullamcorper
                placerat.
              </p>
            </div>
          </div>
        </section>
      </div>
      <button id="btnScrollToTop" className="float-button">
        Top
      </button>
      <Footer />
    </div>
  );
};

export default ServicePage;
