import { useMemo } from "react";
import "./FormContainer2.css";

const FormContainer2 = ({
  imageSize,
  imageCode,
  imageCodeText,
  imageCodeIdentifier,
  imageCodeVariant,
  imageCodeIdentifierText,
  imageCodeIdentifierText2,
  imageCode2,
  imageCodeText2,
  imageCodeIdentifier2,
  imageCodeIdentifierText3,
  imageCodeIdentifierText4,
  imageCodeIdentifierSize,
  imageCodeIdentifierSizeTe,
  frameDivWidth,
}) => {
  const tableStyle = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  return (
    <div className="table4" style={tableStyle}>
      <div className="div41">
        <div className="frame-parent20">
          <div className="show-container">
            <div className="show2">Show</div>
            <div className="parent1">
              <div className="show2">10</div>
              <img
                className="bicaret-down-fill-icon2"
                alt=""
                src="/bicaretdownfill1.svg"
              />
            </div>
            <div className="show2">entries</div>
          </div>
          <div className="akar-iconssearch-container">
            <img
              className="akar-iconssearch2"
              alt=""
              src="/akariconssearch2.svg"
            />
            <div className="matt-dickerson">Search...</div>
          </div>
        </div>
        <div className="fluentadd-16-filled-container">
          <img
            className="akar-iconssearch2"
            alt=""
            src="/fluentadd16filled1.svg"
          />
          <b className="add-member">Add Member</b>
        </div>
        <b className="members1">Members</b>
      </div>
      <div className="table5">
        <div className="frame-parent21">
          <div className="id-wrapper">
            <b className="id">ID</b>
          </div>
          <div className="contact-parent">
            <b className="id">Name</b>
            <img className="akar-iconssearch2" alt="" src="/bxssortalt3.svg" />
          </div>
          <div className="last-name-parent">
            <b className="id">Last Name</b>
            <img className="akar-iconssearch2" alt="" src="/bxssortalt4.svg" />
          </div>
          <div className="sex-wrapper">
            <b className="id">Sex</b>
          </div>
          <div className="sex-wrapper">
            <b className="id">Email</b>
          </div>
          <div className="contact-parent">
            <b className="id">Contact #</b>
            <img className="akar-iconssearch2" alt="" src="/bxssortalt5.svg" />
          </div>
          <div className="id-wrapper">
            <b className="id">Action</b>
          </div>
        </div>
        <div className="frame-parent22">
          <div className="id-wrapper">
            <div className="matt-dickerson">#1</div>
          </div>
          <div className="matt-dickerson-wrapper">
            <div className="matt-dickerson">Matt Dickerson</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">13/05/2022</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">Male</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">matt@gmail.com</div>
          </div>
          <div className="frame-wrapper18">
            <div className="wrapper32">
              <div className="show2">09264955636</div>
            </div>
          </div>
          <div className="frame-wrapper19">
            <div className="edit-1-2-parent16">
              <img className="edit-1-218" alt="" src="/edit-1-22.svg" />
              <img className="edit-1-218" alt="" src="/trash2-22.svg" />
            </div>
          </div>
        </div>
        <div className="frame-parent21">
          <div className="id-wrapper">
            <div className="matt-dickerson">#2</div>
          </div>
          <div className="matt-dickerson-wrapper">
            <div className="matt-dickerson">Wiktoria</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">22/05/2022</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">Male</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">wik24@yahoo.com</div>
          </div>
          <div className="frame-wrapper18">
            <div className="wrapper32">
              <div className="show2">09586565626</div>
            </div>
          </div>
          <div className="frame-wrapper19">
            <div className="edit-1-2-parent16">
              <img className="edit-1-218" alt="" src={imageSize} />
              <img className="edit-1-218" alt="" src={imageCode} />
            </div>
          </div>
        </div>
        <div className="frame-parent22">
          <div className="id-wrapper">
            <div className="matt-dickerson">#3</div>
          </div>
          <div className="matt-dickerson-wrapper">
            <div className="matt-dickerson">Trixie Byrd</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">15/06/2022</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">Female</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">trix143@gmail.com</div>
          </div>
          <div className="frame-wrapper22">
            <div className="wrapper38">
              <div className="show2">09053455788</div>
            </div>
          </div>
          <div className="frame-wrapper19">
            <div className="edit-1-2-parent16">
              <img className="edit-1-218" alt="" src="/edit-1-22.svg" />
              <img className="edit-1-218" alt="" src="/trash2-22.svg" />
            </div>
          </div>
        </div>
        <div className="frame-parent21">
          <div className="id-wrapper">
            <div className="matt-dickerson">#4</div>
          </div>
          <div className="matt-dickerson-wrapper">
            <div className="matt-dickerson">Brad Mason</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">06/09/2022</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">Male</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">bard@yahoo.com</div>
          </div>
          <div className="frame-wrapper22">
            <div className="wrapper38">
              <div className="show2">09053587638</div>
            </div>
          </div>
          <div className="frame-wrapper19">
            <div className="edit-1-2-parent16">
              <img className="edit-1-218" alt="" src="/edit-1-22.svg" />
              <img className="edit-1-218" alt="" src="/trash2-22.svg" />
            </div>
          </div>
        </div>
        <div className="frame-parent22">
          <div className="id-wrapper">
            <div className="matt-dickerson">#5</div>
          </div>
          <div className="matt-dickerson-wrapper">
            <div className="matt-dickerson">Sanderson</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">25/09/2022</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">Female</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">sander@gmail.com</div>
          </div>
          <div className="frame-wrapper26">
            <div className="wrapper44">
              <div className="show2">09265875578</div>
            </div>
          </div>
          <div className="frame-wrapper19">
            <div className="edit-1-2-parent16">
              <img className="edit-1-218" alt="" src={imageCodeText} />
              <img className="edit-1-218" alt="" src={imageCodeIdentifier} />
            </div>
          </div>
        </div>
        <div className="frame-parent21">
          <div className="id-wrapper">
            <div className="matt-dickerson">#6</div>
          </div>
          <div className="matt-dickerson-wrapper">
            <div className="matt-dickerson">Jun Redfern</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">04/10/2022</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">Female</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">jun@yahoo.com</div>
          </div>
          <div className="frame-wrapper18">
            <div className="wrapper32">
              <div className="show2">09026587664</div>
            </div>
          </div>
          <div className="frame-wrapper19">
            <div className="edit-1-2-parent16">
              <img className="edit-1-218" alt="" src={imageCodeVariant} />
              <img
                className="edit-1-218"
                alt=""
                src={imageCodeIdentifierText}
              />
            </div>
          </div>
        </div>
        <div className="frame-parent22">
          <div className="id-wrapper">
            <div className="matt-dickerson">#7</div>
          </div>
          <div className="matt-dickerson-wrapper">
            <div className="matt-dickerson">Miriam Kidd</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">17/10/2022</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">Male</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">miria@gmail.com</div>
          </div>
          <div className="frame-wrapper18">
            <div className="wrapper32">
              <div className="show2">09225646963</div>
            </div>
          </div>
          <div className="frame-wrapper19">
            <div className="edit-1-2-parent16">
              <img
                className="edit-1-218"
                alt=""
                src={imageCodeIdentifierText2}
              />
              <img className="edit-1-218" alt="" src={imageCode2} />
            </div>
          </div>
        </div>
        <div className="frame-parent21">
          <div className="id-wrapper">
            <div className="matt-dickerson">#8</div>
          </div>
          <div className="matt-dickerson-wrapper">
            <div className="matt-dickerson">Dominic</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">24/10/2022</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">Male</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">dom24@gmail.com</div>
          </div>
          <div className="frame-wrapper18">
            <div className="wrapper32">
              <div className="show2">09264668936</div>
            </div>
          </div>
          <div className="frame-wrapper19">
            <div className="edit-1-2-parent16">
              <img className="edit-1-218" alt="" src={imageCodeText2} />
              <img className="edit-1-218" alt="" src={imageCodeIdentifier2} />
            </div>
          </div>
        </div>
        <div className="frame-parent22">
          <div className="id-wrapper">
            <div className="matt-dickerson">#9</div>
          </div>
          <div className="matt-dickerson-wrapper">
            <div className="matt-dickerson">Shanice</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">01/11/2022</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">Female</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">Shan12@gmail.com</div>
          </div>
          <div className="frame-wrapper26">
            <div className="wrapper44">
              <div className="show2">09256339684</div>
            </div>
          </div>
          <div className="frame-wrapper19">
            <div className="edit-1-2-parent16">
              <img
                className="edit-1-218"
                alt=""
                src={imageCodeIdentifierText3}
              />
              <img
                className="edit-1-218"
                alt=""
                src={imageCodeIdentifierText4}
              />
            </div>
          </div>
        </div>
        <div className="frame-parent21">
          <div className="id-wrapper">
            <div className="matt-dickerson">#10</div>
          </div>
          <div className="matt-dickerson-wrapper">
            <div className="matt-dickerson">Poppy-Rose</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">22/11/2022</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">Female</div>
          </div>
          <div className="sex-wrapper">
            <div className="matt-dickerson">poppy@gmail.com</div>
          </div>
          <div className="frame-wrapper22">
            <div className="wrapper38">
              <div className="show2">09264668633</div>
            </div>
          </div>
          <div className="frame-wrapper19">
            <div className="edit-1-2-parent16">
              <img
                className="edit-1-218"
                alt=""
                src={imageCodeIdentifierSize}
              />
              <img
                className="edit-1-218"
                alt=""
                src={imageCodeIdentifierSizeTe}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="div73">
        <div className="show-container">
          <div className="previous2">Previous</div>
          <div className="wrapper60">
            <div className="div74">1</div>
          </div>
          <div className="wrapper61">
            <div className="div74">2</div>
          </div>
          <div className="wrapper61">
            <div className="div74">3</div>
          </div>
          <div className="previous2">Next</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer2;
