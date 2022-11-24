function ShowAlert() {
    let basket = JSON.parse(localStorage.getItem('products'));

    if(basket.length === 0) {
        document.querySelector('.empty-cart').classList.remove('d-none')
        document.querySelector('.table').classList.add('d-none')
    }
    else{
        document.querySelector('.empty-cart').classList.add('d-none')
        document.querySelector('.table').classList.remove('d-none')
    }
}


ShowAlert();


function GetList() {
    let basket = JSON.parse(localStorage.getItem('products'));

    let row = '';
    basket.forEach(pr => {
        let int_price = pr.Price.slice(-(pr.Price.length),-4);
        row += `
            <tr>
                <th scope="row">${pr.Id}</th>
                <td class="img-td">
                    <img src=${pr.Image} alt="">
                </td>
                <td>${pr.Name.length > 10 ? pr.Name.slice(0,20) + "..." : pr.Name}</td>
                <td>
                    <input type="number" value=${pr.Count}>
                </td>
                <td>
                ${int_price > 100 ? `<span class="text-danger fw-bold">${int_price} AZN</span>` : `<span class="text-success fw-bold">${int_price} AZN</span>`}
                </td>
            </tr>
        `
    })

    document.getElementById('tbdy').innerHTML = row;
}

GetList();