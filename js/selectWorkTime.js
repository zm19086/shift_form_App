limitOptions();

const selectWhet = document.getElementById('recruitmentWhet');
selectWhet.addEventListener('change', function(){
  limitOptions();
});

function limitOptions(){

  const startYear = Number(document.getElementById('startYear').value);
  const startMonth = Number(document.getElementById('startMonth').value);
  const endYear = Number(document.getElementById('endYear').value);
  const endMonth = Number(document.getElementById('endMonth').value);
  const startYears = document.getElementById('startYear');
  const endYears = document.getElementById('endYear');
  const startMonths = document.getElementById('startMonth');
  const endMonths = document.getElementById('endMonth');
  const startDates = document.getElementById('startDate');
  const endDates = document.getElementById('endDate');
  
  // 同年同月の場合に終了日の選択肢から開始日以前を選択不可にする
  if(startYear === endYear && startMonth === endMonth){
    const selectDate = parseInt(startDates.value);
    for(let i = 0; i < endDates.options.length; i++){
      const optionDate = parseInt(endDates.options[i].value);
      if(optionDate < selectDate){
        endDates.options[i].disabled = true;
        endDates.options[i].selected = false;
      } else {
        endDates.options[i].disabled = false;
      }
    }
    // console.log('日付の入力を制限しました');
  
  // 同年の場合に終了月の選択肢から開始月以前を選択不可にする
  } else if(startYear === endYear){
    const selectMonth = parseInt(startMonths.value);
    for(let i = 0; i < endMonths.options.length; i++){
      const optionMonth = parseInt(endMonths.options[i].value);
      if(optionMonth < selectMonth){
        endMonths.options[i].disabled = true;
        endMonths.options[i].selected = false;
      } else {
        endMonths.options[i].disabled = false;
      }
    }
    // console.log('月の入力を制限しました');
    
  // 終了年の選択肢から開始年以前を選択不可にする
  } else if(startYear > endYear){
    const selectYear = parseInt(startYears.value);
    for(let i = 0; i < endYears.options.length; i++){
      const optionYear = parseInt(endYears.options[i].value);
      if(optionYear < selectYear){
        endYears.options[i].disabled = true;
        endYears.options[i].selected = false;
      } else {
        endYears.options[i].disabled = false;
      }
    }
  // console.log('西暦の入力を制限しました');
  } else {
    for (let i = 0; i < endDates.options.length; i++) {
      endDates.options[i].disabled = false;
    }
    for (let i = 0; i < endMonths.options.length; i++) {
      endMonths.options[i].disabled = false;
    }
    for (let i = 0; i < endYears.options.length; i++) {
      endYears.options[i].disabled = false;
    }
  
  // console.log('入力に問題はありません');
  }
}