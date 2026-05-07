<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>말끊지마오</title>
    <link rel="stylesheet" href="/css/set.css" />
  </head>
  <body>
    <?php include_once (__DIR__ . "./header.php") ?>
    <main>
      <button class="back-btn">❌</button>
      <h1>설정</h1>
      <div class= "setting">
        <h2>배경음악</h2>
        <div class="setting-buttons">
          <button class="bgm-start">켜기</button>
          <button class="bgm-end">끄기</button>
        </div>
        <input class="bgm-range" type="range">
      </div>
      <div class= "setting">
        <h2>폰트</h2>
        <button>기본체</button>
        <button>궁서체</button>
      </div>
      <div class= "setting">
        <h2>다크모드</h2>
        <button>test</button>
      </div>
    </main>
  </body>
<script src="/javascript/everything.js"></script>
</html>
