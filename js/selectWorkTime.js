// window.addEventListener('load',function(){
  // resetYear();
  // resetMonth();
  // resetDates();
// });

const selectWhet = document.getElementById('recruitmentWhet');

selectWhet.addEventListener('change', function(){
  const startYear = Number(document.getElementById('startYear').value);
  const startMonth = Number(document.getElementById('startMonth').value);
  const startDate = Number(document.getElementById('startDate').value);
  const endYear = Number(document.getElementById('endYear').value);
  const endMonth = Number(document.getElementById('endMonth').value);
  const endDate = Number(document.getElementById('endDate').value);
  const startYears = document.getElementById('startYear');
  const endYears = document.getElementById('endYear');
  const startMonths = document.getElementById('startMonth');
  const endMonths = document.getElementById('endMonth');
  const startDates = document.getElementById('startDate');
  const endDates = document.getElementById('endDate');

  // 同年同月で日付が不整合時
  if((startYear === endYear) && (startMonth === endMonth) && (startDate > endDate)){
    const selectValue = parseInt(startDates.value);
    for(let i = 0; i < endDates.options.length; i++){
      console.log(selectValue);
      const optionValue = parseInt(endDates.options[i].value);
      if(optionValue < selectValue){
        endDates.options[i].disabled = true;
        endDates.options[i].selected = false;
      } else {
        endDates.options[i].disabled = false;
      }
    }
    console.log('日付の入力に問題があります');
  } else {
    return;
  }

  // 同年で月が不整合時
  if(startYear === endYear && startMonth > endMonth){
    const selectValue = parseInt(startMonths.value);
    for(let i = 0; i < endMonths.options.length; i++){
      console.log(selectValue);
      const optionValue = parseInt(endMonths.options[i].value);
      if(optionValue < selectValue){
        endMonths.options[i].disabled = true;
        endMonths.options[i].selected = false;
      } else {
        endMonths.options[i].disabled = false;
      }
    }
    console.log('月の入力に問題があります');
  } else {
    return;
  }

  // 年が不整合時
  if(startYear > endYear){
    const selectYear = parseInt(startYears.value);
    for(let i = 0; i < endYears.options.length; i++){
      console.log(selectYear);
      const optionValue = parseInt(endYears.options[i].value);
      if(optionValue < selectYear){
        endYears.options[i].disabled = true;
        endYears.options[i].selected = false;
      } else {
          endYears.options[i].disabled = false;
        }
      }
    console.log('西暦の入力に問題があります');
  } else {
    const selectDate = parseInt(startDates.value);
    const selectMonth = parseInt(startMonths.value);

    // 同年同月の場合
    if(startYear === endYear && startMonth === endMonth){
      for (let i = 0; i < endDates.options.length; i++) {
        const endDateValue = parseInt(endDates.options[i].value);
        if(endDateValue < selectDate){
          endDates.options[i].disabled = true;
        } else {
          endDates.options[i].disabled = false;
        }
      }
    } else {
      return;
    }

    // 同年の場合
    if(startYear === endYear){
      for (let i = 0; i < endMonths.options.length; i++) {
        const endMonthValue = parseInt(endMonths.options[i].value);
        if(endMonthValue < selectMonth){
          endMonths.options[i].disabled = true;
        } else {
          endMonths.options[i].disabled = false;
        }
      }
    } else {
      return;
    }
    
    if(startYear < endYear){
      for (let i = 0; i < endMonths.options.length; i++) {
        endMonths.options[i].disabled = false;
      }
    } else {
      return;
    }
  console.log('入力に問題はありません');
  }
})