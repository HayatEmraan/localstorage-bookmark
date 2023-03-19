const loadData = () => {
    fetch('./js/product.json')
        .then(x => x.json())
        .then(data => setData(data));
};
const setData = (g) => {
    g.forEach(x => {
        const { id, name, description, price, image } = x;
        const yz = checkId(id);
        document.getElementById("div-container").innerHTML += `
            <div class="col">
                <div class="card">
                <img style ="height: 200px; padding: 35px;"  src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <i onclick = "elementId('${id}', '${name}','${price}')" type ="button" style ="position: absolute; top: 15px; right: 25px;" class="${ yz ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}"></i>
                    <p class="card-text">${
                      description && description.length == 100
                        ? description
                        : description.slice(0, 110) + "..." + "more"
                    }</p>
                    <div class="d-flex justify-content-between">
                        <p class="display-6 fw-semibold">$<span>${price}</span></p>
                        <button style="height: 50px;" class="btn btn-primary rounded-lg py-0 px-5">BUY Now</button>
                    </div>
                </div>
                </div>
            </div>
        `;
    });
};
const elementId = (id, name, price) => {
    const getOne = JSON.parse(localStorage.getItem('_value_get_'));
    const setOne = { id, name, price };
    const xy = [];
    if (getOne) {
        const findGet = getOne.find(x => x.id == id);
        if (findGet) {
            const getNewOne = getOne.filter(xyz => xyz != findGet);
            localStorage.setItem("_value_get_", JSON.stringify(getNewOne));
        } else {          
            xy.push(...getOne, setOne);
            localStorage.setItem("_value_get_", JSON.stringify(xy));
        }
    } else {
        xy.push(setOne);
        localStorage.setItem("_value_get_", JSON.stringify(xy));
    }
}
const checkId = x => {
    const getOne = JSON.parse(localStorage.getItem("_value_get_"));
    const checkData = getOne?.find(xy => xy.id == x);
    if (checkData) {
        return true;
    } else {
        false;
    }
}
loadData();