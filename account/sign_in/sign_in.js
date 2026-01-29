// 1. 가짜 사용자 데이터 (JSON 형태)
const userData = [
    { "username": "admin", "password": "password123", "nickname": "Pythava_Boss" },
    { "username": "guest", "password": "guest123", "nickname": "CyberTraveler" }
];

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    const idInput = document.getElementById('userId').value;
    const pwInput = document.getElementById('userPw').value;

    // 2. 로그인 로직
    const user = userData.find(u => u.username === idInput && u.password === pwInput);

    if (user) {
        // 로그인 성공
        alert(`[ACCESS GRANTED] 반가워요, ${user.nickname}님!`);
        
        // 세션/로컬스토리지에 로그인 정보 저장 (실제 서비스 흉내)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', user.nickname);
        
        // 메인 페이지로 이동
        window.location.href = "../../index.html"; 
    } else {
        // 로그인 실패
        alert("[ACCESS DENIED] 아이디 또는 비밀번호가 틀렸습니다.");
        
        // 실패 시 입력창 흔들리는 효과나 초기화 추가 가능
        document.getElementById('userPw').value = "";
    }
});
