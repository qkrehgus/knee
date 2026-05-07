<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>말끊지마오</title>
    <link rel="stylesheet" href="/css/signup.css">
</head>
<body>
  <?php include_once (__DIR__ . "./header.php") ?>
  <main>
    <button class="back-btn">❌</button>
    <section>
      <h1>회원가입</h1>
  
        아이디<br>
        <input type="text"><br><br>
  
        비밀번호<br>
        <input type="password"><br><br>
  
        비밀번호 확인<br>
        <input type="password"><br><br>
  
        이름<br>
        <input type="text"><br><br>
  
        생년월일<br>
        <input type="date"><br><br>
  
        이메일<br>
        <input type="text" style="width:120px;"> @
        <select>
          <option>naver.com</option>
          <option>gmail.com</option>
          <option>daum.net</option>
        </select>
  
        <br><br>
        <a href="./main.php" class="r-btn">회원가입하기</a>
    </section>

  </main>
</body>
<script src="/javascript/everything.js"></script>
</html>