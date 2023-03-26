const createFormBtn = document.getElementById('createFormBtn');

createFormBtn.addEventListener('click', ()=>{
  const startYear = Number(document.getElementById('startYear').value);
  const startMonth = Number(document.getElementById('startMonth').value) - 1;
  const startDate = Number(document.getElementById('startDate').value);
  const endYear = Number(document.getElementById('endYear').value);
  const endMonth = Number(document.getElementById('endMonth').value - 1);
  const endDate = Number(document.getElementById('endDate').value);

  const startDateObj = new Date(startYear, startMonth, startDate);
  const endDateObj = new Date(endYear, endMonth, endDate);

  const startWorkHour = Number(document.getElementById('startWorkHour').value);
  const startWorkMin = Number(document.getElementById('startWorkMin').value);

  const endWorkHour = Number(document.getElementById('endWorkHour').value);
  const endWorkMin = Number(document.getElementById('endWorkMin').value);

  const datePeriod = parseInt((endDateObj - startDateObj) / 1000 / 60 / 60 / 24) + 1;
  
  const takeMin = Number(document.getElementById('takeMin').value);
  
  document.getElementById('decideMessage').textContent = 
  `${startYear}年${startMonth + 1}月${startDate}日 〜 ${endYear}年${endMonth + 1}月${endDate}日 の 
  ${datePeriod} 日間のシフト希望を募集します。
  1日の業務時間は${startWorkHour} : ${startWorkMin}から${endWorkHour} : ${endWorkMin}です。
  シフトは${takeMin}分単位で募集します。`;
  
  createCalendar(startDateObj, endDateObj);
  calendarFrame.classList.remove('hidden');
});

function createCalendar(startDate, endDate) {
  const calendar = document.getElementById('calendar');
  calendar.textContent = '';
  
  // 開始日と終了日の月数を取得
  const startMonth = startDate.getMonth();
  const endMonth = endDate.getMonth() + (endDate.getFullYear() - startDate.getFullYear()) * 12;
  
  // 指定された期間内の各月に対して、カレンダーを生成
  for (let i = startMonth; i <= endMonth; i++) {
    // カレンダーの基本となる要素を生成
    const monthContainer = document.createElement('div');
    monthContainer.classList.add('calendar-month');
    
    // カレンダーの見出しを生成
    const heading = document.createElement('h2');
    heading.textContent = `${startDate.getFullYear() + Math.floor(i / 12)}年${i % 12 + 1}月`;
    monthContainer.appendChild(heading);
    
    // カレンダーのテーブルを生成
    const table = document.createElement('table');
    table.classList.add('calendar-table');
    
    // カレンダーのヘッダーを生成
    const headerRow = document.createElement('tr');
    const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
    for (let j = 0; j < dayNames.length; j++) {
      const th = document.createElement('th');
      th.textContent = dayNames[j];
      headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
    
    // カレンダーの日付部分を生成
    const firstDay = new Date(startDate.getFullYear() + Math.floor(i / 12), i % 12, 1);
    const lastDay = new Date(startDate.getFullYear() + Math.floor(i / 12), i % 12 + 1, 0);
    let currentDate = firstDay;
    
    while (currentDate <= lastDay) {
      const weekRow = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        const td = document.createElement('td');
        if (currentDate.getMonth() === i % 12) {
          td.textContent = currentDate.getDate();
        }
        weekRow.appendChild(td);
        currentDate.setDate(currentDate.getDate() + 1);
      }
      table.appendChild(weekRow);
    }
    
    monthContainer.appendChild(table);
    calendar.appendChild(monthContainer);
  }
}