// Player List start 
document.getElementById('btn_afif').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Afif Hossain';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_afif').setAttribute("disabled", "");
})
document.getElementById('btn_shakib').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Shakib Al Hasan (C)';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_shakib').setAttribute("disabled", "");
})
document.getElementById('btn_anamul').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Anamul Haque';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_anamul').setAttribute("disabled", "");
})
document.getElementById('btn_ebadat').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Ebadot Hossain';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_ebadat').setAttribute("disabled", "");
})
document.getElementById('btn_fizz').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Mustafizur Rahman';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_fizz').setAttribute("disabled", "");
})
document.getElementById('btn_mahmudullah').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Mahmudullah';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_mahmudullah').setAttribute("disabled", "");
})
document.getElementById('btn_miraz').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Mehidy Hasan Miraz';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_miraz').setAttribute("disabled", "");
})
document.getElementById('btn_mosaddek').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Mosaddek Hossain';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_mosaddek').setAttribute("disabled", "");
})
document.getElementById('btn_musfiq').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Mushfiqur Rahim (W)';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_musfiq').setAttribute("disabled", "");
})
document.getElementById('btn_nasum').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Nasum Ahmed';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_nasum').setAttribute("disabled", "");
})
document.getElementById('btn_nurul').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Nurul hasan';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_nurul').setAttribute("disabled", "");
})
document.getElementById('btn_sabbir').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Sabbir Rahman';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_sabbir').setAttribute("disabled", "");
})
document.getElementById('btn_saif').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Saifuddin';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_saif').setAttribute("disabled", "");
})
document.getElementById('btn_mahedi').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Mahedi Hasan';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_mahedi').setAttribute("disabled", "");
})

document.getElementById('btn_taskin').addEventListener('click', function () {
    const playerList = document.getElementById('playerList');
    const li = document.createElement('li');
    li.innerText = 'Taskin Ahmed';
    li.classList.add('item');
    playerList.appendChild(li);
    document.getElementById('btn_taskin').setAttribute("disabled", "");
})
// Player List End

// Players Expenses area 
const txt = document.getElementById('inputFild');
const out = document.getElementById('p_expenses');

document.getElementById('btn_total_expense').addEventListener('click', function () {
    const playerList = document.querySelectorAll('li');
    const players = playerList.length;
    if (players < 12) {
        out.innerHTML = txt.value * players;
    }
    else {
        alert("Please Select Best XI or Less!");
    }
})

//Total cost area 

document.getElementById('btn_total_cost').addEventListener('click', function () {
    const playerField = document.getElementById('inputFild');
    const perPlayerAmount = parseFloat(playerField.value);
    const playerList = document.querySelectorAll('li');
    const players = playerList.length;
    const playersAmount = perPlayerAmount * players;

    const managerField = document.getElementById('managerInputFild');
    const managerAmount = parseFloat(managerField.value);
    const coachField = document.getElementById('coatchInputFild');
    const coachAmount = parseFloat(coachField.value);

    const totalElement = document.getElementById('t_expenses');
    const total = playersAmount + managerAmount + coachAmount;
    totalElement.innerText = total;

})