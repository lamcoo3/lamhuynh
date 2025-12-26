let inputSearch = document.getElementById("search-toDoList");
let btnSearch = document.getElementById("search");
let btnSort = document.getElementById("dropdownMenu1");
let elmTypeOfSort = document.getElementById("typeOfSort");
let btnOpenForm = document.getElementById("createTaskList");
let elmTotalTask = document.getElementById("list");
let elmEmpty = document.getElementById("empty");
let TODO_LIST = JSON.parse(localStorage.getItem("zendvn_todo_list") || "[]");
let formTaskList = document.getElementById("formTaskList");
let btnCancel = document.getElementById("cancel");
let inputTaskName = document.getElementById("create");
let btnSubmit = document.getElementById("submit");
let inputTaskLevel = document.getElementById("inputDs");
let isOpenForm = false;
formTaskList.style.display = "none";
let idEdit = -1;

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		event.preventDefault();
		inputSearch.value = "";
		inputSearch.focus();
		renderHTML(TODO_LIST);
	}
});

// TODO_LIST = [
//   { id: "1", name: "Complete Javascript course", level: 2 },
//   { id: "2", name: "record video", level: 0 },
//   { id: "3", name: "Learning", level: 1 },
//   { id: "4", name: "reading Book", level: 2 },
//   { id: "5", name: "GYM", level: 0 },
//   { id: "6", name: "Laragon GUIde", level: 1 },
// ];

renderHTML(TODO_LIST);

function renderHTML(data) {
	if (data.length == 0) {
		elmEmpty.innerText = "Chưa có công việc nào. Bắt đầu bằng cách thêm mục ở trên nhé!";
		elmTotalTask.innerHTML = "";
	} else {
		elmEmpty.innerText = "";
		let result = "";
		let searchValue = inputSearch.value;
		for (let i = 0; i < data.length; i++) {
			let name = data[i].name;
			let level = data[i].level;
			let id = data[i].id;
			let prior = "";

			if (level == 0) {
				level = "Small";
				prior = "label-default";
			} else if (level == 1) {
				level = "Medium";
				prior = "label-info";
			} else {
				level = "High";
				prior = "label-danger";
			}

			if (name == "") continue;
			if (searchValue.length > 0)
				name = name.replace(new RegExp(searchValue, 'gi'), `<span class="highlight">${searchValue}</span>`);
			result += `<tr>
						<td class="text-center">1</td>
						<td>${name}</td>
						<td class="text-center"><span class="label ${prior}">${level}</span></td>
						<td>
							<button onclick="funcEdit('${id}', '${data[i].name}', '${data[i].level}')" type="button" class="btn btn-warning">Edit</button>
							<button onclick="funcDelete('${id}')" type="button" class="btn btn-danger">Delete</button>
						</td>
					</tr>`;
		}
		elmTotalTask.innerHTML = result;
	}
}

function funcSort(column, order) {
	const columnUpperCase = column.toUpperCase();
	const orderUpperCase = order.toUpperCase();

	elmTypeOfSort.innerText = columnUpperCase + " - " + orderUpperCase;

	if (column == "name") {
		if (order == "asc") {
			TODO_LIST.sort((a, b) => a.name.localeCompare(b.name));
		} else {
			TODO_LIST.sort((a, b) => b.name.localeCompare(a.name));
		}
	} else if (column == "level") {
		if (order == "asc") {
			TODO_LIST.sort((a, b) => a.level - b.level);
		} else {
			TODO_LIST.sort((a, b) => b.level - a.level);
		}
	}
	renderHTML(TODO_LIST);

}

btnOpenForm.addEventListener('click', function () {
	if (isOpenForm == true) {
		formTaskList.style.display = "none";
		isOpenForm = false;
		btnOpenForm.innerText = "Open Form";
		btnOpenForm.style.background = "#5bc0de";
	} else {
		formTaskList.style.display = "block";
		isOpenForm = true;
		btnOpenForm.innerText = "Close Form";
		btnOpenForm.style.background = "#2a3e67";
	}
});

btnCancel.addEventListener('click', function () {
	formTaskList.style.display = "none";
	btnOpenForm.innerText = "Open Form";
	isOpenForm = false;
	inputTaskName.value = "";
	btnOpenForm.style.background = "#5bc0de";
});

function generateString(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

btnSubmit.addEventListener('click', function () {
	let taskName = inputTaskName.value.trim();
	let taskLevel = inputTaskLevel.value;
	let taskID = generateString(8); // hn53hhdn

	if (taskName.length >= 3) {
		let isExist = false;
		for (let i = 0; i < TODO_LIST.length; i++) {
			if (taskName == TODO_LIST[i].name) {
				isExist = true;
				break;
			}
		}

		if (idEdit == -1) {
			if (isExist == false) {
				let taskObj = {
					name: taskName,
					level: taskLevel,
					id: taskID,
				}
				TODO_LIST.unshift(taskObj);
			} else {
				alert("TODO Exist!");
			}

		} else {
			// TODO_LIST = [{id,name,level}, {id,name,level}]
			// idEdit, taskNname, taskLevel
			TODO_LIST = TODO_LIST.map(item => {
				if (item.id === idEdit) {
					return {
						...item,
						name: taskName,
						level: taskLevel
					};
				}
				return item;
			});
			idEdit = -1;
		}
		inputSearch.value = "";
		btnCancel.click();

		localStorage.setItem("zendvn_todo_list", JSON.stringify(TODO_LIST));
		renderHTML(TODO_LIST);
		inputTaskName.value = "";
		inputTaskName.focus();
	} else {
		alert("Cook")
	}
});

function funcDelete(idValue) {
	// idValue string
	// TODO_LIST array chua nhieu {id, name, level}
	// xoa phan tu trong TODO_LIST co id cua no = idValue

	if (confirm("Are you sure?") == true) {
		TODO_LIST = TODO_LIST.filter(item => item.id !== idValue);
		renderHTML(TODO_LIST);
		localStorage.setItem("zendvn_todo_list", JSON.stringify(TODO_LIST));
	}
}

function funcEdit(id, name, level) {
	formTaskList.style.display = "block";
	inputTaskName.value = name;
	inputTaskLevel.value = level;
	idEdit = id;
}

btnSearch.addEventListener('click', function (event) {
	let searchValue = inputSearch.value.trim().toLowerCase();
	let result = TODO_LIST.filter(item =>
		item.name.toLowerCase().includes(searchValue)
	);
	renderHTML(result);
})

inputSearch.addEventListener('keypress', function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		btnSearch.click();
	}
});
