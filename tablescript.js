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
		`<tr>
	      <th scope="row">1</th>
	      <td>Mark</td>
	      <td>Otto</td>
	      <td>@mdo</td>
	    </tr>
	    <tr>
	      <th scope="row">2</th>
	      <td>Jacob</td>
	      <td>Thornton</td>
	      <td>@fat</td>
	    </tr>
	    <tr>
	      <th scope="row">3</th>
	      <td colspan="2">Larry the Bird</td>
	      <td>@twitter</td>
	    </tr>`;
		
	}
	document.getElementById("myEvidence").innerHTML = output;
}
