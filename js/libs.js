const loadData = () => {
    fetch('./js/product.json')
        .then(x => x.json())
        .then(data => setData(data));
};
const setData = (g) => {
    g.forEach(x => {
        console.log(x)
        const { id, name, description, price, image } = x;
        document.getElementById("div-container").innerHTML += `
            <div class="col">
                <div class="card">
                <img style ="height: 200px; padding: 35px;"  src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${description && description.length == 100 ? description : description.slice(0, 110) + "..." + 'more'}</p>
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
loadData();