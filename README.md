# GiftHub Frontend Server

> **KOSTA 266기 최종 프로젝트** <br/> **개발기간: 2023.12 ~ 2023.12** <br/> 팀원 : 4명


## 프로젝트 소개
- 기프티콘을 등록하여 사용하는 통합관리를 서비스.
- 바코드로 결제가 가능한 모바일 상품권을 대상으로 함. 3사(카카오톡, kt기프티쇼, sk기프티콘)
- 웹 프로젝트의 프론트엔드 서버

👉 [Bankend Server](https://github.com/9min9/Gifthub)

---
#### 

## Stacks 🐈

### Environment
![intellij](https://img.shields.io/badge/intellij-000000?style=for-the-badge&logo=intellijidea&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### Front-end
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### Server

![AWS](https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)
![AWS](https://img.shields.io/badge/AWS_S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)
![AWS](https://img.shields.io/badge/AWS_RDS-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white)


### Communication
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white)

---

## 주요 기능 🎁

### 🛒 소셜 회원가입 및 Jwt 사용
- 소셜 로그인 시 API를 통해 받은 정보를 사용하여 JWT를 구현
- 소셜 로그인의 API의 인증 토큰을 사용하지 않으므로 보안부담 감소

### 🛒 기프티콘 등록 및 사용
- 카카오 챗봇, 파일로 등록시 Naver Cloud Ocr을 사용하여 읽은 값을 DB의 Product 테이블을 통해 검증
- 기프티콘 등록 시 DB의 Product 테이블에 존재하는 상품이면 바로 기프티콘 등록, 존재하지 않는 상품이면 관리자의 검수를 통해 등록 처리
- 기프티콘으로 등록되면 입력했던 사진은 보안상 이유로 서버에서 삭제
- 사용 시 기프티콘 바코드 이미지를 생성하고 SMS를 통해 전송

### 🛒 기프티콘 거래 및 포인트 충전
- 등록 처리된 기프티콘은 판매 가능
- 카카오 페이를 통해 포인트 충전, 충전된 포인트로 기프티콘을 구매

### 관리자
- Product DB을 초기화 기프티콘 API excel 파일을 통해 Product DB에 상품을 등록
- 검수 상태의 기프티콘을 확인하여 검수 완료 및 거절

---
## 화면 구성 📺

### 메인 화면

![index](https://github.com/9min9/GiftHub/assets/130825350/cd347e71-0894-40c1-8a1f-33bb185702c9)

---

### 회원가입 / 로그인
![회원가입,로그인](https://github.com/9min9/Gifthub-Client/assets/130825350/058b2afa-45e0-4d1d-97ab-1d325dd0ec2e)

 👉 [자세히 보기](https://github.com/9min9/Gifthub-Client/wiki/%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85,-%EB%A1%9C%EA%B7%B8%EC%9D%B8)

---

### 기프티콘 등록 및 사용

![리드미_기프티콘등록](https://github.com/9min9/Gifthub-Client/assets/130825350/be48d746-bbab-4d5a-8503-8c8a0a4049f7)
![기프티콘 사용](https://github.com/9min9/Gifthub-Client/assets/130825350/a4dc35a2-5edb-4449-877a-3c274948513f)

 👉 [자세히 보기](https://github.com/9min9/Gifthub-Client/wiki/%EA%B8%B0%ED%94%84%ED%8B%B0%EC%BD%98-%EB%93%B1%EB%A1%9D-%EB%B0%8F-%EC%82%AC%EC%9A%A9)

---

### 기프티콘 거래 및 포인트 충전

![판매,결제](https://github.com/9min9/Gifthub-Client/assets/130825350/264ff2c7-8ba2-452b-a4ce-92b78969ac26)

 👉 [자세히 보기](https://github.com/9min9/Gifthub-Client/wiki/%EA%B8%B0%ED%94%84%ED%8B%B0%EC%BD%98-%EA%B1%B0%EB%9E%98-%EB%B0%8F-%ED%8F%AC%EC%9D%B8%ED%8A%B8-%EC%B6%A9%EC%A0%84)

---

### 내 정보

![내정보](https://github.com/9min9/Gifthub-Client/assets/130825350/00ebe7f9-ec40-45b6-b0e3-828625b06b33)

---

## 아키텍쳐


```
Page        >    Section    >    Container    >    Wrapper (card, row, box ...)    >    Component
UseState         UseState
UesEffect        UesEffect
```
- 상태관리를 용이하게 하기 위해 Page와 Section 단위에서 UseState와 UseEffect를 사용



<details><summary>프로젝트 구조</summary>
<div markdown="1">

```
src
 ┣ components
 ┃ ┣ account
 ┃ ┃ ┣ login
 ┃ ┃ ┃ ┣ LoginForm.js
 ┃ ┃ ┃ ┣ LoginInBtnWrapper.js
 ┃ ┃ ┃ ┣ LoginInputWrapper.js
 ┃ ┃ ┃ ┗ SocialLoginWrapper.js
 ┃ ┃ ┣ signup
 ┃ ┃ ┃ ┣ MesseageWrapper.js
 ┃ ┃ ┃ ┣ SignupForm.js
 ┃ ┃ ┃ ┗ SignupInputWrapper.js
 ┃ ┃ ┣ AuthContextProvider.js
 ┃ ┃ ┗ UserProfile.js
 ┃ ┣ admin
 ┃ ┃ ┣ product
 ┃ ┃ ┃ ┣ ConfirmResultSelector.js
 ┃ ┃ ┃ ┣ GifticonTableBody.js
 ┃ ┃ ┃ ┣ IsConfrimRadioWrapper.js
 ┃ ┃ ┃ ┗ ProductManagementSection.js
 ┃ ┃ ┣ AdminIndexSection.js
 ┃ ┃ ┗ AdminSidebar.js
 ┃ ┣ attendance
 ┃ ┃ ┣ Attendance.js
 ┃ ┃ ┗ DayComponent.js
 ┃ ┣ cart
 ┃ ┃ ┣ cart
 ┃ ┃ ┃ ┣ CartContainer.js
 ┃ ┃ ┃ ┣ CartPriceContainer.js
 ┃ ┃ ┃ ┣ CartSection.js
 ┃ ┃ ┃ ┣ CartTableWrapper.js
 ┃ ┃ ┃ ┣ CartWrapper.js
 ┃ ┃ ┃ ┣ ClearCartWrapper.js
 ┃ ┃ ┃ ┣ CurrentPositionContainer.js
 ┃ ┃ ┃ ┗ UpdateCartWrapper.js
 ┃ ┃ ┗ mini-cart
 ┃ ┃ ┃ ┣ MiniCartButtonContainer.js
 ┃ ┃ ┃ ┣ MiniCartContainer.js
 ┃ ┃ ┃ ┣ MiniCartDeleteIcon.js
 ┃ ┃ ┃ ┣ MiniCartImageWrapper.js
 ┃ ┃ ┃ ┣ MiniCartInfoWrapper.js
 ┃ ┃ ┃ ┗ MiniCartTotalPriceContainer.js
 ┃ ┣ checkout
 ┃ ┃ ┣ CheckoutListContainer.js
 ┃ ┃ ┣ CheckoutListWrapper.js
 ┃ ┃ ┣ CheckoutPayContainer.js
 ┃ ┃ ┗ CheckoutSection.js
 ┃ ┣ common
 ┃ ┃ ┣ Footer.js
 ┃ ┃ ┣ Header.js
 ┃ ┃ ┣ NotForbidden.js
 ┃ ┃ ┣ NotFound.js
 ┃ ┃ ┣ Preloader.js
 ┃ ┃ ┗ Sidebar.js
 ┃ ┣ gifticion
 ┃ ┃ ┣ GiftiBotContainer.js
 ┃ ┃ ┣ GifticonAddForm.js
 ┃ ┃ ┣ GifticonAddModal.js
 ┃ ┃ ┣ GifticonHiddenInfo.js
 ┃ ┃ ┣ GifticonIntroContainer.js
 ┃ ┃ ┣ GifticonItemContainer.js
 ┃ ┃ ┣ GifticonItemImage.js
 ┃ ┃ ┣ GifticonItemInfo.js
 ┃ ┃ ┣ GifticonItemIntro.js
 ┃ ┃ ┗ GifticonItemSection.js
 ┃ ┣ history
 ┃ ┃ ┣ order
 ┃ ┃ ┃ ┣ OrderContainer.js
 ┃ ┃ ┃ ┗ OrderHistorySection.js
 ┃ ┃ ┗ payment
 ┃ ┃ ┃ ┣ PaymentContainer.js
 ┃ ┃ ┃ ┗ PaymentHistorySection.js
 ┃ ┣ modal
 ┃ ┃ ┗ newsletter
 ┃ ┃ ┃ ┣ NewsletterFormButton.js
 ┃ ┃ ┃ ┣ NewsletterFormErrorWrapper.js
 ┃ ┃ ┃ ┣ NewsletterH3.js
 ┃ ┃ ┃ ┣ NewsletterInfoSection.js
 ┃ ┃ ┃ ┣ NewsletterInputWrapper.js
 ┃ ┃ ┃ ┣ NewsletterModal.js
 ┃ ┃ ┃ ┣ NewsletterModalHead.js
 ┃ ┃ ┃ ┣ NewsletterModalImageSection.js
 ┃ ┃ ┃ ┣ NewsletterModalSubSubTitleWrapper.js
 ┃ ┃ ┃ ┗ NewsletterModalTitleWrapper.js
 ┃ ┣ mypage
 ┃ ┃ ┣ dashboard
 ┃ ┃ ┃ ┣ DashboardButtonWrapper.js
 ┃ ┃ ┃ ┣ DashboardContentWrapper.js
 ┃ ┃ ┃ ┗ DashboardTitleContainer.js
 ┃ ┃ ┣ MyPageContentSection.js
 ┃ ┃ ┗ MyPageTitleContainer.js
 ┃ ┣ payment
 ┃ ┃ ┣ OrderSummaryContainer.js
 ┃ ┃ ┣ OrderSummaryWrapper.js
 ┃ ┃ ┣ PaymentSection.js
 ┃ ┃ ┣ PriceSelectorWrapper.js
 ┃ ┃ ┗ RadioBox.js
 ┃ ┣ product
 ┃ ┃ ┣ BrandComponent.js
 ┃ ┃ ┣ BrandContainer.js
 ┃ ┃ ┣ CategoryComponent.js
 ┃ ┃ ┣ CategoryContainer.js
 ┃ ┃ ┣ ImageModalTableContainer.js
 ┃ ┃ ┣ ModalInfoSection.js
 ┃ ┃ ┣ ProductCard.js
 ┃ ┃ ┣ ProductListContainer.js
 ┃ ┃ ┗ ProductSection.js
 ┃ ┗ ui
 ┃ ┃ ┣ button
 ┃ ┃ ┃ ┣ DashOutlineButton.js
 ┃ ┃ ┃ ┣ DashTextButton.js
 ┃ ┃ ┃ ┣ KakaoLoginButton.js
 ┃ ┃ ┃ ┣ KakaoPayButton.js
 ┃ ┃ ┃ ┣ NaverLoginButton.js
 ┃ ┃ ┃ ┣ OutlineButton.js
 ┃ ┃ ┃ ┣ PrimaryBtn.js
 ┃ ┃ ┃ ┣ PrimaryButton.js
 ┃ ┃ ┃ ┣ SelectorButton.js
 ┃ ┃ ┃ ┗ WhiteButton.js
 ┃ ┃ ┣ dashboard
 ┃ ┃ ┃ ┣ DashboardH1.js
 ┃ ┃ ┃ ┣ DashboardH2.js
 ┃ ┃ ┃ ┗ DashboardSpan.js
 ┃ ┃ ┣ form
 ┃ ┃ ┃ ┣ Input.js
 ┃ ┃ ┃ ┣ InputNumber.js
 ┃ ┃ ┃ ┣ InputWithLabel.js
 ┃ ┃ ┃ ┣ Label.js
 ┃ ┃ ┃ ┣ MessageDiv.js
 ┃ ┃ ┃ ┣ RadioButton.js
 ┃ ┃ ┃ ┗ SelectorButton.js
 ┃ ┃ ┣ image-card
 ┃ ┃ ┃ ┣ Image.js
 ┃ ┃ ┃ ┗ ImageContent.js
 ┃ ┃ ┣ link
 ┃ ┃ ┃ ┣ GlLink.js
 ┃ ┃ ┃ ┣ RouteBox.js
 ┃ ┃ ┃ ┗ RouteBoxLink.js
 ┃ ┃ ┣ logo
 ┃ ┃ ┃ ┗ TextLogo.js
 ┃ ┃ ┣ modal
 ┃ ┃ ┃ ┗ image-modal
 ┃ ┃ ┃ ┃ ┣ ImageSection.js
 ┃ ┃ ┃ ┃ ┗ Modal.js
 ┃ ┃ ┣ Image.js
 ┃ ┃ ┗ useIntersectionObserver.js
 ┣ css
 ┃ ┣ custom
 ┃ ┃ ┣ attendance.css
 ┃ ┃ ┣ custom.css
 ┃ ┃ ┣ index.css
 ┃ ┃ ┗ payment.css
 ┃ ┣ utility.css
 ┃ ┗ vendor.css
 ┣ dev
 ┣ hooks
 ┃ ┣ useGifticonAddFormInput.js
 ┃ ┗ useNewsletterModal.js
 ┣ pages
 ┃ ┣ account
 ┃ ┃ ┣ Login.js
 ┃ ┃ ┣ MyPage.js
 ┃ ┃ ┗ Signup.js
 ┃ ┣ admin
 ┃ ┃ ┣ AdminIndex.js
 ┃ ┃ ┗ ProductManagement.js
 ┃ ┣ cart
 ┃ ┃ ┣ Cart.js
 ┃ ┃ ┗ MiniCart.js
 ┃ ┣ checkout
 ┃ ┃ ┗ Checkout.js
 ┃ ┣ gifticon
 ┃ ┃ ┣ GifticonStorage.js
 ┃ ┃ ┗ MyGifticon.js
 ┃ ┣ history
 ┃ ┃ ┣ OrderHistory.js
 ┃ ┃ ┗ PaymentHistory.js
 ┃ ┣ payment
 ┃ ┃ ┗ Payment.js
 ┃ ┣ product
 ┃ ┃ ┗ Product.js
 ┃ ┣ PageRedirect.js
 ┃ ┗ Router.js
 ┣ App.css
 ┣ App.js
 ┣ App.test.js
 ┣ index.css
 ┣ index.js
 ┣ logo.svg
 ┣ reportWebVitals.js
 ┗ setupTests.js

```
</div>
</details>




