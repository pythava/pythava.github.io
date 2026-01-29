// 가짜 DB
const fakeUsers = [
    { id: "admin", pw: "1234", nickname: "Pythava_Admin" },
    { id: "guest", pw: "guest", nickname: "Guest_User" }
];

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const id = document.getElementById('userId').value;
    const pw = document.getElementById('userPw').value;

    const user = fakeUsers.find(u => u.id === id && u.pw === pw);

    if (user) {
        alert(`${user.nickname}님, 환영합니다!`);
        // 로그인 정보 저장
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('nickname', user.nickname);
        // 메인으로 이동
        window.location.href = "/index.html";
    } else {
        alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
});
