export function formatDateTime(dateTimeString: string) {
    const date = new Date(dateTimeString);
  
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr",
      "May", "Jun", "Jul", "Aug", 
      "Sep", "Oct", "Nov", "Dec"
    ];
  
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
  
    return date.getDate() + ' ' + monthNames[monthIndex] + ' ' + year + ' - ' + date.getHours() + ':' + date.getMinutes();
  }  
  
  export function formatDate(date: string) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [year, month, day].join('-');
  }
  
  export function getDay(date: string){
    var d = new Date(date),
        day = d.getDate();
        return day;
  }