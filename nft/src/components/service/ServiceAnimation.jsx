import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ServiceAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  return (
    <div className="service_list">

      <div className="roadmap_tree" style={{
            backgroundImage: `url(${
              "img/service/rmbg_tree.png"
            })`}}>
      <ul>
        <li>
          <div
            className="list_inner"
            onClick={toggleModalOne}
            data-aos="fade-down-right"
            data-aos-duration="1200"
          >
            <img className="roadmap_image" src="img/service/S1.png" alt='' />
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Motion Graphy */}
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModalOne}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalOne}>
                <img src="img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    {/* <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            "img/service/1.jpg"
                          })`,
                        }}
                      ></div>
                    </div> */}
                    <div className="description">
                      <h3>굿즈 제작 및 배포</h3>
                      <p>
                      리들헤드를 즐길 방법이 NFT뿐이라면 아쉽겠죠? 홀더들을 위한 의류, 문구, 액자 등 다양한 종류의 굿즈가 준비되어 있습니다!<br/>
                      굿즈들은 홀더들이 참여할 수 있는 재미있는 이벤트들을 통해 배포됩니다. 리들헤드를 더욱 다양하게 즐겨보세요!<br/>
                      </p>
                      <h3>온/오프라인 전시회</h3>
                      <p>
                      규모와 상황에 따라 타 프로젝트 작가님들과 협력하여 전시회를 개최할 계획입니다.<br/>
                      온라인일 경우 제패토, 크립토 복셀등 개최에 적합한 플랫폼에, 오프라인일 경우 전시 공간 대여 후 전시 진행합니다.<br/>
                      또한 전시회 참여 시 굿즈, NFT, 기프티콘 등 다양한 상품이 증정됩니다. 자유롭게 참가하셔서 구경하시고 멋진 상품들을 받아 가세요!<br/>
                      </p>
                      {/* <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Motion Graphy */}
        </li>
        
        <div className="space10"/>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalTwo}
            data-aos="fade-down-right"
            data-aos-duration="1200"
            // data-aos-delay="100"
          >
            <img className="roadmap_image" src="img/service/S2.png" alt='' />
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Branding & Design */}
          <Modal
            isOpen={isOpen2}
            onRequestClose={toggleModalTwo}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalTwo}>
                <img src="img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    {/* <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            "img/service/2.jpg"
                          })`,
                        }}
                      ></div>
                    </div> */}
                    <div className="description">
                      <h3>커뮤니티 관리</h3>
                      <p>
                        리들헤드에선 크고 작은 다양한 이벤트들이 진행됩니다. 홀더들을 위한 이벤트부터 오픈 채팅방 참여자들 또한 즐길 수 있는 내용으로 
                        준비해두었습니다. 이벤트를 통해 서로 간의 활발한 소통이 이루어질 수 있는 분위기를 조성하겠습니다!
                      </p>
                      <p>
                        채팅방은 누군가를 불쾌하게 만들지 않는 선에서 자유롭게 이야기하시기를 권장합니다.
                        단, 운영에 대한 제의나 토론은 거버넌스 시스템 기반의 쾌적한 토론의 장을 제공할 계획입니다.
                        오늘 먹은 저녁이나 이번에 구매한 NFT를 자랑해보시는 것은 어떨까요?
                      </p>
                      {/* <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Branding & Design */}
        </li>

        <div className="space10"/>
        
        <li>
          <div
            className="list_inner"
            onClick={toggleModalThree}
            data-aos="fade-down-right"
            data-aos-duration="1200"
            // data-aos-delay="200"
          >
            <img className="roadmap_image" src="img/service/S3.png" alt='' />
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Mobile App Design */}
          <Modal
            isOpen={isOpen3}
            onRequestClose={toggleModalThree}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalThree}>
                <img src="img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    {/* <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            "img/service/3.jpg"
                          })`,
                        }}
                      ></div>
                    </div> */}
                    <div className="description">
                      <h3>만나서 반갑습니다!</h3>
                      <p>
                        여러 작가분과 컨텍하며 재미있는 콜라보를 진행하려고 합니다. 이벤트, 작품 등 서로의 커뮤니티를 긍정적으로 방향으로 진흥하는 것이 목적입니다.<br/>
                        또한 서로의 프로젝트 진행 방향이 통한다고 판단되면 협력 관계를 구축해 혼자선 할 수 없는 새로운 컨텐츠들을 시도해보겠습니다.<br/>
                      </p>
                      <h3>CrayonBets</h3>
                      <p>
                        현재 커뮤니티 협력 그룹인 CrayonBets에 활동하고 있습니다.<br/>
                        앞으로 들어올 신생 작가분들, 선배 작가분들과 어우러져 멋진 시너지를 내보도록 하겠습니다!<br/>
                      </p>
                      
                      {/* <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Mobile App Design*/}
        </li>

        <div className="space10"/>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalFour}
            data-aos="fade-down-right"
            data-aos-duration="1200"
            // data-aos-delay="300"
          >
            <img className="roadmap_image" src="img/service/S4.png" alt='' />
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Modal Ui/Ux Consultancy */}
          <Modal
            isOpen={isOpen4}
            onRequestClose={toggleModalFour}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalFour}>
                <img src="img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    {/* <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            "img/service/4.jpg"
                          })`,
                        }}
                      ></div>
                    </div> */}
                    <div className="description">
                      <h3>더 멋지고, 개성 있게!</h3>
                      <p>
                        10,000개의 NFT의 민팅이 마무리될 즈음, V2 컬렉션 제작에 들어가 V1 민팅을 모두 마치면 선보일 예정입니다.<br/>
                        아직은 구체적인 디자인이 뽑히지 않았지만, 아마 다리가 생길지도?<br/>
                        또한 V1 홀더들을 위한 혜택이 있습니다! 홀딩한 V1 NFT의 비율에 따라 V2 NFT를 지급해드립니다.<br/>
                      </p>
                      {/* <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Ui/Ux Consultancy*/}
        </li>

        <div className="space20"/>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalFive}
            data-aos="fade-down-right"
            data-aos-duration="1200"
            // data-aos-delay="300"
          >
            <img className="roadmap_image" src="img/service/S5.png" alt='' />
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Modal Ui/Ux Consultancy */}
          <Modal
            isOpen={isOpen5}
            onRequestClose={toggleModalFive}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalFive}>
                <img src="img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    {/* <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            "img/service/4.jpg"
                          })`,
                        }}
                      ></div>
                    </div> */}
                    <div className="description">
                      <h3>NFT 가치의 보존</h3>
                      <p>
                        리들헤드는 FP의 하락에 대비하여 일정 금액 이하로 내려갈 시 해당 NFT를 바이백하겠습니다.<br/>
                        바이백한 NFT는 추첨 이벤트를 통해 홀더분들에게 에어드롭 할 예정입니다.<br/>
                        지속적으로 컬렉션을 관리하여 홀더분들이 안심하고 리들헤드를 즐길 수 있도록 노력하겠습니다.<br/>
                      </p>
                      {/* <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div>
                      <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Ui/Ux Consultancy*/}
        </li>

        <div className="space20"/>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalSix}
            data-aos="fade-down-right"
            data-aos-duration="1200"
            // data-aos-delay="300"
          >
            <img className="roadmap_image" src="img/service/S6.png" alt='' />
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Modal Ui/Ux Consultancy */}
          <Modal
            isOpen={isOpen6}
            onRequestClose={toggleModalSix}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalSix}>
                <img src="img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    {/* <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            "img/service/4.jpg"
                          })`,
                        }}
                      ></div>
                    </div> */}
                    <div className="description">
                      <h3>
                        커뮤니티 코인 발행
                      </h3>
                      <p>
                        CrayonBets 소속 커뮤니티 홀더들을 위한 전용 코인을 발행할 계획입니다.<br/>
                        해당 코인으로 원하는 CrayonBets 컬렉션의 민팅을 진행하실 수 있고 코인 증정에 관한 이벤트의 경우엔 작가님들과 충분히 상의 후 진행할 것입니다.<br/>
                        코인의 추가적인 사용 방법 또한 결정되면 로드맵에 업데이트하겠습니다.<br/>
                      </p>
                      {/* <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Ui/Ux Consultancy*/}
        </li>
      </ul>
    </div> 

    {/* Mobile */}

    <div className="roadmap_tree-mobile" style={{
            backgroundImage: `url(${
              "img/service/rmbg_tree_m.png"
            })`}}>
      <ul>
        <li>
          <div
            className="list_inner"
            onClick={toggleModalOne}
            data-aos="fade-down-right"
            data-aos-duration="1200"
          >
            <img className="roadmap_image" src="img/service/S1.png" alt='' />
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Motion Graphy */}
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModalOne}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalOne}>
                <img src="img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    {/* <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            "img/service/1.jpg"
                          })`,
                        }}
                      ></div>
                    </div> */}
                    <div className="description">
                      <h3>굿즈 제작 및 배포</h3>  
                      <p>
                        리들헤드를 즐길 방법이 NFT뿐이라면 아쉽겠죠? 홀더들을 위한 의류, 문구, 액자 등 다양한 종류의 굿즈가 준비되어 있습니다!<br/>
                        굿즈들은 홀더들이 참여할 수 있는 재미있는 이벤트들을 통해 배포됩니다. 리들헤드를 더욱 다양하게 즐겨보세요!<br/>
                      </p>
                      <h3>온/오프라인 전시회</h3>
                      <p>
                        규모와 상황에 따라 타 프로젝트 작가님들과 협력하여 전시회를 개최할 계획입니다.<br/>
                        온라인일 경우 제패토, 크립토 복셀등 개최에 적합한 플랫폼에, 오프라인일 경우 전시 공간 대여 후 전시 진행합니다.<br/>
                        또한 전시회 참여 시 굿즈, NFT, 기프티콘 등 다양한 상품이 증정됩니다. 자유롭게 참가하셔서 구경하시고 멋진 상품들을 받아 가세요!<br/>
                      </p>
                      {/* <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Motion Graphy */}
        </li>
        
        <div className="space10"/>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalTwo}
            data-aos="fade-down-right"
            data-aos-duration="1200"
            // data-aos-delay="100"
          >
            <img className="roadmap_image" src="img/service/S2.png" alt='' />
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Branding & Design */}
          <Modal
            isOpen={isOpen2}
            onRequestClose={toggleModalTwo}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalTwo}>
                <img src="img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    {/* <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            "img/service/2.jpg"
                          })`,
                        }}
                      ></div>
                    </div> */}
                    <div className="description">
                      <h3>커뮤니티 관리</h3>
                      <p>
                        리들헤드에선 크고 작은 다양한 이벤트들이 진행됩니다. 홀더들을 위한 이벤트부터 오픈 채팅방 참여자들 또한 즐길 수 있는 내용으로 
                        준비해두었습니다. 이벤트를 통해 서로 간의 활발한 소통이 이루어질 수 있는 분위기를 조성하겠습니다!
                      </p>
                      <p>
                        채팅방은 누군가를 불쾌하게 만들지 않는 선에서 자유롭게 이야기하시기를 권장합니다.
                        단, 운영에 대한 제의나 토론은 거버넌스 시스템 기반의 쾌적한 토론의 장을 제공할 계획입니다.
                        오늘 먹은 저녁이나 이번에 구매한 NFT를 자랑해보시는 것은 어떨까요?
                      </p>
                      {/* <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Branding & Design */}
        </li>

        <div className="space10"/>
        
        <li>
          <div
            className="list_inner"
            onClick={toggleModalThree}
            data-aos="fade-down-right"
            data-aos-duration="1200"
            // data-aos-delay="200"
          >
            <img className="roadmap_image" src="img/service/S3.png" alt='' />
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Mobile App Design */}
          <Modal
            isOpen={isOpen3}
            onRequestClose={toggleModalThree}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalThree}>
                <img src="img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    {/* <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            "img/service/3.jpg"
                          })`,
                        }}
                      ></div>
                    </div> */}
                    <div className="description">
                      <h3>만나서 반갑습니다!</h3>
                      <p>
                        여러 작가분과 컨텍하며 재미있는 콜라보를 진행하려고 합니다. 이벤트, 작품 등 서로의 커뮤니티를 긍정적으로 방향으로 진흥하는 것이 목적입니다.<br/>
                        또한 서로의 프로젝트 진행 방향이 통한다고 판단되면 협력 관계를 구축해 혼자선 할 수 없는 새로운 컨텐츠들을 시도해보겠습니다.<br/>
                      </p>
                      <h3>CrayonBets</h3>
                      <p>
                        현재 커뮤니티 협력 그룹인 CrayonBets에 활동하고 있습니다.<br/>
                        앞으로 들어올 신생 작가분들, 선배 작가분들과 어우러져 멋진 시너지를 내보도록 하겠습니다!<br/>
                      </p>
                      {/* <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Mobile App Design*/}
        </li>

        <div className="space10"/>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalFour}
            data-aos="fade-down-right"
            data-aos-duration="1200"
            // data-aos-delay="300"
          >
            <img className="roadmap_image" src="img/service/S4.png" alt='' />
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Modal Ui/Ux Consultancy */}
          <Modal
            isOpen={isOpen4}
            onRequestClose={toggleModalFour}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalFour}>
                <img src="img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    {/* <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            "img/service/4.jpg"
                          })`,
                        }}
                      ></div>
                    </div> */}
                    <div className="description">
                      <h3>더 멋지고, 개성 있게!</h3>
                      <p>
                        10,000개의 NFT의 민팅이 마무리될 즈음, V2 컬렉션 제작에 들어가 V1 민팅을 모두 마치면 선보일 예정입니다.<br/>
                        아직은 구체적인 디자인이 뽑히지 않았지만, 아마 다리가 생길지도?<br/>
                        또한 V1 홀더들을 위한 혜택이 있습니다! 홀딩한 V1 NFT의 비율에 따라 V2 NFT를 지급해드립니다.<br/>
                      </p>
                      {/* <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Ui/Ux Consultancy*/}
        </li>

        <div className="space20"/>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalFive}
            data-aos="fade-down-right"
            data-aos-duration="1200"
            // data-aos-delay="300"
          >
            <img className="roadmap_image" src="img/service/S5.png" alt='' />
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Modal Ui/Ux Consultancy */}
          <Modal
            isOpen={isOpen5}
            onRequestClose={toggleModalFive}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalFive}>
                <img src="img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    {/* <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            "img/service/4.jpg"
                          })`,
                        }}
                      ></div>
                    </div> */}
                    <div className="description">
                      <h3>NFT 가치의 보존</h3>
                      <p>
                        리들헤드는 FP의 하락에 대비하여 일정 금액 이하로 내려갈 시 해당 NFT를 바이백하겠습니다.<br/>
                        바이백한 NFT는 추첨 이벤트를 통해 홀더분들에게 에어드롭 할 예정입니다.<br/>
                        지속적으로 컬렉션을 관리하여 홀더분들이 안심하고 리들헤드를 즐길 수 있도록 노력하겠습니다.<br/>
                      </p>
                      {/* <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Ui/Ux Consultancy*/}
        </li>

        <div className="space20"/>

        <li>
          <div
            className="list_inner"
            onClick={toggleModalSix}
            data-aos="fade-down-right"
            data-aos-duration="1200"
            // data-aos-delay="300"
          >
            <img className="roadmap_image" src="img/service/S6.png" alt='' />
            <div className="learn_more">
              Learn More<span></span>
            </div>
          </div>

          {/* Start Modal Modal Ui/Ux Consultancy */}
          <Modal
            isOpen={isOpen6}
            onRequestClose={toggleModalSix}
            contentLabel="My dialog"
            className="custom-modal"
            overlayClassName="custom-overlay"
            closeTimeoutMS={500}
          >
            <div className="beny_tm_modalbox_service">
              <button className="close-modal" onClick={toggleModalSix}>
                <img src="img/svg/cancel.svg" alt="close icon" />
              </button>
              {/* End close icon */}

              <div className="box_inner">
                <div className="description_wrap scrollable">
                  <div className="popup_informations">
                    {/* <div className="image">
                      <img src="img/thumbs/4-3.jpg" alt="" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url(${
                            "img/service/4.jpg"
                          })`,
                        }}
                      ></div>
                    </div> */}
                    <div className="description">
                      <h3>
                        커뮤니티 코인 발행
                      </h3>
                      <p>
                        CrayonBets 소속 커뮤니티 홀더들을 위한 전용 코인을 발행할 계획입니다.<br/>
                        해당 코인으로 원하는 CrayonBets 컬렉션의 민팅을 진행하실 수 있고 코인 증정에 관한 이벤트의 경우엔 작가님들과 충분히 상의 후 진행할 것입니다.<br/>
                        코인의 추가적인 사용 방법 또한 결정되면 로드맵에 업데이트하겠습니다.<br/>
                      </p>
                      {/* <div className="in_list">
                        <ul>
                          <li>
                            <p>Email is a crucial channel in any marketing.</p>
                          </li>
                          <li>
                            <p>Curious what to say? How to say it?</p>
                          </li>
                          <li>
                            <p>Whether you’re kicking off a new ca mpaign.</p>
                          </li>
                          <li>
                            <p>
                              Habitasse per feugiat aliquam luctus accumsan
                              curae
                            </p>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End box inner */}
            </div>
            {/* End modal box news */}
          </Modal>
          {/* End Modal Ui/Ux Consultancy*/}
        </li>
      </ul>
    </div> 

    </div>
  );
};

export default ServiceAnimation;
