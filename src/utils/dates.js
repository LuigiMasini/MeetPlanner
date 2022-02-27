const str_pad = n => String("00" + n).slice(-2);

const date2Str = date => date.getFullYear()+"-"+str_pad(date.getMonth()+1)+"-"+str_pad(date.getDate())

const date2Str2 = date => weekDays_S2S[date.getDay()]+", "+date.getDate()+" "+monthNames[date.getMonth()]

const str2Date = str => {
	if (!str || typeof str !== "string")
		return str
	const [date,time]=str.split(' ')
	const YMD=date.split("-"), HMS=time.split(':')
	return new Date(YMD[0],YMD[1]-1,YMD[2],HMS[0],HMS[1],HMS[2])
}

const weekDays_M2S = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]
const weekDays_S2S = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]

const monthNames = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]

function getDaysToDate(endDate, startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())){
	return Math.floor((endDate.getTime()- startDate.getTime())/1000/60/60/24)
}

const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())

function getMonday(d) {
	d = new Date(d);
	var day = d.getDay(),
	diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
	return new Date(d.setDate(diff));
}

export {date2Str, str2Date, str_pad, weekDays_M2S, weekDays_S2S, monthNames, date2Str2, getDaysToDate, today, getMonday}