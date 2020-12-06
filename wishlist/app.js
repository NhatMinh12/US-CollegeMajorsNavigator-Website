let btnSearch = document.getElementById('btnSearch');
let stateSelect = document.getElementById('stateSelect');
let majorSelect = document.getElementById('majorSelect');
let main = document.getElementById('main');

btnSearch.addEventListener('click', function () {
    main.innerHTML = '';
    main.scrollIntoView();

    let state = stateSelect.value;
    let major = majorSelect.value;
    // console.log(state);
    // console.log(major);
    

    for (let i = 0; i < DATA.length; i++) {
        let isSatisfy = false;
        if (DATA[i]['state'] == state) {
            isSatisfy = true;
        }

        for (let j = 0; j < DATA[i]['majors'].length; j++) {
            if (DATA[i]['majors'][j] == major) {
                isSatisfy = true;
                break;
            }
        }
        if(isSatisfy ==true){
            renderElement(DATA[i])
        }
    }
})

function renderElement(obj) {

    let html = `<div class="schools">
                    <a href="${obj.link}" target="_blank">
                        <img src="${obj.img}" alt="">
                        <h4>${obj.name}</h4>
                        <p>${obj.rank}</p>
                        <p>${obj.location}</p>
                    </a>
                    <div class="removeMain">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 496.096 496.096"
                        style="enable-background:new 0 0 496.096 496.096;" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M259.41,247.998L493.754,13.654c3.123-3.124,3.123-8.188,0-11.312c-3.124-3.123-8.188-3.123-11.312,0L248.098,236.686
                    L13.754,2.342C10.576-0.727,5.512-0.639,2.442,2.539c-2.994,3.1-2.994,8.015,0,11.115l234.344,234.344L2.442,482.342
                    c-3.178,3.07-3.266,8.134-0.196,11.312s8.134,3.266,11.312,0.196c0.067-0.064,0.132-0.13,0.196-0.196L248.098,259.31
                    l234.344,234.344c3.178,3.07,8.242,2.982,11.312-0.196c2.995-3.1,2.995-8.016,0-11.116L259.41,247.998z" />
                            </g>
                        </g>

                    </svg></div>
                </div>`;
    
    main.insertAdjacentHTML('beforeend', html);
}