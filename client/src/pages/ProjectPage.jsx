import React from "react";
import ProjectImg from "../assets/projects.png";
import Footer from "../components/Footer";

const ProjectPage = () => {
  return (
    <div>
      <div className="container">
        <section className="intro">
          <div className="row">
            <div className="col-4">
              <img src={ProjectImg} style={{ width: "90%", height: "auto" }} />
            </div>
            <div className="col-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                imperdiet sed eros non molestie. Duis ornare diam quis odio
                blandit dapibus. Nunc ut nibh non nisi lobortis egestas. Nunc
                pulvinar sapien non ornare commodo. Vivamus mattis enim ipsum,
                nec congue turpis facilisis volutpat. Duis dapibus, dolor id
                ullamcorper suscipit, sem nibh auctor est, a cursus quam odio
                vel sem. Nunc at volutpat eros. Vestibulum urna risus, porta sit
                amet viverra sit amet, volutpat condimentum libero. Aenean
                scelerisque cursus augue, at accumsan ipsum maximus ut.
              </p>
              <p>
                Pellentesque luctus tortor ac ullamcorper imperdiet. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Donec sit amet
                maximus est. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Suspendisse semper
                sem eros, in pretium purus sagittis et. Suspendisse quam lacus,
                tincidunt rhoncus maximus ac, auctor id ligula. Aenean molestie
                erat ac fringilla tempus. Sed ac ullamcorper ipsum. Proin
                convallis malesuada lacus et imperdiet. Cras suscipit sapien id
                consectetur sodales. Fusce aliquam magna ut nibh vestibulum
                ornare. Fusce vel dui consectetur, vulputate quam non, placerat
                neque. Morbi massa orci, lacinia vitae bibendum sit amet,
                molestie id leo. Duis convallis faucibus ante, ac condimentum mi
                facilisis at.
              </p>
              <p>
                Aliquam lobortis tellus sed eleifend euismod. Phasellus eget
                risus quis enim mattis laoreet ac nec odio. Pellentesque dictum
                volutpat sem, ut varius turpis fermentum non. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Ut sed justo
                at urna tempor ornare. Aliquam varius arcu nec porttitor semper.
                Curabitur et diam sed mauris accumsan finibus. Morbi sem lorem,
                gravida eget auctor sit amet, consequat in odio. Praesent mattis
                porta neque in mattis. Aenean vel tellus non turpis fringilla
                sodales. Sed lorem sapien, varius at est at, porttitor volutpat
                nunc. Suspendisse sit amet posuere ante. Aliquam tempor congue
                lorem sed mattis.
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

export default ProjectPage;
