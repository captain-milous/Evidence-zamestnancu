import {ID, Zamestnanec, Evidence} from "./classes.js";

function refreshMainPage(list) {
	let output = ``;
	for(let i = 0; i < list.length; i++){
		output = output  + `<div id="`+ i +`" class="col"><div class="card shadow-sm">
		<div class="card-body">
		<h3 class="fw-bold lh-1">`+ list[i].name +`</h3>
		<br>
		<p class="card-text">Position: `+list[i].position +`</p>
		<p class="card-text">Salary: `+list[i].salary +`</p>
		<p class="card-text">Started on date: `+ list[i].start_date +`</p>
		<p class="card-text">Office: `+list[i].office +`</p>
		</div></div></div>`;
		
	}
	document.getElementById("myEvidence").innerHTML = output;
}

let evidZam = new Evidence("Evidence Milošových Zaměstnanců");
evidZam.addZam(new Zamestnanec("Test User 1", "Tester", 0, '20-03-2016', "Prague", 5042));
evidZam.addZam(new Zamestnanec("Test User 2", "Tester", 0, '19-09-2019', "Prague", 4094));


console.log(evidZam.getMyList());
refreshMainPage(evidZam.evidence);