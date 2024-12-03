const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">개인정보 수집, 이용 및 제3자 정보제공동의</h2>
        <div className="modal-content">
          <p>(주)위드리치는 아래와 같이 고객님의 개인정보를 수집, 이용합니다.</p>
          <ol>
            <li>
              <strong>- 개인정보의 수집·이용의 목적</strong>
              <ul>
                <li>달러종신보험 가입 상담 및 기타 보험상품 추천</li>
              </ul>
            </li>
            <li>
              <strong>- 수집하는 개인정보의 항목</strong>
              <ul>
                <li>성명, 생년월일, 성별, 휴대폰번호</li>
              </ul>
            </li>
            <li>
              <strong>- 개인정보의 보유 및 이용 기간</strong>
              <ul>
                <li>보험가입 상담 완료 시점까지</li>
              </ul>
            </li>
            <li>
              <strong>- 개인(신용) 정보를 제공받는자</strong>
              <p>(주) 위드리치, (주) 글로벌금융판매</p>
            </li>
            <li>
              <strong>- 동의거부권</strong>
              <p>
                고객은 개인정보 수집·이용에 대한 동의를 거부할 권리가 있습니다. 다만, 동의를 거부할 경우 보험상품 상담
                및 추천을 받으실 수 없으며, 기타 혜택을 받으실 수 없습니다.
              </p>
            </li>
          </ol>
        </div>
        <button onClick={onClose} className="modal-close-button">
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
