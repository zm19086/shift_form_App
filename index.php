<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"> -->
  <link rel="stylesheet" href="./css/style.css">
  <script src="./js/script.js" defer></script>
  <script src="./js/selectWorkTime.js" defer></script>
  <script src="./js/createCalendar.js" defer></script>
  <title>test</title>
</head>
<body>
  <h1>募集するシフトの設定</h1>
  <form name="custumizeForm">
    <div class="recruitmentWhet" id="recruitmentWhet">
      <p>募集するシフトの期間を指定してください。</p>
      <select class="select whet" name="startYear" id="startYear"></select><label for="startYear">年</label>
      <select class="select whet" name="startMonths" id="startMonth"></select><label for="startMonths">月</label>
      <select class="select whet" name="startDate" id="startDate"></select><label for="startDate">日</label>
      <span> 〜 </span>
      <select class="select whet" name="endYear" id="endYear"></select><label for="endYear">年</label>
      <select class="select whet" name="endMonths" id="endMonth"></select><label for="endMonths">月</label>
      <select class="select whet" name="endDate" id="endDate"></select><label for="endDate">日</label>
    </div>
    <div class="businessHours">
      <p>業務時間を指定してください。</p>
      <label for="startWorkHour">始業時刻</label>
      <select name="startWorkHour" id="startWorkHour"></select>
      <span> : </span>
      <select name="startWorkMin" id="startWorkMin"></select>
      <label for="finishedWorkHour">終業時刻</label>
      <select name="endWorkHour" id="endWorkHour"></select>
      <span> : </span>
      <select name="endWorkMin" id="endWorkMin"></select>
    </div>
    <div class="minUnit">
      <p>何分単位でシフトを募集するかを指定してください。</p>
      <select name="takeMin" id="takeMin"></select>
      <label for="tekeMin">分単位</label>
    </div>
  </form>
  <input type="button" class="createFormBtn" id="createFormBtn" value="上記の設定で募集フォームを作成する">
  <!-- <a href="submitForm.php">シフト送信フォーム</a> -->
  <div id="decideMessage"></div>

  <div class="hidden" id="calendarFrame">
    <div id="calendar"></div>
  </div>

</body>
</html>