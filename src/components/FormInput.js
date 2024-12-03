import { useState } from "react";

const FormInput = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">
        상담 신청을 위해
        <br />
        아래 정보를 입력해주세요
      </h2>
      <div className="form-group-container">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            이름
          </label>
          <input
            type="text"
            id="name"
            placeholder="이름을 입력해주세요"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="birthDate" className="form-label">
            생년월일 및 성별
          </label>
          <div className="birth-gender">
            <input
              type="text"
              id="birthDate"
              placeholder="주민번호 앞자리"
              className="form-input short-input"
            />
            <span className="dash">-</span>
            <input
              type="text"
              id="gender"
              placeholder="0"
              maxLength={1}
              className="form-input gender-input"
            />
            <span className="masked">******</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            휴대폰
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="'-'를 제외한 번호를 입력해주세요"
            className="form-input"
          />
        </div>
      </div>
      <div className="agreement-container">
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="agreement"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="checkbox-input"
          />
          <label htmlFor="agreement" className="checkbox-label">
            모두 동의합니다
          </label>
        </div>
        <hr className="separator" />
        <div className="details">
          <span>개인정보 수집·이용 동의</span>
          <span className="arrow">›</span>
        </div>
      </div>
      <button className="submit-button" disabled={!isChecked}>
        전화상담 신청 <span>(현대해상 정규직원이 상담)</span>
      </button>
    </div>
  );
};

export default FormInput;
