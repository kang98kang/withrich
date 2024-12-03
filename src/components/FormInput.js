import { useState } from 'react';
import Modal from './Modal';

const FormInput = () => {
  const [isModal, setIsModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    gender: '',
    phone: '',
  });
  const [error, setError] = useState('');

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleModal = () => {
    setIsModal(true);
  };
  const handleCloseModal = () => {
    setIsModal(false);
  };
  const handleConsole = () => {
    if (Object.values(formData).some((value) => value.trim() === '')) {
      alert('모든 필드를 작성해주세요.');
      return;
    }
    console.log('Form Data:', formData);
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
            value={formData.name}
            onChange={handleInputChange}
            type="email"
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
              value={formData.birthDate}
              onChange={handleInputChange}
              type="text"
              id="birthDate"
              placeholder="주민번호 앞자리"
              className="form-input short-input"
            />
            <span className="dash">-</span>
            <input
              value={formData.gender}
              onChange={handleInputChange}
              type="text"
              id="gender"
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
            value={formData.phone}
            onChange={handleInputChange}
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
            동의합니다
          </label>
        </div>
        <hr className="separator" />
        <div className="details">
          <span onClick={handleModal}>개인정보 수집·이용 동의</span>
          <span onClick={handleModal} className="arrow">
            ›
          </span>
          <Modal isOpen={isModal} onClose={handleCloseModal} />
        </div>
      </div>
      <button onClick={handleConsole} className="submit-button" disabled={!isChecked}>
        전화상담 신청
      </button>
    </div>
  );
};

export default FormInput;
