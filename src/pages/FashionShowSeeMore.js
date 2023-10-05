import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import DashboardContainer1 from "../components/DashboardContainer1";
import FormContainer1 from "../components/FormContainer1";
import "./FashionShowSeeMore.css";

const FashionShowSeeMore = () => {
  const navigate = useNavigate();

  const onSidenavContainer1Click = useCallback(() => {
    navigate("/dashboard-participants");
  }, [navigate]);

  const onSidenavContainer3Click = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  return (
    <div className="fashion-showsee-more">
      <Header />
      <div className="body24">
        <DashboardContainer1 />
        <div className="body25">
          <FormContainer1
            dimensions="/group.svg"
            onSidenavContainer1Click={onSidenavContainer1Click}
            onSidenavContainer3Click={onSidenavContainer3Click}
          />
          <div className="inside-body7">
            <div className="title2">
              <div className="arrow-back">
                <img className="vector-icon2" alt="" src="/vector8.svg" />
                <img className="vector-icon3" alt="" src="/vector9.svg" />
                <div className="back">Back</div>
              </div>
              <b className="fashion-show">Fashion Show</b>
            </div>
            <div className="table-wrapper">
              <div className="table1">
                <div className="div4">
                  <div className="frame-parent">
                    <div className="show-parent">
                      <div className="show">Show</div>
                      <div className="parent">
                        <div className="show">10</div>
                        <img
                          className="bicaret-down-fill-icon"
                          alt=""
                          src="/bicaretdownfill2.svg"
                        />
                      </div>
                      <div className="show">entries</div>
                    </div>
                    <div className="akar-iconssearch-parent">
                      <img
                        className="akar-iconssearch"
                        alt=""
                        src="/akariconssearch3.svg"
                      />
                      <div className="search">Search...</div>
                    </div>
                  </div>
                  <div className="fluentadd-16-filled-parent">
                    <img
                      className="akar-iconssearch"
                      alt=""
                      src="/fluentadd16filled2.svg"
                    />
                    <b className="add-participant">Add Participant</b>
                  </div>
                </div>
                <div className="table2">
                  <div className="frame-group">
                    <div className="number-wrapper">
                      <b className="number">Number</b>
                    </div>
                    <div className="name-parent">
                      <b className="number">Name</b>
                      <img
                        className="akar-iconssearch"
                        alt=""
                        src="/bxssortalt.svg"
                      />
                    </div>
                    <div className="dog-name-parent">
                      <b className="number">Dog Name</b>
                      <img
                        className="akar-iconssearch"
                        alt=""
                        src="/bxssortalt1.svg"
                      />
                    </div>
                    <div className="dog-breed-wrapper">
                      <b className="number">Dog Breed</b>
                    </div>
                    <div className="dog-breed-wrapper">
                      <b className="number">Size</b>
                    </div>
                    <div className="number-wrapper">
                      <b className="number">Action</b>
                    </div>
                  </div>
                  <div className="frame-group">
                    <div className="number-wrapper">
                      <div className="search">1</div>
                    </div>
                    <div className="wiktoria-wrapper">
                      <div className="search">Wiktoria</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Rem</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Maltese dog</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Small</div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="edit-1-2-parent">
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/edit-1-24.svg"
                        />
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/trash2-24.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent1">
                    <div className="number-wrapper">
                      <div className="search">2</div>
                    </div>
                    <div className="wiktoria-wrapper">
                      <div className="search">Trixie Byrd</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Ars</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Border Collie</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Medium</div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="edit-1-2-parent">
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/edit-1-24.svg"
                        />
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/trash2-24.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-group">
                    <div className="number-wrapper">
                      <div className="search">3</div>
                    </div>
                    <div className="wiktoria-wrapper">
                      <div className="search">Brad Mason</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Fauna</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Rottweiler</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Medium</div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="edit-1-2-parent">
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/edit-1-24.svg"
                        />
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/trash2-24.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent1">
                    <div className="number-wrapper">
                      <div className="search">4</div>
                    </div>
                    <div className="wiktoria-wrapper">
                      <div className="search">Sanderson</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Towa</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">
                        <p className="australian-shepherd1">
                          Australian Shepherd
                        </p>
                      </div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Medium</div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="edit-1-2-parent">
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/edit-1-24.svg"
                        />
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/trash2-24.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-group">
                    <div className="number-wrapper">
                      <div className="search">5</div>
                    </div>
                    <div className="wiktoria-wrapper">
                      <div className="search">Jun Redfern</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Watame</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Anatolian Shepherd Dog</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Medium</div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="edit-1-2-parent">
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/edit-1-24.svg"
                        />
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/trash2-24.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent1">
                    <div className="number-wrapper">
                      <div className="search">6</div>
                    </div>
                    <div className="wiktoria-wrapper">
                      <div className="search">Miriam Kidd</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Suisei</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Shih Tzu</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Small</div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="edit-1-2-parent">
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/edit-1-24.svg"
                        />
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/trash2-24.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-group">
                    <div className="number-wrapper">
                      <div className="search">7</div>
                    </div>
                    <div className="wiktoria-wrapper">
                      <div className="search">Dominic</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Croni</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">
                        <p className="australian-shepherd1">Labradoodle</p>
                      </div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Medium</div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="edit-1-2-parent">
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/edit-1-24.svg"
                        />
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/trash2-24.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent1">
                    <div className="number-wrapper">
                      <div className="search">8</div>
                    </div>
                    <div className="wiktoria-wrapper">
                      <div className="search">Shanice</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Botan</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Sarabi dog</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Large</div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="edit-1-2-parent">
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/edit-1-24.svg"
                        />
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/trash2-24.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="frame-group">
                    <div className="number-wrapper">
                      <div className="search">9</div>
                    </div>
                    <div className="wiktoria-wrapper">
                      <div className="search">Poppy-Rose</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Koro</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Chow Chow</div>
                    </div>
                    <div className="dog-breed-wrapper">
                      <div className="search">Medium</div>
                    </div>
                    <div className="frame-wrapper">
                      <div className="edit-1-2-parent">
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/edit-1-24.svg"
                        />
                        <img
                          className="trash-2-2-icon"
                          alt=""
                          src="/trash2-24.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div15">
                  <div className="show-parent">
                    <div className="previous1">Previous</div>
                    <div className="wrapper9">
                      <div className="div16">1</div>
                    </div>
                    <div className="wrapper10">
                      <div className="div16">2</div>
                    </div>
                    <div className="wrapper10">
                      <div className="div16">3</div>
                    </div>
                    <div className="previous1">Next</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionShowSeeMore;
